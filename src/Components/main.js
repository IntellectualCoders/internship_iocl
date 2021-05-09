import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    fontSize:"25px",
    color: theme.palette.text.secondary,
  },
  row:{
    width: "auto",
    margin: "0px"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 240,
  },
  card:{
   maxWidth:375,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default function CenteredGrid() {

  const [state,setState]=useState("")
  const [resource,setResource]=useState({
      oxygen: false,
      icubed: false,
      oxygenbed: false,
      rem: false,
      vental : false,
      oxygenCylinder:false,
      oxygenConcentartor: false,
      plasma:false
  })
  const classes = useStyles();
  const handleChange = (event) => {
    setResource({ ...resource, [event.target.name]: event.target.checked });
  };

  return (
    <div className={classes.root}>
      <Grid className={classes.row} container spacing={3}>
        
        <Grid item xs={12} md={4}>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={state}
          onChange={(e)=>{setState(e.target.value)}}
          label="State"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'Delhi'}>Delhi</MenuItem>
          <MenuItem value={'Mumbai'}>Mumbai</MenuItem>
          <MenuItem value={'Goa'}>Goa</MenuItem>
        </Select>
      </FormControl>
      <FormGroup row>
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
      </FormGroup>
      <Button variant="contained" color="primary" onClick={()=>{console.log(resource,state)}}>
        Search
      </Button>
        </Grid>
        <Grid item xs={12} md={8}>
        <Card className={classes.card} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Twitter
        </Typography>
        <Typography variant="h5" component="h2">
          {state?state:'Delhi'}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {resource.vental===true?<Button variant="contained" disabled>Ventilator</Button>:''}
        {resource.oxygen?<Button variant="contained" disabled>Oxygen</Button>:''}
        {resource.oxygenbed?<Button variant="contained" disabled>Oxygen Bed</Button>:''}
        {resource.oxygenConcentartor?<Button variant="contained" disabled>Oxygen Concentrator</Button>:''}

        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Find Resources</Button>
      </CardActions>
    </Card>
        </Grid>
        
      </Grid>
    </div>
  );
}