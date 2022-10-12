let initState = {
  login: false,
  allUsers: [],
  friendUserIds: [],
  curUser: {},
};

export default function userReducer(preState = initState, action) {
  const { type, data } = action;

  // function getFriendUsers(userId){
  //   if(userId === 10){
  //     friendUsers = [1,2,3]
  //   }
  //   else{
  //     for(var i=1; i<=3; i++){
  //       friendUsers.push(userId+i)
  //     }
  //   }
  // }

  switch (type) {
    case "getAllUser":
      preState.allUsers = data;
      console.log(preState.allUsers)
      return preState;

    case "getUser":
      preState.curUser = data;
      console.log(preState.curUser)
      return preState;

    case "getFriendUserId":
      preState.friendUserIds = data;
      console.log(preState.friendUserIds)
      return preState;

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
