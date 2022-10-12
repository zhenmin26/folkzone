import React, { Component } from "react";
import { Avatar, Typography, TextField, Box } from "@mui/material";
import Button from "@mui/material/Button";

export default class Friend extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Typography sx={{ fontSize: 25 }} color="text.first">
          {this.props.userInfo.username}
        </Typography>
        <Typography sx={{ fontSize: 20 }} color="text.secondary">
          {this.props.userInfo.company.catchPhrase}
        </Typography>
        <Button type="submit" variant="outlined">
          Remove
        </Button>
      </div>
    );
  }
}
