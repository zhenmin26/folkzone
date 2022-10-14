import React, { Component } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import Grid from "@mui/material/Grid";
import Label from "../Label";
import store from "../../redux/store"

export class Landing extends Component {
  constructor(props) {
    super(props);
    // set posts and all users to localstorage
    this.getAllUsers()
    this.getAllPosts()
  }

  getAllUsers(){
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        // get all users
        store.dispatch({ type: "getAllUser", data: json });
        localStorage.setItem('allUsers', JSON.stringify(json));
        localStorage.setItem('login', false)
      });
  }

  getAllPosts(){
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        // get all users
        store.dispatch({ type: "getAllPost", data: json });
        localStorage.setItem('allPosts', JSON.stringify(json));
      });
  }

  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Label />
        </Grid>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={4} alignItems="center">
            <Register />
          </Grid>
          <Grid item xs={4} alignItems="center">
            <Login />
          </Grid>
        </Grid>
      </div>
    );
  }
}
