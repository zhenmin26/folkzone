import React, { Component } from "react";
import { Avatar, Typography, Container, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import store from "../../../redux/store";

export default class Friend extends Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    // console.log("user click remove")
    // console.log(this.props.userInfo.id)
    // userId of the removed user: this.props.userInfo.id
    const allFriend = store.getState().userReducer.friendUserIds;
    const indexOfRemovedFriend = allFriend.indexOf(this.props.userInfo.id);
    if (indexOfRemovedFriend > -1) {
      allFriend.splice(indexOfRemovedFriend, 1);
    }
    console.log(allFriend);
    store.dispatch({ type: "getFriendUserId", data: allFriend });
    localStorage.setItem("friendUserIds", JSON.stringify(allFriend));
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
                    alt={this.props.userInfo.username}
                    src="/static/images/avatar/1.jpg"
                  />
                </Grid>
                <Grid item>
                  <Typography sx={{ fontSize: 25 }} color="text.first">
                    {this.props.userInfo.username}
                  </Typography>
                </Grid>
              </Grid>
              {/* right part */}
              <Grid item xs={6}>
                <Typography sx={{ fontSize: 20 }} color="text.secondary">
                  {this.props.userInfo.company.catchPhrase}
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
                  console.log("remove");
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
