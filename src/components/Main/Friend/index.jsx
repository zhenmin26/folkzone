import React, { Component } from "react";
import { Avatar, Typography, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import store from "../../../redux/store";

export default class Friend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allUsers: store.getState().userReducer.allUsers
    }
  }

  handleClick() {
    const allFriend = store.getState().userReducer.friendUserIds;
    const indexOfRemovedFriend = allFriend.indexOf(this.props.userInfo);
    if (indexOfRemovedFriend > -1) {
      allFriend.splice(indexOfRemovedFriend, 1);
    }
    store.dispatch({ type: "getFriendUserId", data: allFriend });
    return allFriend;
  }

  render() {
    return (
      <div>
        <Container>
          <Grid container direction="column">
            {/* uppser part */}
            <Grid
            item
              container
              xs={12}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              {/* left part */}
              <Grid item xs={6} container
               direction="column"
               justifyContent="center"
               alignItems="center"
              >
                <Grid item>
                  <Avatar
                    alt={this.state.allUsers[this.props.userInfo - 1].username}
                    src="https://source.unsplash.com/random"
                  />
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 25 }} color="text.first">
                    {/* {this.props.userInfo.username} */}
                    {this.state.allUsers[this.props.userInfo - 1].username}
                  </Typography>
                </Grid>
              </Grid>
              {/* right part */}
              <Grid item xs={6}>
                <Typography sx={{ fontSize: 20 }} color="text.secondary">
                  {/* {this.props.userInfo.company.catchPhrase} */}
                  {this.state.allUsers[this.props.userInfo - 1].company.catchPhrase}
                </Typography>
              </Grid>
            </Grid>
            {/* lower part */}
            <Grid
            item
              container
              xs={12}
              // direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                type="submit"
                variant="outlined"
                onClick={() => {
                  // console.log("remove");
                  this.props.onRemoveFriend(this.handleClick.bind(this));
                }}
              >
                Remove
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
