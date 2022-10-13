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
    };
  }

  handleSubmit(event) {
    // console.log("login in")
    event.preventDefault();
    // get user data
    const data = new FormData(event.currentTarget);
    // console.log(data.get("username"))
    // console.log(data.get("login_password"))
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((json) => {
    // get all users
    // store.dispatch({ type: "getAllUser", data: json });
    // get array of objects(user info)
    // json.forEach((user) => {
    store.getState().userReducer.allUsers.forEach((user) => {
      if (
        user.username == data.get("username") &&
        data.get("login_password") == user.address.street
      ) {
        // console.log("Login successfully");
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
        console.log(store.getState().userReducer.curUser)
      }
      // });
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
