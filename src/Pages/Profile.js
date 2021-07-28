import React, { useContext} from 'react';
import { AuthContext } from "../context/authContext";
import Avatar from '@material-ui/core/Avatar';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import TextField from '@material-ui/core/TextField';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import {withRouter} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Navbar from '../Components/navbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import InfoIcon from '@material-ui/icons/Info';
import Container from '../utils/loading';
const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor:'rgb(25,25,112,0.2)',
    borderRadius:'10px',
    padding: theme.spacing(4),
    color: 'rgb(25,25,112,1)',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    // backgroundColor:'green',
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
const DarkerDisabledTextField = withStyles({
    root: {
      "& .MuiInputBase-root.Mui-disabled": {
        color: "rgba(25, 25, 112, 1)" ,// (default alpha is 0.38),
        fontWeight:'bold',
        fontSize:'20px'
      }
    }
  })(TextField);
  


function UserProfile({history}) {
  const classes = useStyles();
  const {  userDetails } = useContext(AuthContext);
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    < div style={{minHeight:'100vh'}}>
    <Navbar history={history}/>
    {userDetails?
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
         Employee Profile
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
          <Grid item xs={12} sm={3} >
            <Avatar variant='rounded' alt="Remy Sharp" src={userDetails.profilePic} className={classes.large} />
            </Grid>
            <Grid item xs={12} sm={9}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <DarkerDisabledTextField
                name="name"
                variant="outlined"
                fullWidth
                id="name"
                label="Full Name"
                value={userDetails.name}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DarkerDisabledTextField
                name="designation"
                variant="outlined"
                fullWidth
                id="designation"
                label="Designation"
                value={userDetails.designation}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DarkerDisabledTextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={userDetails.email}
                disabled
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <DarkerDisabledTextField
                variant="outlined"
                fullWidth
                name="phone"
                label="Phone Number"
                id="phone"
                value={userDetails.phoneNo}
                disabled
              />
            </Grid>
            <Grid item xs={6}>
            {/* <Typography component="h1" variant="h5">
         Dependents Details
        </Typography> */}
        <List>
        <ListItem button onClick={handleClick}>
        <ListItemText primary="Dependent Details" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {userDetails?userDetails.dependents.map((d) => {
            var arr = d.split(";");
            return(
              <ListItem className={classes.nested}>
            <ListItemIcon>
              <FiberManualRecordIcon />
            </ListItemIcon>
            <ListItemText primary={arr[0]} secondary={arr[1]} />
          </ListItem>
            );

          }):<ListItem className={classes.nested}>
          <ListItemIcon>
            <FiberManualRecordIcon />
          </ListItemIcon>
          <ListItemText primary="name" secondary="relation"/>
        </ListItem>}
        </List>
      </Collapse>
      </List>
            </Grid>
            </Grid>
          </Grid>
          </Grid>
        </form>
      </div>
      :<Container/>}
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
    </div>
  );
}
export default withRouter(UserProfile);