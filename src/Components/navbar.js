import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
}));

export default function Navbar({history}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img src="https://img.icons8.com/bubbles/2x/coronavirus.png" style={{height:"50px", marginRight:"10px"}}></img>
          <Typography variant="h6" className={classes.title}>
            COVID-19 Resources
          </Typography>
          <Button color="inherit" onClick={()=>{history.push("/")}}>Home</Button>
          <Button color="inherit" onClick={()=>{history.push("/vaccination")}}>Vaccination</Button>
          {/* <Button color="inherit" onClick={()=>{history.push("/district")}}>District</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}