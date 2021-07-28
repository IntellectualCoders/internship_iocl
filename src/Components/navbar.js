import React,{useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from "../imgs/Indian_Oil.png";
import Typist from 'react-typist';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { AuthContext } from "../context/authContext";
import firebase from '../firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  title2: {
    flexGrow: 1,
    fontSize:'15px',
    fontFamily: 'Courgette, cursive'
  },
}));

export default function Navbar({history}) {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{background:'#191970', borderBottom:'20px solid #EC6504',minHeight:'50px'}}>
        <Toolbar>
          <Zoom duration={3000}>
          <img alt="logo" src={logo} style={{height:"70px", marginRight:"10px"}}></img></Zoom>
          <Grid style={{flex:'1'}}>
          <Fade top delay={2000} distance='50%'>
          <Typography variant="h4" className={classes.title}>
          Indian Oil
          </Typography>
          </Fade>
          <Typography className={classes.title2}>
          <Typist stdTypingDelay={20} startDelay={100} avgTypingDelay={200} cursor={{show:'false',element:''}} >
          <Typist.Delay ms={3450} />
            The Energy of India
            </Typist>
          </Typography>
          </Grid>
          <div>
          <Button style={{float:'right'}}color="inherit" onClick={()=>{history.push("/covidLeads")}}>COVID Leads</Button>
          {/* <Button color="inherit" onClick={()=>{history.push("/vaccination")}}>Vaccination</Button> */}
          </div>{currentUser !== null ? <Button style={{float:'right'}}color="inherit" onClick={()=>{firebase.authreturns().signOut()}}>Sign Out</Button> :<div></div>}
          {/* <Button color="inherit" onClick={()=>{history.push("/district")}}>District</Button> */}
          </Toolbar>
      </AppBar>
    </div>
  );
}