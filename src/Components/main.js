import React,{useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import InfoIcon from '@material-ui/icons/Info';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WarningIcon from '@material-ui/icons/Warning';
import { useHistory } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';


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
    backgroundColor:'#191970',
    padding:'0px !important',
    paddingBottom:'20px !important',
    marginLeft:'-20px',
    marginTop:'20px',
    marginBottom:'-20px',
    width:'100vw !important'

  },
  modal:{
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

const DialogTitle = withStyles(useStyles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.modal} {...other}>
      <Typography variant="h6">{children}</Typography>
      {/* {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null} */}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CenteredGrid() {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
 
useEffect(() => {

  const modalNotOpen = () =>{
    setModalCount(1);
  } 

  const modalOpen =() =>{
    setOpen(true);
   localStorage.setItem('modal', true);
  }
  
  const shouldModalOpen=localStorage.getItem('modal') ? localStorage.getItem('modal') : false ;

shouldModalOpen 
?  modalNotOpen()
:  modalOpen() 

// const modalOpen=() => {
//  setOpen(true);
//  setModalCount(1);
//  localStorage.setItem('modal', true);
// }
// modalCount==0?modalOpen():console.log("New Feature");
},[])

  function handleClick() {
    history.push("/vaccination");
  }
  const [modalCount,setModalCount]=useState(0);
  const [state,setState]=useState("Delhi");
  const [city, setCity] =useState("Delhi");
  const [resource,setResource]=useState({
      oxygen: false,
      icubed: false,
      oxygenbed: false,
      rem: false,
      vental : false,
      oxygenCylinder:false,
      oxygenConcentartor: false,
      plasma:false,
      bed:false,
      favi:false,
      toci:false,
      food:false,
      ambulance:false,
      covidTest:false,
      fabi: false
  })
  

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = () => {
  //   setOpen(false);
  // };
  const classes = useStyles();
  const handleChange = (event) => {
    setResource({ ...resource, [event.target.name]: event.target.checked });
  };
  const TwitterLink = () =>{
    var array=[];
    
    resource.oxygen?array.push('%23oxygen%20OR%20oxygen%20'):console.log('Do not worry we are here to HELP!!');
    resource.oxygenbed?array.push('%23OxygenBed%20OR%20OxygenBed%20'):console.log('Do not worry we are here to HELP!!');
    resource.oxygenCylinder?array.push('%23OxygenCylinder%20OR%20OxygenCylinder%20'):console.log('Do not worry we are here to HELP!!');
    resource.oxygenConcentartor?array.push('%23OxygenConcentrator%20OR%20OxygenConcentrator%20'):console.log('Do not worry we are here to HELP!!');
    resource.rem?array.push('%23remdesivir%20OR%20remdesivir%20'):console.log('Do not worry we are here to HELP!!');
    resource.favi?array.push('%23favipiravir%20OR%20favipiravir%20'):console.log('Do not worry we are here to HELP!!');
    resource.toci?array.push('%23tocilizumab%20OR%20tocilizumab%20'):console.log('Do not worry we are here to HELP!!');
    resource.plasma?array.push('%23plasma%20OR%20plasma%20'):console.log('Do not worry we are here to HELP!!');
    resource.food?array.push('%23food%20OR%20food%20'):console.log('Do not worry we are here to HELP!!');
    resource.icubed?array.push('%23icu%20OR%20icu%20'):console.log('Do not worry we are here to HELP!!');
    resource.bed?array.push('%23bed%20OR%20bed%20'):console.log('Do not worry we are here to HELP!!');
    resource.vental?array.push('%23ventilator%20OR%20ventilator%20'):console.log('Do not worry we are here to HELP!!');
    resource.ambulance?array.push('%23ambulance%20OR%20ambulance%20'):console.log('Do not worry we are here to HELP!!');
    resource.covidTest?array.push('%20%23CovidTesting%20OR%20CovidTesting%20'):console.log('Do not worry we are here to HELP!!');
    resource.fabi?array.push('%23fabiflu%20OR%20fabiflu%20'):console.log('Do not worry we are here to HELP!!');
    var string='';
    array.map((a)=>{
      string = string + a + ' OR ';
    })

    var link = `https://twitter.com/search?q=verified ${city} (`+ `${string}` + `) -"not verified" -"unverified"&f=live` ;

    return(
      <Button color="primary" className={classes.button} variant="contained" onClick={()=>{window.open(link)}} size="small">Find Resources</Button>
    )
  }

  const TelegramLink = () =>{
    
    var telegramMap = new Map();
    telegramMap.set("Delhi","https://t.me/CovidDelhiNCR");
    telegramMap.set("Andhra Pradesh","https://t.me/apcovid19");
    telegramMap.set("Andaman and Nicobar Islands","https://t.me/covidfyiAN");
    telegramMap.set("Assam","https://t.me/IndiaFightsWithCovid");
    telegramMap.set("Bihar","https://t.me/covidresourcesbiharsehai");
    telegramMap.set("Chandigarh","https://t.me/chandigarhfightscovid");
    telegramMap.set("Dadar and Nagar Haveli","https://t.me/IndiaFightsWithCovid");
    telegramMap.set("Daman and Diu","https://t.me/covidfyiDD");
    telegramMap.set("Tripura","https://t.me/IndiaFightsWithCovid");
    telegramMap.set("Assam","https://t.me/covid19assamops");
    telegramMap.set("Lakshadweep","https://t.me/covidfyiLD");
    telegramMap.set("Arunachal Pradesh","https://t.me/covidjaankariarunachal");
    telegramMap.set("West Bengal","https://t.me/Covid19Bengal");
    telegramMap.set("Uttarakhand","https://t.me/covid19resourcesddun");
    telegramMap.set("Uttar Pradesh","https://t.me/covidhelpUp");
    telegramMap.set("Telangana","https://t.me/covidfyiTS");
    telegramMap.set("Tamil Nadu","https://t.me/chennaicovidhelp");
    telegramMap.set("Sikkim","https://t.me/covidfyiSK");
    telegramMap.set("Puducherry","https://t.me/pycovid");
    telegramMap.set("Goa","https://t.me/goasupermarket");
    telegramMap.set("Rajasthan","https://t.me/helpjaipur");
    telegramMap.set("Punjab","https://t.me/IndiaFightsWithCovid");
    telegramMap.set("Odisha","https://t.me/IndiaFightsWithCovid");
    telegramMap.set("Nagaland","https://t.me/IndiaFightsWithCovid");
    telegramMap.set("Mizoram","https://t.me/covidfyiMZ");
    telegramMap.set("Manipur","https://t.me/IndiaFightsWithCovid");
    telegramMap.set("Meghalaya","https://t.me/IndiaFightsWithCovid");
    telegramMap.set("Maharashtra","https://t.me/covidmaharashtra");
    telegramMap.set("Madhya Pradesh","https://t.me/MadhyaPradeshFightswithCOVID");
    telegramMap.set("Karnataka","https://t.me/karnataka_Covid19");
    telegramMap.set("Jharkhand","https://t.me/COVIDforce");
    telegramMap.set("Jammu and Kashmir","https://t.me/covid19jammusupport");
    telegramMap.set("Himachal Pradesh","https://t.me/covidutttakhand");
    telegramMap.set("Kerala","https://t.me/save_our_kerala");
    telegramMap.set("Haryana","https://t.me/Haryana_Corona_Warriors");
    telegramMap.set("Gujarat","https://t.me/covidhelpgujrat");
    telegramMap.set("Ladakh","https://t.me/covidfyiLA");



    return(
      <>
      <Button color="primary" className={classes.button} variant="contained" onClick={()=>{window.open(telegramMap.get(state))}} size="small">Join the channel</Button>
      <Button color="primary" className={classes.button} style={{float:"right !important"}} variant="contained" onClick={()=>{window.open(telegramMap.get("Tripura"))}} size="small">Join Sonu Sood's Channel</Button>
      </>
    )
  }

  return (
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
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state}
          onChange={(e)=>{setState(e.target.value)}}
          label="State"
        >
          
          <MenuItem value="Andhra Pradesh">Andhra Pradesh</MenuItem>
          <MenuItem value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</MenuItem>
          <MenuItem value="Arunachal Pradesh">Arunachal Pradesh</MenuItem>
          <MenuItem value="Assam">Assam</MenuItem>
          <MenuItem value="Bihar">Bihar</MenuItem>
          <MenuItem value="Chandigarh">Chandigarh</MenuItem>
          <MenuItem value="Chhattisgarh">Chhattisgarh</MenuItem>
          <MenuItem value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</MenuItem>
          <MenuItem value="Daman and Diu">Daman and Diu</MenuItem>
          <MenuItem value="Delhi">Delhi</MenuItem>
          <MenuItem value="Lakshadweep">Lakshadweep</MenuItem>
          <MenuItem value="Puducherry">Puducherry</MenuItem>
          <MenuItem value="Goa">Goa</MenuItem>
          <MenuItem value="Gujarat">Gujarat</MenuItem>
          <MenuItem value="Haryana">Haryana</MenuItem>
          <MenuItem value="Himachal Pradesh">Himachal Pradesh</MenuItem>
          <MenuItem value="Jammu and Kashmir">Jammu and Kashmir</MenuItem>
          <MenuItem value="Ladakh">Ladakh</MenuItem>
          <MenuItem value="Jharkhand">Jharkhand</MenuItem>
          <MenuItem value="Karnataka">Karnataka</MenuItem>
          <MenuItem value="Kerala">Kerala</MenuItem>
          <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
          <MenuItem value="Maharashtra">Maharashtra</MenuItem>
          <MenuItem value="Manipur">Manipur</MenuItem>
          <MenuItem value="Meghalaya">Meghalaya</MenuItem>
          <MenuItem value="Mizoram">Mizoram</MenuItem>
          <MenuItem value="Nagaland">Nagaland</MenuItem>
          <MenuItem value="Odisha">Odisha</MenuItem>
          <MenuItem value="Punjab">Punjab</MenuItem>
          <MenuItem value="Rajasthan">Rajasthan</MenuItem>
          <MenuItem value="Sikkim">Sikkim</MenuItem>
          <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
          <MenuItem value="Telangana">Telangana</MenuItem>
          <MenuItem value="Tripura">Tripura</MenuItem>
          <MenuItem value="Uttar Pradesh">Uttar Pradesh</MenuItem>
          <MenuItem value="Uttarakhand">Uttarakhand</MenuItem>
          <MenuItem value="West Bengal">West Bengal</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
      <TextField id="outlined-basic" label="City" variant="outlined" value={city} onChange={(e)=>setCity(e.target.value)} />
      </FormControl>

      <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.bed}
            onChange={handleChange}
            name="bed"
            color="primary"
          />
        }
        label="Bed"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.favi}
            onChange={handleChange}
            name="favi"
            color="primary"
          />
        }
        label="Favipiravir"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.toci}
            onChange={handleChange}
            name="toci"
            color="primary"
          />
        }
        label="Tocilizumab"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.food}
            onChange={handleChange}
            name="food"
            color="primary"
          />
        }
        label="Food"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.oxygen}
            onChange={handleChange}
            name="oxygen"
            color="primary"
          />
        }
        label="Oxygen"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.oxyegenCylinder}
            onChange={handleChange}
            name="oxygenCylinder"
            color="primary"
          />
        }
        label="Oxygen Cylinder"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.oxygenConcentartor}
            onChange={handleChange}
            name="oxygenConcentartor"
            color="primary"
          />
        }
        label="Oxygen Concentartor"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.plasma}
            onChange={handleChange}
            name="plasma"
            color="primary"
          />
        }
        label="Plasma"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.rem}
            onChange={handleChange}
            name="rem"
            color="primary"
          />
        }
        label="Remdesivir"
      /><FormControlLabel
      control={
        <Checkbox
          checked={resource.vental}
          onChange={handleChange}
          name="vental"
          color="primary"
        />
      }
      label="Ventilator"
    />
    <FormControlLabel
        control={
          <Checkbox
            checked={resource.ambulance}
            onChange={handleChange}
            name="ambulance"
            color="primary"
          />
        }
        label="Ambulance"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.covidTest}
            onChange={handleChange}
            name="covidTest"
            color="primary"
          />
        }
        label="COVID Test"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={resource.fabi}
            onChange={handleChange}
            name="fabi"
            color="primary"
          />
        }
        label="Fabiflu"
      />
      </FormGroup>
      </Paper>
      {/* <Button color="primary" className={classes.button} style={{marginTop:"10px"}} variant="contained" onClick={()=>{handleClick()}}>Check your nearest vaccination center and slots availability </Button> */}
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
        <Typography className={classes.pos} color="textSecondary">
        {resource.vental===true?<Button variant="contained" className={classes.disbutton} disabled>Ventilator</Button>:''}
        {resource.icubed===true?<Button variant="contained" className={classes.disbutton} disabled>ICU Bed</Button>:''}
        {resource.bed===true?<Button variant="contained" className={classes.disbutton} disabled>Bed</Button>:''}
        {resource.rem===true?<Button variant="contained" className={classes.disbutton} disabled>Remdesivir</Button>:''}
        {resource.favi===true?<Button variant="contained" className={classes.disbutton} disabled>Favipiravir</Button>:''}
        {resource.toci===true?<Button variant="contained" className={classes.disbutton} disabled>Tocilizumab</Button>:''}
        {resource.plasma===true?<Button variant="contained" className={classes.disbutton} disabled>Plasma</Button>:''}
        {resource.food===true?<Button variant="contained" className={classes.disbutton} disabled>Food</Button>:''}
        {resource.ambulance===true?<Button variant="contained" className={classes.disbutton} disabled>Ambulance</Button>:''}
        {resource.covidTest===true?<Button variant="contained" className={classes.disbutton} disabled>COVID Test</Button>:''}
        {resource.oxygen?<Button variant="contained" className={classes.disbutton} disabled>Oxygen</Button>:''}
        {resource.oxygenbed?<Button variant="contained" className={classes.disbutton} disabled>Oxygen Bed</Button>:''}
        {resource.oxygenConcentartor?<Button variant="contained" className={classes.disbutton} disabled>Oxygen Concentrator</Button>:''}
        {resource.oxygenCylinder?<Button variant="contained" className={classes.disbutton} disabled>Oxygen Cylinder</Button>:''}
        {resource.fabi?<Button variant="contained" className={classes.disbutton} disabled>Fabiflu</Button>:''}
        </Typography>
        
      </CardContent>
      <CardActions>
        <TwitterLink />
        
      </CardActions>
    </Card>



    <Card className={classes.card} elevation={3}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Telegram <TelegramIcon className={classes.icon}/>
        </Typography>
        <Typography variant="h5" component="h2">
          {state?state:'Delhi'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {resource.vental===true?<Button variant="contained" className={classes.disbutton} disabled>Ventilator</Button>:''}
        {resource.icubed===true?<Button variant="contained" className={classes.disbutton} disabled>ICU Bed</Button>:''}
        {resource.bed===true?<Button variant="contained" className={classes.disbutton} disabled>Bed</Button>:''}
        {resource.rem===true?<Button variant="contained" className={classes.disbutton} disabled>Remdesivir</Button>:''}
        {resource.favi===true?<Button variant="contained" className={classes.disbutton} disabled>Favipiravir</Button>:''}
        {resource.toci===true?<Button variant="contained" className={classes.disbutton} disabled>Tocilizumab</Button>:''}
        {resource.plasma===true?<Button variant="contained" className={classes.disbutton} disabled>Plasma</Button>:''}
        {resource.food===true?<Button variant="contained" className={classes.disbutton} disabled>Food</Button>:''}
        {resource.ambulance===true?<Button variant="contained" className={classes.disbutton} disabled>Ambulance</Button>:''}
        {resource.covidTest===true?<Button variant="contained" className={classes.disbutton} disabled>COVID Test</Button>:''}
        {resource.oxygen?<Button variant="contained" className={classes.disbutton} disabled>Oxygen</Button>:''}
        {resource.oxygenbed?<Button variant="contained" className={classes.disbutton} disabled>Oxygen Bed</Button>:''}
        {resource.oxygenConcentartor?<Button variant="contained" className={classes.disbutton} disabled>Oxygen Concentrator</Button>:''}
        {resource.oxygenCylinder?<Button variant="contained" className={classes.disbutton} disabled>Oxygen Cylinder</Button>:''}
        {resource.fabi?<Button variant="contained" className={classes.disbutton} disabled>Fabiflu</Button>:''}
        </Typography>
        
      </CardContent>
      <CardActions>
        <TelegramLink />
        
      </CardActions>
    </Card>

        </Grid>
        <Grid xs={12} md={4}>
         <Paper style={{marginTop:'10px'}}>
           <img alt='img' style={{width: '100%',borderRadius: '10px'}} src="https://www.humansupportgroup.co.uk/wp-content/uploads/2020/05/stay-home-save-lives-flyer-template-design-b5427054ab3b0e1697426c73ac656ffc_screen.jpg"/>
           
         </Paper>
        </Grid>
      </Grid>
      <BottomNavigation className={classes.footer}>
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
    <Dialog  aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" >
          Attention !!!
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            A new feature has been added where you can check the availabilty of vaccination slots around you.
          </Typography>
          <Typography gutterBottom>
           No login or signup needed to access this feature. You can search by pincode or district and also apply different age filters according to your needs.
          </Typography>
          <Typography gutterBottom>
            Click below on the vaccination button to get started. Hope we are of some help 🙏🙏.
          </Typography>
        </DialogContent>
        <DialogActions>
        <Button autoFocus variant="contained" styles={{float:"left"}} onClick={()=>{handleClick()}} color="primary">
          Vaccination Slots
          </Button>
          {/* <Button  onClick={()=>{history.push("/");}} variant="contained" color="primary">
            Close 
          </Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}