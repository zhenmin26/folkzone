import React, { Component } from "react";
import { Avatar, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import store from "../../../redux/store"

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
    store.dispatch({type: "getFriendUserId", data: allFriend})
    return allFriend;
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
        <Button
          type="submit"
          variant="outlined"
          onClick={()=>{this.props.onRemoveFriend(this.handleClick.bind(this))}}
        >
          Remove
        </Button>
      </div>
    );
  }
}
