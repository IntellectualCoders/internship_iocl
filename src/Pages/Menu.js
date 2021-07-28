import React from 'react';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import {withRouter} from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../Components/navbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(4),
    color: 'rgb(25,25,112,1)',
    minHeight:'67vh',
  },
  card:{
    backgroundColor:'#191970',
    padding:'10px',
    margin:'5px',
    borderRadius:'10px'
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
  large:{
    width: theme.spacing(30),
    height: theme.spacing(30),
    display:'block',
    margin: theme.spacing(0,'auto'),
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
  


function Menu({history}) {
  const classes = useStyles();
  const history2 = useHistory();
  React.useEffect(() => {
    const node = loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <>
    <Navbar history={history}/>
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
         Menu
        </Typography>
        <Grid container>
            <Grid xs={12} md={3}>
            <Card className={classes.card}>
      <CardActionArea onClick={() => {history2.push(`/userProfile`)}}>
        <CardContent >
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Icon className="fas fa-user " style={{ color:'white',fontSize:'8em'}} />
          </div>
          <Typography Bottom style={{color:"white", textAlign:'center', marginTop:'10px'}} variant="h5" component="h2">
            Profile
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
            <Grid xs={12} md={3}>
            <Card className={classes.card}>
      <CardActionArea onClick={() => {history2.push(`/doclist`)}}>
        <CardContent>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
         <Icon className="fas fa-user-md " style={{ color:'white',fontSize:'8em'}} />
          </div>
          <Typography Bottom style={{color:"white", textAlign:'center', marginTop:'10px'}} variant="h5" component="h2">
            Telemedicine Service
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </Grid>
     <Grid xs={12} md={3}>
            <Card className={classes.card}>
      <CardActionArea onClick={() => {history2.push(`/appointments`)}}>
        <CardContent>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Icon className="fas fa-calendar-day" style={{ color:'white',fontSize:'8em'}} />
          </div>
          <Typography Bottom style={{color:"white", textAlign:'center',marginTop:'10px'}} variant="h5" component="h2">
            My Appointments
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </Grid>
     <Grid xs={12} md={3}>
            <Card className={classes.card}>
      <CardActionArea onClick={() => {history2.push(`/prescription`)}}>
        <CardContent>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Icon className="fas fa-notes-medical" style={{ color:'white',fontSize:'8em'}} />
          </div>
          <Typography Bottom style={{color:"white", textAlign:'center', marginTop:'10px'}} variant="h5" component="h2">
            Prescription
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </Grid>
     <Grid xs={12} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <Card className={classes.card} style={{width:'25em'}}>
      <CardActionArea onClick={() => {history2.push(`/vaccination-drive`)}}>
        <CardContent>
          <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
          <Icon className="fas fa-syringe" style={{ color:'white',fontSize:'8em'}} />
          </div>
          <Typography Bottom style={{color:"white", textAlign:'center', marginTop:'10px'}} variant="h5" component="h2">
            Vaccination Drive
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
     </Grid>
        </Grid>
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
export default withRouter(Menu);