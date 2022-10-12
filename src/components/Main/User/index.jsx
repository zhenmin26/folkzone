import React, { Component } from "react";
import { TextField, Button, Box, Avatar, Typography, Grid } from "@mui/material";
import store from "../../../redux/store";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : store.getState().userReducer.curUser == null? "New user" :store.getState().userReducer.curUser.username,
      status: store.getState().userReducer.curUser == null? "New status" :store.getState().userReducer.curUser.company.catchPhrase
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("status"));
    this.setState({
      status: data.get("status")
    })
  }

  render() {
    return (
      <div>
        <Grid>
          {/* User information */}
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Typography sx={{ fontSize: 25 }} color="text.first">
            {this.state.username}
          </Typography>
          <Typography sx={{ fontSize: 20 }} color="text.secondary">
            {this.state.status}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={this.handleSubmit.bind(this)} 
            sx={{ mt: 3 }}
          >
            <TextField
              name="status"
              // required
              fullWidth
              id="status"
              label="New status"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Grid>
      </div>
    );
  }
}
