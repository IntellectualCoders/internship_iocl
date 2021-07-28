import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/authContext";
import firebase from "../firebase";
import Container from "../utils/loading";
import SimpleDateTime  from 'react-simple-timestamp-to-date';
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import { withRouter } from "react-router-dom";
import Card from "@material-ui/core/Card";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Components/navbar";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import InfoIcon from "@material-ui/icons/Info";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "70%",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  large: {
    width: theme.spacing(17),
    height: theme.spacing(20),
    display: "block",
    margin: theme.spacing(0, "auto"),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    maxWidth: 745,
    margin: "10px",
  },
  footer: {
    backgroundColor: "#191970",
    padding: "0px !important",
    paddingBottom: "10px !important",
    width: "100vw !important",
    position: "fixed",
    marginTop: "20px",
    bottom: 0,
  },
}));

function Appointment({ history }) {
  const classes = useStyles();
  const { userDetails } = useContext(AuthContext);
  const [typeofappoitnment, setTypeofappointment] = useState("All");
  const [appointments, setAppointments] = useState(null);

  const handleChange = (event) => {
    setTypeofappointment(event.target.value);
  };

  useEffect(() => {
    userDetails ? fetchAppointments() : console.log("");
  }, [userDetails]);

  const fetchAppointments = async () => {
    var data;
    await firebase.db
      .collection("appointments")
      .where("essNo", "==", userDetails.essNo)
      .get()
      .then((querySnapshot) => {
        data = querySnapshot.docs.map((doc) => doc.data());
        console.log("data: " + data[0]);
        setAppointments(data);
      });
  };
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <>
      <Navbar history={history} />
      {userDetails && appointments ? (
        <div style={{ margin: "20px", minHeight: "85vh" }}>
          <Typography
            component="h1"
            variant="h3"
            style={{ color: "#191970", textAlign: "center" }}
          >
            My Appointments
          </Typography>

          <form className={classes.form} noValidate>
            <Grid
              container
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid item xs={12} md={5} style={{ margin: "5px" }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Type of Appointment
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={typeofappoitnment}
                    onChange={handleChange}
                  >
                    <MenuItem value="All">
                      <em>Upcoming</em>
                    </MenuItem>
                    <MenuItem value="Pediatrician">Previous</MenuItem>
                    <MenuItem value="MD Physician">Canceled</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </form>
          <Grid container style={{ marginTop: "20px" }}>
            {appointments.map((a) => {
              var arr1 = a.patient.split(";");
              return (
                <Grid
                  item
                  xs={12}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Card className={classes.root}>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={12}>
                          <Typography
                            variant="h4"
                            color="textPrimary"
                            component="h2"
                          >
                            {a.docName}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            variant="h6"
                            color="textSecondry"
                            component="h6"
                          >
                            {a.specialization}
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            variant="body1"
                            color="textSecondry"
                            component="p"
                          >
                            <WatchLaterIcon style={{ color: "#191970" }} />{" "}
                            {/* <SimpleDateTime dateFormat="DMY" dateSeparator="/" showTime="0">{a.date}</SimpleDateTime>  */}
                            {/* {a.date.Date} */}
                            {formatDate(a.date)} @ {a.time}
                            {console.log(a.date)} 
                          </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          {a.status === "Open" ? (
                            <Typography
                              variant="body1"
                              style={{ color: "#07B96C" }}
                              component="p"
                            >
                              {a.status}
                            </Typography>
                          ) : (
                            <Typography
                              variant="body1"
                              style={{ color: "red" }}
                              component="p"
                            >
                              {a.status}
                            </Typography>
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <Typography
                            variant="body1"
                            color="textSecondry"
                            component="p"
                          >
                            <PersonIcon style={{ color: "#191970" }} />{" "}
                            {arr1[0]} ({arr1[1]})
                          </Typography>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </div>
      ) : (
        <Container />
      )}
<div style={{height:'100px'}}></div>
      <BottomNavigation className={classes.footer}>
        <Grid>
          <Typography style={{ color: "white", marginTop: "10px" }}>
            Developed by Corporate Information Systems Dept
          </Typography>
          <Typography style={{ color: "white" }}>
            <a href="/#" style={{ color: "white" }}>
              {" "}
              IOCL Data Privacy Policy <InfoIcon> </InfoIcon>
            </a>
          </Typography>
        </Grid>
      </BottomNavigation>
    </>
  );
}
export default withRouter(Appointment);
