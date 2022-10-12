import React, { Component } from "react";
import {
  Box,
  TextField,
  Button,
  // Typography,
  // Avatar,
  Container,
  CssBaseline,
  Grid,
} from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// Kulas Light

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
    };
  }

  handleSubmit(event) {
    // console.log("login in")
    event.preventDefault();
    // get user data
    const data = new FormData(event.currentTarget);
    // console.log(data.get("username"))
    // console.log(data.get("login_password"))
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // get array of objects(user info)
        json.forEach((user) => {
          if (
            user.username == data.get("username") &&
            data.get("login_password") == user.address.street
          ) {
            // console.log("Login successfully");
            this.setState({ login: true });
          }
        });
      });
  }

  render() {
    if (this.state.login) {
      return <Navigate to="/main" />;
    } else {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            component="form"
            onSubmit={this.handleSubmit.bind(this)}
            noValidate
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar> */}
            {/* <Typography component="h1" variant="h5">
              Sign in
            </Typography> */}
            <Grid container spacing={2}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="login_password"
                label="Password"
                type="password"
                id="login_password"
                // autoComplete="current-password"
              />
              <Button
                type="login"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
            </Grid>
          </Box>
        </Container>
      );
    }
  }
}
