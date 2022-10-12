import React, { Component } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import Grid from "@mui/material/Grid";
import Label from "../Label";

export class Landing extends Component {
  constructor(props) {
    super(props);
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
