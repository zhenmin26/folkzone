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
import { Navigate } from "react-router-dom";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import store from "../../../redux/store";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      usernameErrorText: "",
      passwordErrorText: "",
    };
  }

  handleSubmit(event) {
    // console.log("login in")
    event.preventDefault();
    // get user data
    const data = new FormData(event.currentTarget);
    store.getState().userReducer.allUsers.forEach((user) => {
      if(data.get("username") === ""){
        this.setState({ usernameErrorText: "Required field" });
        return;
      }
      if (
        user.username === data.get("username") &&
        data.get("login_password") == user.address.street
      ) {
        // console.log("Login successfully");
        localStorage.setItem("curUser", JSON.stringify(user));
        // get current user
        store.dispatch({ type: "getUser", data: user });
        // get friend users
        const curId = user.id;
        let friendIds = new Array(3);
        for (var i = 1; i <= 3; i++) {
          if (curId + i == 10) {
            friendIds[i - 1] = 10;
          } else {
            friendIds[i - 1] = (curId + i) % 10;
          }
        }
        store.dispatch({ type: "getFriendUserId", data: friendIds });
        this.setState({ login: true });
        localStorage.setItem("login", true);
      }
      else{
        this.setState({ passwordErrorText: "Wrong password" });
      }
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
                helperText={this.state.usernameErrorText}
                error={
                  this.state.usernameErrorText === "Required field"
                }
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="login_password"
                label="Password"
                type="password"
                id="login_password"
                helperText={this.state.passwordErrorText}
                error={
                  this.state.passwordErrorText === "Wrong password" ||
                  this.state.passwordErrorText === "Required field"
                }
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
