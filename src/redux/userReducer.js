let initState = {
  login: false,
  allUsers: null,
  friendUserIds: null,
  curUser: null,
};

export default function userReducer(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case "getAllUser":
      preState.allUsers = data;
      // console.log(preState.allUsers)
      return preState;

    case "getUser":
      preState.curUser = data;
      console.log(preState.curUser)
      return preState;

    case "getFriendUserId":
      preState.friendUserIds = data;
      console.log(preState.friendUserIds)
      return preState;

    case "addFriend":
      preState.friendUserIds.push(data);
      console.log(preState.friendUserIds)
      return preState

    case "changeStatus":
      // console.log("changeStatus");
      preState.userStatus = data;
      return preState;

    case "updateInfo":
      return preState;

    case "login":
      return preState;

    default:
      return preState;
  }
}
