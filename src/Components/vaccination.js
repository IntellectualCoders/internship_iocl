import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import FavoriteIcon from '@material-ui/icons/Favorite';

import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '20px',
    maxHeight:"100vh",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontSize:"25px",
    color: theme.palette.text.secondary,
  },
  row:{
    width: "auto",
    height: '100',
    margin: "0px",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  card:{
   maxWidth:"100%",
   marginBottom:'20px'
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  disbutton:{
    color: '#535349 !important',
    padding:'0px',
    margin:'5px',
    marginLeft:'0px',
    paddingLeft:'5px',
    paddingRight:'5px',
  },
  button:{
    paddingRight:'10px',
    paddingLeft:'10px',
    marginBottom:'10px',
    marginLeft:'10px',
  },
  icon:{
    float:"right",
    color:"#3F51B5",
  },
  footer :{
    width: '100%',
    backgroundColor:'#3F51B5',
    padding:'0px !important',
    marginLeft:'-20px',
    marginTop:'20px',
    marginBottom:'-20px',
    width:'100vw !important'

  }
}));

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.date}
        </TableCell>
        <TableCell align="right">{row.min_age_limit}</TableCell>
        <TableCell align="right">{row.available_capacity}</TableCell>
        <TableCell align="right">{row.vaccine}</TableCell>
        
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Slots
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Time</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.slots.map((historyRow) => (
                    <TableRow key={historyRow}>
                      <TableCell component="th" scope="row">
                        {historyRow}
                      </TableCell>
                      
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



  


 const Vaccination =() => {
  const [dense, setDense] = useState(false);
  const [pincode,setPincode]=useState('110001');
  const classes = useStyles();

  const[hospitals,setHospitals]=useState([]);
  const [currhospital,setCurrHospital] = useState(null);


    async  function searchByPincode(){
      const res = await axios
      .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=12-05-2021`)
      .then(
            res=>{
              setHospitals(res.data.centers);
              console.log(res);
              console.log(res.data.centers);
            }
      )
    }

    useEffect( ()=>{
      const fetchapi = async () =>{
        const res = await axios
        .get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=12-05-2021`)
        .then(
              res=>{
              setHospitals(res.data.centers);
              console.log(res);
              console.log(res.data.centers);
              }
        )
      }
      fetchapi();
      
    },[]);
   
   
    
    return(
        <>
        <div className={classes.root}>
        <Grid className={classes.row} container spacing={3}>
        <Grid item xs={12}>
        <Typography variant="p" component="p" style={{color: "red", textAlign:"center"}}><WarningIcon style={{color:"red", fontSize:'30px'}}/></Typography>
        <Typography variant="p" component="p" style={{color: "red", textAlign:"center"}}>Do <b>NOT</b> make advanced payments unless you are 100% sure about their authenticity.
        <br/>
         Check for replies under the tweets</Typography>
         </Grid>
        <Grid item xs={12} md={3}>
          <Paper className={classes.root} elevation={3}>
       
      <FormControl className={classes.formControl}>
      <TextField id="outlined-basic" 
      label="Enter Pin" variant="outlined" 
      value={pincode} 
      onChange={(e)=>setPincode(e.target.value)} 
      />
      </FormControl>
      <Button onClick={()=>{searchByPincode()}}>Search by Pincode</Button>
     
      </Paper>
        </Grid>
        <Grid item xs={12} md={3} >
        <Card className={classes.card} style={{maxHeight:"80vh", overflowY:"scroll"}} elevation={3}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Hospitals <LocalHospitalIcon className={classes.icon}/>
        </Typography>
        <Typography variant="h5" component="h2">
          {pincode?pincode:'110001'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        <List dense={dense}>
           {
             hospitals && hospitals.map((hospital)=>{
               return(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={hospital.name}
                    secondary={hospital.center_id}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={()=>{setCurrHospital(hospital)}}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>)
             })
           }
            </List>
        </Typography>
      </CardContent>
      <CardActions>
       
        
      </CardActions>
    </Card>



        </Grid>
        <Grid xs={12} md={6}>
         {/* <Paper style={{marginTop:'10px'}}> */}
           <Card className={classes.card} style={{marginTop:'10px', marginLeft:'10px'}} elevation={3}>
            <CardContent>
           { currhospital
           ? <>
             <Typography className={classes.pos} color="textSecondary">
               Hospital Name : {currhospital.name}
             </Typography>
             <Typography className={classes.pos} color="textSecondary">
               Hospital Address : {currhospital.address}
             </Typography>
             <Typography className={classes.pos} color="textSecondary">
               Block Name : {currhospital.block_name}
             </Typography>
             <Typography className={classes.pos} color="textSecondary">
               Fee Type : {currhospital.fee_type}
             </Typography>
             <Typography className={classes.pos} color="textSecondary">
               {/* Sessions : <ul>{currhospital.sessions.map((s)=>{
                 return(<li>{s.date}, {s.min_age_limit} and {s.vaccine}</li>)
               })}</ul>  */}


              <TableContainer component={Paper}>
                    <Table aria-label="collapsible table">
                      <TableHead>
                        <TableRow>
                          <TableCell />
                          <TableCell>Date</TableCell>
                          <TableCell align="right">Minimum Age Limit</TableCell>
                          <TableCell align="right">Avaliablity</TableCell>
                          <TableCell align="right">Vaccine</TableCell>
                          
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {currhospital.sessions.map((row) => (
                          <Row key={row.name} row={row} />
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>






             </Typography>
             </>
           :<img style={{width: '100%',borderRadius: '10px'}}src="https://www.humansupportgroup.co.uk/wp-content/uploads/2020/05/stay-home-save-lives-flyer-template-design-b5427054ab3b0e1697426c73ac656ffc_screen.jpg"/>
           }
           </CardContent>
           </Card>
         
        </Grid>
      </Grid>
      <BottomNavigation
      showLabels
      className={classes.footer}
    >
      <Typography style={{color:"white",marginTop:"10px"}}>
    Made with <FavoriteIcon style={{color:"red"}}/> by <a href="https://github.com/IntellectualCoders/Covid-19-leads" style={{color:"white"}}>Intellectual Coders</a>
    </Typography>
     </BottomNavigation>
    </div>
        </>
    );
 };

  export default Vaccination;