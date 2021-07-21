import React, { useState } from 'react';
import 'date-fns';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import CallIcon from '@material-ui/icons/Call';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import MailIcon from '@material-ui/icons/Mail';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import clsx from 'clsx';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import IconButton from '@material-ui/core/IconButton';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from "@material-ui/core/styles";
import Navbar from '../Components/navbar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import InfoIcon from '@material-ui/icons/Info';
import AlarmOnIcon from '@material-ui/icons/AlarmOn';
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: "70%",
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
    large:{
        width: theme.spacing(17),
        height: theme.spacing(20),
        display:'block',
        margin: theme.spacing(0,'auto'),
      },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
     display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    maxWidth: 645,
    margin:'10px'
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function getModalStyle() {
    const top = 50 ;
    const left = 50 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

// const DarkerDisabledTextField = withStyles({
//     root: {
//       "& .MuiInputBase-root.Mui-disabled": {
//         color: "rgba(25, 25, 112, 1)" ,// (default alpha is 0.38),
//         fontWeight:'bold',
//         fontSize:'20px'
//       }
//     }
//   })(TextField);
  


function Doclist({history}) {
  const classes = useStyles();
  const[specialization,setSpecialization]= useState('All')
  const[patient,setpatient]= useState('SELF - Ashwani Pandhi')
  const [expanded, setExpanded] = React.useState(false);
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
  const [modalStyle] = React.useState(getModalStyle);
  const[time,setTime] = useState(0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleChange = (event) => {
    setSpecialization(event.target.value);
  };

  const handleChange2 = (event) => {
    setpatient(event.target.value);
  };


  return (
    <>
    <Navbar history={history}/>
    <div style={{margin:'20px', marginBottom:'20px !important', minHeight:'80vh'}}>
        <Typography component="h1" variant="h3" style={{color:"#191970"}}>
         Telemedicine Consultation
        </Typography>
        
        <form className={classes.form} noValidate>
        <Grid container >
            <Grid item xs={12} md={5} style={{ margin:'5px'}}>
        <FormControl  fullWidth>
        <InputLabel id="demo-simple-select-label">Select Specicalization</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={specialization}
          onChange={handleChange}
        >
            <MenuItem value="All"><em>All</em></MenuItem>
          <MenuItem value="Pediatrician">Pediatrician</MenuItem>
          <MenuItem value="MD Physician">MD Physician</MenuItem>
          <MenuItem value="General and OH Physician">General and OH Physician</MenuItem>
          <MenuItem value="Gynaecologist">Gynaecologist</MenuItem>
          <MenuItem value="General Physician">General Physician</MenuItem>
          <MenuItem value="Surgeon">Surgeon</MenuItem>
          <MenuItem value="General Practitioner">General Practitioner</MenuItem>
          <MenuItem value="Gynae and Obs">Gynae and Obs</MenuItem>
          <MenuItem value="Orthopaedic">Orthopaedic</MenuItem>
          <MenuItem value="Pathologist">Pathologist</MenuItem>
          <MenuItem value="Internal Medicine Specialist">Internal Medicine Specialist</MenuItem>
          <MenuItem value="Test">Test</MenuItem>
          <MenuItem value="General Surgery">General Surgery</MenuItem>
          <MenuItem value="Critical Care Specialist">Critical Care Specialist</MenuItem>
          <MenuItem value="E.N.T">E.N.T</MenuItem>
          <MenuItem value="Family Physician">Family Physician</MenuItem>
          <MenuItem value="General Physician DGP">General Physician DGP</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid xs={12} md={5} style={{margin:'5px'}}>
        <TextField id="standard-search" label="Search by location (ex Delhi)" type="search" fullWidth />
        </Grid>
        </Grid>
        </form>
        <Grid container style={{marginTop:'20px', marginBottom:'50px !important'}}>
            <Grid item xs={12} md={4}>
        <Card className={classes.root}>
      <CardContent>
          <Grid container >
              <Grid item xs={12} md={4} >
              <Avatar className={classes.large} alt="Remy Sharp" src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" />
              </Grid>
              <Grid item xs={12} md={8} >
                  <Grid container>
                      <Grid item xs={12}>
        <Typography variant="h4" color="textPrimary" component="h2">
          Dr Anamika
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="h6" color="textSecondry" component="h6">
          Pediatrician
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="body1" color="textSecondry" component="p">
        <LocationOnIcon style={{color:"#191970"}}/>  Ahemdabad 
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="body1" color="textSecondry" component="p">
        <WatchLaterIcon style={{color:"#191970"}}/>  10 AM to 12:30 AM 
        </Typography></Grid>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon style={{color:"#191970"}} />
        </IconButton>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Qualification: MBBS,D.Pediatrician</Typography>
          <Typography paragraph>
           Clinic/Hospital: Nil 
          </Typography>
          <Typography paragraph>
           Profile: 
          </Typography>
        </CardContent>
      </Collapse>
        </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="call the doc incase of emergency">
          <CallIcon style={{color:"#191970"}}/>
        </IconButton>
        <IconButton aria-label="mail">
          <MailIcon style={{color:"#191970"}} />
        </IconButton>
        <Button variant="contained" color="primary" style={{marginLeft:'auto'}} onClick={handleShow}>
  Book Appointment
</Button>
      </CardActions> 
      <Modal  open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
            <div style={modalStyle} className={classes.paper}>
<Typography variant="h4" color="textPrimary" component="h2" style={{textAlign:"center"}}>Book Appointment</Typography>
        <Typography variant="h4" color="textPrimary" component="h2">
          Dr Anamika
        </Typography> 
        <Typography variant="h6" color="textSecondry" component="h6">
          Pediatrician
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container >
            <Grid item xs={12} style={{ margin:'5px'}}>
        <FormControl  fullWidth>
        <InputLabel id="modal-select-id">Select Patient</InputLabel>
        <Select
          labelId="modal-form"
          id="modal-select-id"
          value={patient}
          onChange={handleChange2}
        >
          <MenuItem value="SELF - Ashwani Pandhi"><em>SELF - Ashwani Pandhi</em></MenuItem>
          <MenuItem value="CHILD - Tanya Pandhi">CHILD - Tanya Pandhi</MenuItem>
          <MenuItem value="CHILD - Yajwin Pandhi">CHILD - Yajwin Pandhi</MenuItem>
          <MenuItem value="SPOUSE - Ritu Pandhi">SPOUSE - Ritu Pandhi</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid xs={12} style={{margin:'5px'}}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
        fullWidth
          margin="normal"
          id="date-picker-dialog"
          label="Appointment Date"
          format="dd/mm/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        </Grid>
        </Grid>
        <Typography variant="h4" color="textPrimary" component="h2">
          Available Slots
        </Typography>
        <ButtonGroup style={{marginTop:'10px'}}size="large" color="primary" aria-label="contained primary button group">
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(1)}>{time === 1?<AlarmOnIcon/>:" "}10:00</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(2)}>{time === 2?<AlarmOnIcon/>:" "}10:15</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(3)}>{time === 3?<AlarmOnIcon/>:" "}10:30</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(4)}>{time === 4?<AlarmOnIcon/>:" "}10:45</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(5)}>{time === 5?<AlarmOnIcon/>:" "}11:00</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(6)}>{time === 6?<AlarmOnIcon/>:" "}11:15</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(7)}>{time === 7?<AlarmOnIcon/>:" "}11:30</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(8)}>{time === 8?<AlarmOnIcon/>:" "}11:45</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(9)}>{time === 9?<AlarmOnIcon/>:" "}12:00</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(10)}>{time === 10?<AlarmOnIcon/>:" "}12:15</Button>
      </ButtonGroup>
        </form>
        <div>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
          {time?<Button variant="contained" color="primary" style={{float:'right'}} onClick={handleClose}>
            BOOK
          </Button>:""}
          </div>
          </div>
      </Modal>
    </Card>
    </Grid>
    <Grid item xs={12} md={4}>
    <Card className={classes.root}>
      <CardContent>
          <Grid container >
              <Grid item xs={12} md={4} >
              <Avatar className={classes.large} alt="Remy Sharp" src="https://image.shutterstock.com/image-photo/profile-picture-smiling-millennial-asian-260nw-1836020740.jpg" />
              </Grid>
              <Grid item xs={12} md={8} >
                  <Grid container>
                      <Grid item xs={12}>
        <Typography variant="h4" color="textPrimary" component="h2">
          Dr Anamika
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="h6" color="textSecondry" component="h6">
          Pediatrician
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="body1" color="textSecondry" component="p">
        <LocationOnIcon/>  Ahemdabad 
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="body1" color="textSecondry" component="p">
        <WatchLaterIcon/>  10 AM to 12:30 AM 
        </Typography></Grid>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Qualification: MBBS,D.Pediatrician</Typography>
          <Typography paragraph>
           Clinic/Hospital: Nil 
          </Typography>
          <Typography paragraph>
           Profile: 
          </Typography>
        </CardContent>
      </Collapse>
        </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="call the doc incase of emergency">
          <CallIcon/>
        </IconButton>
        <IconButton aria-label="mail">
          <MailIcon />
        </IconButton>
        <Button variant="contained" color="primary" style={{marginLeft:'auto'}} onClick={handleShow}>
  Book Appointment
</Button>
      </CardActions> 
      <Modal  open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
            <div style={modalStyle} className={classes.paper}>
<Typography variant="h4" color="textPrimary" component="h2" style={{textAlign:"center"}}>Book Appointment</Typography>
        <Typography variant="h4" color="textPrimary" component="h2">
          Dr Anamika
        </Typography> 
        <Typography variant="h6" color="textSecondry" component="h6">
          Pediatrician
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container >
            <Grid item xs={12} style={{ margin:'5px'}}>
        <FormControl  fullWidth>
        <InputLabel id="modal-select-id">Select Specicalization</InputLabel>
        <Select
          labelId="modal-form"
          id="modal-select-id"
          value={patient}
          onChange={handleChange2}
        >
          <MenuItem value="SELF - Ashwani Pandhi"><em>SELF - Ashwani Pandhi</em></MenuItem>
          <MenuItem value="CHILD - Tanya Pandhi">CHILD - Tanya Pandhi</MenuItem>
          <MenuItem value="CHILD - Yajwin Pandhi">CHILD - Yajwin Pandhi</MenuItem>
          <MenuItem value="SPOUSE - Ritu Pandhi">SPOUSE - Ritu Pandhi</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid xs={12} style={{margin:'5px'}}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
        fullWidth
          margin="normal"
          id="date-picker-dialog"
          label="Appointment Date"
          format="dd/mm/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </MuiPickersUtilsProvider>
        </Grid>
        </Grid>
        <Typography variant="h4" color="textPrimary" component="h2">
          Available Slots
        </Typography>
        <ButtonGroup style={{marginTop:'10px'}}size="large" color="primary" aria-label="contained primary button group">
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(1)}>{time === 1?<AlarmOnIcon/>:" "}10:00</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(2)}>{time === 2?<AlarmOnIcon/>:" "}10:15</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(3)}>{time === 3?<AlarmOnIcon/>:" "}10:30</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(4)}>{time === 4?<AlarmOnIcon/>:" "}10:45</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(5)}>{time === 5?<AlarmOnIcon/>:" "}11:00</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(6)}>{time === 6?<AlarmOnIcon/>:" "}11:15</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(7)}>{time === 7?<AlarmOnIcon/>:" "}11:30</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(8)}>{time === 8?<AlarmOnIcon/>:" "}11:45</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(9)}>{time === 9?<AlarmOnIcon/>:" "}12:00</Button>
        <Button style={{marginRight:'10px'}} onClick={()=>setTime(10)}>{time === 10?<AlarmOnIcon/>:" "}12:15</Button>
      </ButtonGroup>
        </form>
        <div>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
          {time?<Button variant="contained" color="primary" style={{float:'right'}} onClick={handleClose}>
            BOOK
          </Button>:""}
          </div>
          </div>
      </Modal>
    </Card>
    </Grid>
    </Grid>
        </div>

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
export default withRouter(Doclist);