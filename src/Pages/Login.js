import React, {useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import firebase from '../firebase';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InfoIcon from '@material-ui/icons/Info';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Navbar from '../Components/navbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor:'#EAE9FA'
    marginBottom:'50px !important'
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  paper: {
    margin: theme.spacing(0 , 4),
    display: 'flex',
    padding:'20px',
    marginTop: '10.125%',
    marginBottom:'40px',
    borderRadius:'10px',
    backgroundColor:
    theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  footer :{
    backgroundColor:'#191970',
    padding:'0px !important',
    paddingBottom:'10px !important',
    width:'100vw !important',
    position: 'fixed',
    bottom: 0,
  },
}));



function Login({props,history}) {
  const classes = useStyles();
  let history1 = useHistory();

  useEffect(() => {
    loadCaptchaEnginge(6,'#191970','white');
  }, []);
  const [person, setPerson] = React.useState('employee');
  const [ess_no, setEss_no] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (event) => {
    setPerson(event.target.value);
  };
  async function login() {
    console.log("inside login fn");
    try {
      await firebase.login(ess_no, password);
      alert("authenticated");
      // person === 'admin'?history1.push('/admin'):
      history1.push('/home');
    } catch (error) {
      alert(error.message);
    }
  }
  const doSubmit = () => {
    console.log("in submit button");
    let user_captcha = document.getElementById('user_captcha_input').value;

    if (validateCaptcha(user_captcha)=== true) {
        loadCaptchaEnginge(6); 
        document.getElementById('user_captcha_input').value = "";
        console.log("captcha verified");
        login();
    }

    else {
        alert('Captcha Does Not Match');
        document.getElementById('user_captcha_input').value = "";
    }
    
};


  return (
      <>
      <Navbar history={history}/>
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} md={5}>
        <Paper className={classes.paper} elevation={6}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
          <FormControl variant="outlined" fullWidth>
        <Select
          id="demo-simple-select-outlined"
          value={person}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="employee"><em>Employee</em></MenuItem>
          <MenuItem value="doc">Doctor</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
        </Select>
      </FormControl>
          <FormControlLabel style={{alignItems:'center',marginLeft:'30%'}}
              control={<Checkbox value="remember" color="primary" />}
              label="I am an Ex-Employee"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="ESS_no"
              label="ESS Number"
              name="ESS_no"
              autoComplete="ESS_no"
              value={ess_no}
              onChange={(e)=>setEss_no(e.target.value)}
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              name="ESS_password"
              label="ESS Password"
              type="password"
              id="ESS_password"
              autoComplete="current-password"
            />
            <Grid container style={{marginLeft:'23%', marginTop:'20px'}}>
                <Grid item xs={12} style={{marginLeft:'25px'}}>
                <LoadCanvasTemplate />
                </Grid>
                <Grid item xs={12}>
                <TextField
              variant="outlined"
              margin="normal"
              required
              autowidth
              name="user_captcha_input"
              label="Enter Captcha Value"
              id="user_captcha_input"
            />
                </Grid>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid> */}
            </Grid> 
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() =>login()}
            >
             Login
            </Button>
          </form>
        </Paper>
      </Grid>
      <Grid item  md={7} style={{marginBottom:'20px'}}>
        <Box component="div" display={{ xs: 'none', md: 'block' }}>
      <img
                alt="ioc2021"
                style={{
                  width: "90%",
                  borderRadius: "10px",
                  marginTop: "10%",
                }}
                src='https://pbs.twimg.com/media/EquLQgTUwAYEstB?format=jpg&name=900x900'
              />
              </Box>
          </Grid>
    </Grid>
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
export default withRouter(Login);