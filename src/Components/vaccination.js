import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import axios from 'axios';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import FavoriteIcon from '@material-ui/icons/Favorite';


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
   maxWidth:500,
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


 const Vaccination =() => {
  const [state,setState]=useState("Delhi");
  const[currentid,setCurrentid] = useState(9);
  const [city, setCity] =useState("Delhi");
  var statemap = new Map();
 const [pincode,setPincode]=useState('110001');
  const classes = useStyles();
    const[states,setStates]=React.useState([]);
    // const[bool,setBool]=useState( states ? true : false );
  const[findbypin,setFindbypin]=useState([]);
 async  function apicall(){
  const res = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=12-05-2021`)
  .then(
        res=>{
setFindbypin(res.data.sessions);
console.log(res);
console.log(res.data.sessions);
        }
  )
}
    useEffect( ()=>{
      const fetchapi = async () =>{
        const res = await axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pincode}&date=12-05-2021`)
        .then(
              res=>{
setFindbypin(res.data.sessions);
console.log(res);
console.log(res.data.sessions);
              }
        )
      }





      //   const func = async()=>{
      //       const data = await axios.get(`https://cdn-api.co-vin.in/api/v2/admin/location/states`)
      //       .then(
      //         data => {
      //           setStates(data.data.states);
      //           console.log(data);
           
      //           console.log(states[0]);
      //         }
      //       )
            
      //   }
      //   // console.log(currentid)
      //  func();
      fetchapi();
      
    },[]
    );
    // function stateset(value){
    //   setCurrentid(
    //     statemap.get(value));
    //   console.log(value)
    //   // console.log(statemap.get(value))
    //   setState(value);
    //   console.log(currentid)
    //   }
   
    
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
        <Grid item xs={12} md={4}>
          <Paper className={classes.root} elevation={3}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
        {/* <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state}
          onChange={(e)=>{stateset(e.target.value)}}
          label="State"
        >
          {
            
            states.map((state)=>{
              return(
    
               
                <MenuItem  value={state && state.state_name}>{state && state.state_name}</MenuItem>
   
              )
            })
          }
        
        </Select> */}

      </FormControl>
      <FormControl className={classes.formControl}>
      <TextField id="outlined-basic" label="Enter Pin" variant="outlined" value={pincode} onChange={(e)=>setPincode(e.target.value)} />
      </FormControl>
      <Button onClick={apicall()}>Search by pincode</Button>
     
      </Paper>
        </Grid>
        <Grid item xs={12} md={4} >
        <Card className={classes.card} elevation={3}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Twitter <TwitterIcon className={classes.icon}/>
        </Typography>
        <Typography variant="h5" component="h2">
          {state?state:'Delhi'}
        </Typography>
      
        
      </CardContent>
      <CardActions>
       
        
      </CardActions>
    </Card>



        </Grid>
        <Grid xs={12} md={4}>
         <Paper style={{marginTop:'10px'}}>
           <img style={{width: '100%',borderRadius: '10px'}}src="https://www.humansupportgroup.co.uk/wp-content/uploads/2020/05/stay-home-save-lives-flyer-template-design-b5427054ab3b0e1697426c73ac656ffc_screen.jpg"/>
           
         </Paper>
        </Grid>
      </Grid>
      <BottomNavigation
      showLabels
      className={classes.footer}
    >
      <Typography style={{color:"white",marginTop:"10px"}}>
    Made with <FavoriteIcon style={{color:"red"}}/> by <a href="https://github.com/IntellectualCoders" style={{color:"white"}}> INTELLECTUAL CODERS  </a>
    </Typography>
     </BottomNavigation>
    </div>
        </>
    );
 };

  export default Vaccination;