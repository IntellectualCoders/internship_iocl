import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import EventIcon from '@material-ui/icons/Event';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import {withRouter} from 'react-router-dom';
import Card from '@material-ui/core/Card';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// import { withStyles } from "@material-ui/core/styles";
import Navbar from '../Components/navbar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import InfoIcon from '@material-ui/icons/Info';
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
    // maxWidth: 645,
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
  


function VaccinationDrive({history}) {
  const classes = useStyles();
  const[name,setName]= useState('')
  const[age,setAge]= useState('')
  const[email,setEmail]= useState('')
  const[patient,setpatient]= useState('SELF - Ashwani Pandhi')
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [modalStyle] = React.useState(getModalStyle);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange3 = (event) => {
    setAge(event.target.value);
  };
  const handleChange4 = (event) => {
    setEmail(event.target.value);
  };

  const handleChange2 = (event) => {
    setpatient(event.target.value);
  };


  return (
    <>
    <Navbar history={history}/>
    <div style={{margin:'20px', marginBottom:'20px !important', minHeight:'100vh'}}>
        <Typography component="h1" variant="h3" style={{color:"#191970"}}>
         Upcoming Vacination Drives
        </Typography>
        
        <form className={classes.form} noValidate>
        <Grid container >       
        <Grid xs={12} style={{margin:'5px'}}>
        <TextField id="standard-search" label="Search by location (ex Delhi)" type="search" fullWidth />
        </Grid>
        </Grid>
        </form>
        <Grid container style={{marginTop:'20px', marginBottom:'50px !important'}}>
            <Grid item xs={12}>
        <Card className={classes.root} fullWidth>
      <CardContent>
          <Grid container >
                      <Grid item xs={12}>
        <Typography variant="h4" color="textPrimary" component="h2">
         Vacination Drive -1
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="h6" color="textSecondry" component="h6">
          <EventIcon style={{color:"#191970"}}/>10th July , 2021 
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="body1" color="textSecondry" component="p">
        <LocationOnIcon style={{color:"#191970"}}/> A-27 , Sec-17, Ahemdabad 
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="body1" color="textSecondry" component="p">
        <WatchLaterIcon style={{color:"#191970"}}/>  10 AM to 1 PM
        </Typography></Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="primary" style={{marginLeft:'auto'}} onClick={handleShow}>
  Book Appointment
</Button>
      </CardActions> 
      <Modal  open={show}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
            <div style={modalStyle} className={classes.paper}>
<Typography variant="h4" color="textPrimary" component="h2" style={{textAlign:"center"}}>Book Slot</Typography>
        <Typography variant="h4" color="textPrimary" component="h2">
          Vacination Drive-1
        </Typography> 
        <Typography variant="h6" color="textSecondry" component="h6">
        <LocationOnIcon style={{color:"#191970"}}/> Ahemdabad
        </Typography>
        <Typography variant="h6" color="textSecondry" component="h6">
          <EventIcon style={{color:"#191970"}}/>10th July , 2021 
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container >
        <Grid xs={12} style={{margin:'5px'}}>
        <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
        </Grid>
        <Grid xs={12} style={{margin:'5px'}}>
        <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              value={age}
              onChange={handleChange3}
            />
        </Grid>
        <Grid xs={12} style={{margin:'5px'}}>
        <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={email}
              onChange={handleChange4}
            />
        </Grid>
            <Grid item xs={12} style={{ margin:'5px'}}>
        <FormControl  fullWidth>
        <InputLabel id="modal-select-id">Relation With Employee</InputLabel>
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
          <MenuItem value="SPOUSE - Ritu Pandhi">other</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
        <TextareaAutosize style={{margin:'30px 0px', width: "100%"}} aria-label="minimum height" rowsMin={6} placeholder="Any Remarks , if any" />
        </Grid>
        </Grid>
        </form>
        <div>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
          {name || age || patient?<Button variant="contained" color="primary" style={{float:'right'}} onClick={handleClose}>
            BOOK
          </Button>:""}
          </div>
          </div>
      </Modal>
    </Card>
    </Grid>
    <Grid item xs={12}>
        <Card className={classes.root}>
      <CardContent>
          <Grid container >
                      <Grid item xs={12}>
        <Typography variant="h4" color="textPrimary" component="h2">
         Vacination Drive -1
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="h6" color="textSecondry" component="h6">
          <EventIcon style={{color:"#191970"}}/>10th July , 2021 
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="body1" color="textSecondry" component="p">
        <LocationOnIcon style={{color:"#191970"}}/> A-27 , Sec-17, Ahemdabad 
        </Typography></Grid>
        <Grid item xs={12}>
        <Typography variant="body1" color="textSecondry" component="p">
        <WatchLaterIcon style={{color:"#191970"}}/>  10 AM to 1 PM
        </Typography></Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="contained" color="primary" style={{marginLeft:'auto'}} onClick={handleShow2}>
  Book Appointment
</Button>
      </CardActions> 
      <Modal  open={show2}
        onClose={handleClose2}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
            <div style={modalStyle} className={classes.paper}>
<Typography variant="h4" color="textPrimary" component="h2" style={{textAlign:"center"}}>Book Slot</Typography>
        <Typography variant="h4" color="textPrimary" component="h2">
          Vacination Drive-1
        </Typography> 
        <Typography variant="h6" color="textSecondry" component="h6">
        <LocationOnIcon style={{color:"#191970"}}/> Ahemdabad
        </Typography>
        <Typography variant="h6" color="textSecondry" component="h6">
          <EventIcon style={{color:"#191970"}}/>10th July , 2021 
        </Typography>
        <form className={classes.form} noValidate>
        <Grid container >
        <Grid xs={12} style={{margin:'5px'}}>
        <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={name}
              onChange={handleChange}
            />
        </Grid>
        <Grid xs={12} style={{margin:'5px'}}>
        <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              value={age}
              onChange={handleChange3}
            />
        </Grid>
        <Grid xs={12} style={{margin:'5px'}}>
        <TextField
              variant="standard"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={email}
              onChange={handleChange4}
            />
        </Grid>
            <Grid item xs={12} style={{ margin:'5px'}}>
        <FormControl  fullWidth>
        <InputLabel id="modal-select-id">Relation With Employee</InputLabel>
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
          <MenuItem value="SPOUSE - Ritu Pandhi">other</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <TextareaAutosize style={{margin:'30px 0px', width: "100%"}} aria-label="minimum height" rowsMin={6} placeholder="Any Remarks , if any" />
        </Grid>
        </form>
        <div>
          <Button variant="contained" color="secondary" onClick={handleClose2}>
            Close
          </Button>
          {name || age || patient?<Button variant="contained" color="primary" style={{float:'right'}} onClick={handleClose2}>
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
export default withRouter(VaccinationDrive);