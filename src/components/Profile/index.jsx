import React, { Component } from "react";
// import Main from "../Main";
// import { Link } from "react-router-dom";
import Label from "../Label";
import {
  Button,
  Avatar,
  CardContent,
  Typography,
  Grid,
  TextField,
  Box,
  Divider,
  Container,
} from "@mui/material";
// import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import store from "../../redux/store";
import { Link } from "react-router-dom";
import store from "../../redux/store";

export class Profile extends Component {
  constructor(props) {
    // console.log("profile");
    // console.log()
    super(props);
    this.state = {
      login: store.getState().userReducer.login,
      username:
        // JSON.parse(localStorage.getItem("curUser")).username ||
        // JSON.parse(localStorage.getItem("curUser")).username || "Harry",
        store.getState().userReducer.curUser.username,
      email:
        // JSON.parse(localStorage.getItem("curUser")).email ||
        // JSON.parse(localStorage.getItem("curUser")).email ||
        // "harry@hogwards.com",
        store.getState().userReducer.curUser.email,
      phone: "123-123-1234",
      zipcode: "12345",
      password: "123456",
      usernameErrorText: "", // cannot be empty
      phoneErrorText: "",
      emailErrorText: "",
      zipcodeErrorText: "",
      pwdErrorText: "",
    };
  }

  checkPhone(event) {
    // console.log("Checking phone");
    let phonePattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    if (
      event.target.value !== "" &&
      phonePattern.test(event.target.value) === false
    ) {
      this.setState({ phoneErrorText: "Invalid format" });
    } else {
      this.setState({ phoneErrorText: "" });
    }
  }

  checkEmail(event) {
    // console.log("Checking email");
    let emailPattern = /(\w+\.?\w*)\+?\w*@\w+\.?\w*\.[a-z]+/;
    if (
      event.target.value !== "" &&
      emailPattern.test(event.target.value) === false
    ) {
      this.setState({ emailErrorText: "Invalid format" });
    } else {
      this.setState({ emailErrorText: "" });
    }
  }

  checkZipcode = (event) => {
    // console.log("Checking zipcode");
    let zipPattern = /^[0-9]{5}$/;
    if (
      event.target.value !== "" &&
      zipPattern.test(event.target.value) === false
    ) {
      this.setState({ zipcodeErrorText: "Invalid format" });
    } else {
      this.setState({ zipcodeErrorText: "" });
    }
  };

  handleSubmit(event) {
    event.preventDefault();
    // get register data
    const data = new FormData(event.currentTarget);

    let phonePattern = /[0-9]{3}-[0-9]{3}-[0-9]{4}/;
    let emailPattern = /(\w+\.?\w*)\+?\w*@\w+\.?\w*\.[a-z]+/;
    let zipPattern = /[0-9]{5}$/;

    if (data.get("name") !== "" && data.get("name") !== this.state.username) {
      this.setState({ username: data.get("name") });
    }

    if (data.get("phone") !== "") {
      if (phonePattern.test(data.get("phone"))) {
        this.setState({ phone: data.get("phone") });
      } else {
        this.setState({ phoneErrorText: "Invalid format" });
      }
    }
    if (data.get("email") !== "") {
      if (emailPattern.test(data.get("email"))) {
        this.setState({ email: data.get("email") });
      } else {
        this.setState({ emailErrorText: "Invalid format" });
      }
    }
    if (data.get("zipcode") !== "") {
      if (zipPattern.test(data.get("zipcode"))) {
        this.setState({ zipcode: data.get("zipcode") });
      } else {
        this.setState({ zipcodeErrorText: "Invalid format" });
      }
    }
    if(data.get("password") != ""){
      this.setState({ password: data.get("password")});
    }
  }

  render() {
    if (this.state.login) {
      return (
        <Container>
          <Grid justifyContent="center" alignItems="center">
            <Button variant="text">
              <Link to="/main">Go to main page</Link>
            </Button>
          </Grid>
          <Grid container xs={12}>
            <Grid
              item
              xs={6}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
            >
              <Grid item><Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" /></Grid>
              <Grid item><Button
                variant="outlined"
                aria-label="upload picture"
                component="label"
                // onClick={() => {
                //   alert("clicked");
                // }}
              >
                <input hidden accept="image/*" type="file" />
                Upload new picture
              </Button></Grid>
              
            </Grid>
            <Grid item xs={6}>
              <Label />
            </Grid>
          </Grid>
          <Divider />
          <Grid container xs={12}>
            {/* Current info */}
            <Grid item xs={6}>
              <CardContent>
                <Typography sx={{ fontSize: 35 }} color="text.first">
                  Current information
                </Typography>
                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  Username: {this.state.username}
                </Typography>
                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  Email: {this.state.email}
                </Typography>
                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  Phone: {this.state.phone}
                </Typography>
                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  Zipcode: {this.state.zipcode}
                </Typography>
                <Typography sx={{ fontSize: 25 }} color="text.secondary">
                  Password: {this.state.password.replace(/./g, "*")}
                </Typography>
              </CardContent>
            </Grid>
            {/* Update info */}
            <Grid item xs={6}>
              {/* name, email, phone, zop, password, upload button */}
              <Box
                component="form"
                noValidate
                onSubmit={this.handleSubmit.bind(this)}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      name="name"
                      // required
                      id="name"
                      label="Username"
                      autoComplete="name"
                      autoFocus
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // required
                      fullWidth
                      id="phone"
                      label="Phone number"
                      name="phone"
                      onChange={this.checkPhone.bind(this)}
                      helperText={this.state.phoneErrorText}
                      error={this.state.phoneErrorText === "Invalid format"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={this.checkEmail.bind(this)}
                      helperText={this.state.emailErrorText}
                      error={this.state.emailErrorText === "Invalid format"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // required
                      fullWidth
                      id="zipcode"
                      label="Zip code"
                      name="zipcode"
                      autoComplete="zipcode"
                      onChange={this.checkZipcode.bind(this)}
                      helperText={this.state.zipcodeErrorText}
                      error={this.state.zipcodeErrorText === "Invalid format"}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      // required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Upload information
                </Button>
              </Box>
            </Grid>
          </Grid>
          {/* <Grid>
            <Link to="/main" element={<Main />}>Go to main page</Link>
          </Grid> */}
        </Container>
      );
    } else {
      return (
        <div>
          Please log in first
          <Button variant="text">
            {/* Profile */}
            <Link to="/">Go to landing page</Link>
          </Button>
        </div>
      );
    }
  }
}
