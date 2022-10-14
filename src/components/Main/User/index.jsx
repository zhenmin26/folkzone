import React, { Component } from "react";
import {
  TextField,
  Button,
  Box,
  Avatar,
  Typography,
  Grid,
  Container,
} from "@mui/material";
import store from "../../../redux/store";
import avatarPic from "../../../static/images/avatar/1.jpg";
import { render } from "@testing-library/react";

export default class User extends Component {
  constructor(props) {
    // console.log("2")
    // console.log(JSON.parse(localStorage.getItem('curUser')))
    super(props);
    this.state = {
      curUser: JSON.parse(localStorage.getItem("curUser")),
      // username : store.getState().userReducer.curUser ? store.getState().userReducer.curUser.username : "New user",
      username: JSON.parse(localStorage.getItem("curUser")).username,
      // status: store.getState().userReducer.curUser ? store.getState().userReducer.curUser.company.catchPhrase : "New status"
      status: JSON.parse(localStorage.getItem("curUser")).company.catchPhrase,
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("status"));
    this.setState({
      status: data.get("status"),
    });
  }

  render() {
    return (
      <div>
        <Container>
          <Grid>
            {/* User information */}
            <Grid
              container
              xs={12}
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid>
                <Avatar alt={this.state.username} src={avatarPic} />
              </Grid>
              <Grid>
                <Typography sx={{ fontSize: 25 }} color="text.first">
                  {this.state.username || "New user"}
                </Typography>
              </Grid>
              <Grid>
                <Typography sx={{ fontSize: 20 }} color="text.secondary">
                  {this.state.status || "New status"}
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              xs={12}
              direction="row"
              justifyContent="center"
              alignItems="center"
              // spacing={20}
            >
              <Box
                component="form"
                noValidate
                onSubmit={this.handleSubmit.bind(this)}
              >
                <TextField
                  name="status"
                  // required
                  id="status"
                  label="New status"
                  size="small"
                  item
                  // variant="standard"
                  xs={6}
                />
                <Button
                  type="submit"
                  variant="text"
                  item
                  xs={6}
                  // direction="column"
                  // justifyContent="center"
                  // alignItems="flex-end"
                  size="large"
                >
                  Update
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
