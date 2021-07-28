import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import firebase from "../firebase";
import GetAppIcon from '@material-ui/icons/GetApp';
import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Components/navbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import InfoIcon from '@material-ui/icons/Info';
import { CardActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Container from "../utils/loading";
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: "70%",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    large:{
        width: theme.spacing(17),
        height: theme.spacing(20),
        display:'block',
        margin: theme.spacing(0,'auto'),
      },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
     display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    maxWidth: 745,
    margin:'10px'
  },
  footer :{
    backgroundColor:'#191970',
    padding:'0px !important',
    paddingBottom:'10px !important',
    width:'100vw !important',
    position: 'fixed',
    marginTop:'20px',
    bottom: 0,
  },
}));

function Prescription({history}) {
  const classes = useStyles();
  const { userDetails } = useContext(AuthContext);
  const [prescription,setPrescription] = useState(null);

  useEffect(()=> {
    userDetails ? fetchPrescription() : console.log("");
  }, [userDetails]);
    
      const fetchPrescription= async ()=>{
        var data;
        await firebase.db
        .collection("appointments")
        .where("essNo","==",userDetails.essNo)
        .where("isprescription","==",true)
        .get()
        .then((querySnapshot) => {
          data = querySnapshot.docs.map((doc) => doc.data());
          console.log("data: " + data[0]);
          setPrescription(data);
      });
    }

  return (
    <>
    <Navbar history={history}/>
    <div style={{margin:'20px', marginBottom:'50px', minHeight:'80vh'}}>
      {userDetails && prescription?
    <Grid container style={{marginTop:'60px'}} >
       <Grid xs={12}>
        <Typography component="h1" variant="h3" style={{color:"#191970", textAlign:'center'}}>
         My Prescriptions
        </Typography>
        </Grid>
      {prescription.map((p)=>{
        var arr1 = p.patient.split(";");
        return(
            <Grid item xs={12} style={{marginTop:'20px',display:'flex',alignItems:'center',justifyContent:'center',}}>
        <Card className={classes.root}>
      <CardContent>
          <Grid container >
                      <Grid item xs={6}  >
        <Typography variant="h4" color="textPrimary" component="h2">
          {p.docName}
        </Typography></Grid>
        <Grid item xs={6} >
        <Typography variant="body1" color="textSecondry" component="p">
        <WatchLaterIcon style={{color:"#191970"}}/> 03-07-2020 @ {p.time}  
        </Typography></Grid>
        <Grid item xs={6}>
        <Typography variant="h6" color="textSecondry" component="h6">
        {p.specialization}
        </Typography></Grid>
        <Grid item xs={6}>
        <Typography variant="body1" color="textSecondry" component="p">
        <PersonIcon style={{color:"#191970"}}/> {arr1[0]} ({arr1[1]})  
        </Typography></Grid>
        </Grid>
      </CardContent>
      <CardActions>
      <Button variant="contained" color="primary" style={{marginLeft:'auto'}}>
            <GetAppIcon />  Download 
          </Button>
      </CardActions>
    </Card>
    </Grid>

        );
      })}
        
    </Grid>:<Container/>}
        </div>
        <div style={{height:'100px'}}></div>
    <BottomNavigation
      className={classes.footer}
    >
    <Grid>
      <Typography style={{color:"white",marginTop:"10px"}}>
    Developed by Corporate Information Systems Dept
    </Typography>
    <Typography style={{color:"white"}}>
    <a href='/#' style={{color:"white"}}> IOCL Data Privacy Policy <InfoIcon>{' '}</InfoIcon></a>
    </Typography>
    </Grid>
     </BottomNavigation>
    </>
  );
}
export default withRouter(Prescription);