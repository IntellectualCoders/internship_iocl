import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import firebase from "../firebase";
import TextField from '@material-ui/core/TextField';
import {withRouter} from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import Grid from '@material-ui/core/Grid';
import { CSVLink } from "react-csv";
import TableBody from '@material-ui/core/TableBody';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography';
// import { withStyles } from "@material-ui/core/styles";
import Navbar from '../Components/navbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import InfoIcon from '@material-ui/icons/Info';
import { Button } from '@material-ui/core';
import Container from "../utils/loading";
const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
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

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  // function createData(name, age, email) {
  //   return { name, age, email };
  // }

  // const rows = [
  //   createData('Roshi Vig', 34, 'vig21@gmail.com'),
  //   createData('Teghdeep Kapoor', 54, 'k21@gmail.com'),
  //   createData('Vardhika Jain', 24, 'j91@gmail.com'),
  //   createData('Divyam Srivastava', 74, 'div6@gmail.com'),
  //   createData('Dhananjay Sharma', 44, 'dj78@gmail.com'),
  // ];

  const headers = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Age", key: "age" }
  ];


function Admin({history}) {
  const classes = useStyles();
  const { userDetails } = useContext(AuthContext);
  const [rows,setRows] = useState(null);
  const[drive,setDrive]= useState('drive-1');
  const csvReport = {
    data: rows,
    headers: headers,
    filename: drive+'.csv',
  };

  useEffect(()=> {
    userDetails? fetchPatients() : console.log("");
  }, [drive]);

  useEffect(()=> {
    userDetails? fetchPatients() : console.log("");
  }, [userDetails]);
    
      const fetchPatients= async ()=>{
        var data;
        await firebase.db
        .collection("vaccination")
        .where('drive','==',drive)
        .get()
        .then((querySnapshot) => {
          data = querySnapshot.docs.map((doc) => doc.data());
          console.log("data: " + data[0]);
          setRows(data);
      });
    }

  const handleChange = (event) => {
    setDrive(event.target.value);
  };
  return (
    <>
    <Navbar history={history}/>
    {userDetails && rows ?
    <div style={{margin:'20px', marginBottom:'20px !important', minHeight:'100vh'}}>
        <Typography component="h1" variant="h3" style={{color:"#191970"}}>
         Upcoming Vacination Drives
        </Typography>
        
        <form className={classes.form} noValidate>
        <Grid container >
            <Grid item xs={12} md={5} style={{ margin:'5px'}}>
        <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Select Vaccination Drive</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={drive}
          onChange={handleChange}
        >
          <MenuItem value="drive-1"><em>Drive-1</em></MenuItem>
          <MenuItem value="drive-2">Drive-2</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid xs={12} md={5} style={{margin:'5px'}}>
        <TextField id="standard-search" label="Search by location (ex Delhi)" type="search" fullWidth />
        </Grid>
        </Grid>
        </form>
        <Grid container>
        <Grid item xs={6}>
        <Typography component="h4" variant="h4" style={{color:"#191970", margin:'20px 0px'}}>
         Total : {rows.length}
        </Typography>
        </Grid>
        <Grid item xs={6}>
        <Button variant="contained" color="primary" style={{ margin:'20px 0px', float:'right'}}>
        <CSVLink style={{color:'white', textDecoration: 'none'}} {...csvReport}>
        <GetAppIcon/> Download CSV
        </CSVLink>
        </Button>
        </Grid>
        </Grid>
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Age</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.age}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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
    </>
  );
}
export default withRouter(Admin);