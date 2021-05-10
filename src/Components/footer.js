import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    footer :{
        flexShrink: 0,
        textAlign: "center",
        backgroundColor: "#3F51B5",
        color: "white",
        paddingTop: "5px",
        paddingBottom: "5px",
        marginBottom: "0px",
        bottom: "0px",
      }
    }));

export default function  Footer() {
    const classes = useStyles();
    return(
    // <footer className={classes.footer}>
    //   <p>Made with <FavoriteIcon style={{color:"red"}}/> by <a href="https://github.com/IntellectualCoders" style={{color:"white"}}> Intellectual Coders</a> </p>
    // </footer>
    <BottomNavigation style={{backgroundColor:"#3F51B5"}}>
    <Typography>
    Made with <FavoriteIcon style={{color:"red"}}/> by <a href="https://github.com/IntellectualCoders" style={{color:"white"}}> Intellectual Coders</a>
    </Typography>
  </BottomNavigation>
  )};
