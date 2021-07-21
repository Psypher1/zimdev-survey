import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";

import { Alert, AlertTitle } from "@material-ui/lab";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
// Top 100 Developers Roles
const topDevRoles = [
  { title: "Admin Big Data" },
  { title: "Artificial intelligence / Machine Learning Engineer" },
  { title: "Big Data Architect" },
  { title: "Big Data Engineer" },
  { title: "Data Analysts" },
  { title: "Data Architect" },
  { title: "DevOps Engineer" },
  { title: "Gerrit Administrator" },
  { title: "Machine Learning Engineer" },
  { title: "Operations Engineer" },
  { title: "Production Support Engineer" },
  { title: ".NET Developer" },
  { title: "Android Developer" },
  { title: "AppDynamics Engineer" },
  { title: "Application Security Engineer" },
  { title: "AWS DevOps Engineer" },
  { title: "Blockchain Developer" },
  { title: "C# Developer" },
  { title: "Cloud automation engineer" },
  { title: "Cloud enginee" },
  { title: "COMPUTER GRAPHICS ANIMATOR" },
  { title: "Computer Hardware Engineer" },
  { title: "Computer Network Architect" },
  { title: "Computer Systems Analyst" },
  { title: "DATA ANALYST" },
  { title: "DATABASE ADMINISTRATOR" },
  { title: "Docker Engineer" },
  { title: "Software Developer" },
  { title: "Software Engineer" },
  { title: "Web Developer" },
  { title: "Front End Developer" },
  { title: "Full Stack Developer" },
  { title: "Full Stack JAVA Developer/Programmer/Engineer" },
  { title: "Full Stack Python Developer/Programmer/Engineer" },
  { title: "Game Developer" },
  { title: "IOS Developer" },
  { title: "IT Manager" },
  { title: "Oracle Developer" },
  { title: "PHP Developer" },
  { title: "React Developer" },
  { title: "Robotics Engineer" },
  { title: "Senior Cloud Architect" },
  { title: "UI DESIGNER" },
  { title: "UI Developer" },
  { title: "UX DESIGNER" },
  { title: "WordPress Developer" },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  // const [data, setData] = useState({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   devRole: "",
  //   other: "",
  // });
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [devRole, setDevRole] = useState([]);
  const [other, setOther] = useState("");

  // to use Snackbar
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  // to switch the state to Snackbar
  const snackBarClose = (e) => {
    setSnackBarOpen(false);
  };

  // to switch from axios = not yet implemented
  async function sendData(devData) {
    await fetch(
      "https://v1.nocodeapi.com/gtchakama/google_sheets/yFVSOASwesCbMvZx?tabId=Sheet1",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(devData),
      }
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // devRole.forEach(function (entry) {
    //   console.log(entry.title);
    // });

    let DeveloperRoles = devRole.map(function (element) {
      return `${element.title}`;
    });
    const DevRolees = DeveloperRoles.toString();

    const dateStamp = new Date();
    const axios = require("axios");

    axios({
      method: "post",
      url: "https://v1.nocodeapi.com/gtchakama/google_sheets/yFVSOASwesCbMvZx?tabId=Sheet1",
      params: {},
      data: [[firstname, lastname, email, DevRolees, other, dateStamp]],
    })
      .then(function (response) {
        // handle success

        console.log(response.data);

        // set state of Snackbar and display message
        setSnackBarOpen(true);
        setSnackBarMessage("Submit Success");
      })
      .catch(function (error) {
        // handle error

        console.log(error);

        // set state of Snackbar and display message
        setSnackBarOpen(true);
        setSnackBarMessage("Submit Failure");
      });

    console.log(firstname, lastname, email, DevRolees, other, dateStamp);
    // console.log(devRole[0]);

    // data to be passed to sendData
    const devData = {
      firstname,
      lastname,
      email,
      DevRolees,
      other,
      dateStamp,
    };

    // clear fields on submit
    setFirstname("");
    setLastname("");
    setEmail("");
    setDevRole([]); // multi-select not clearting - look into
    setOther("");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      {/* has to be in a html element */}
      <Snackbar
        anchorOrigin={{ vertical: "center", horizontal: "center" }}
        open={snackBarOpen}
        autoHideDuration={2000}
        onClose={snackBarClose}
        message={<span id="message-id">{snackBarMessage}</span>}
        action={
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={snackBarClose}
          >
            X
          </IconButton>
        }
      />
      <div className={classes.paper}>
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstname}
                onChange={(e) => {
                  setFirstname(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastname}
                onChange={(e) => {
                  setLastname(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setDevRole(value)}
                multiple
                id="checkboxes-tags-demo"
                options={topDevRoles}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    label="Developer Role"
                    placeholder="You can add more"
                    getOptionSelected={(option) => option.title}
                    onChange={(e) => {
                      setDevRole((e.target.id.title = e.target.value));
                    }}
                    value={devRole}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                // name="password"
                label="Other"
                // type="password"
                // id="password"
                autoComplete="current-password"
                value={other}
                onChange={(e) => {
                  setOther(e.target.value);
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
      </div>
    </Container>
  );
}
