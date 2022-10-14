let initState = {
  login: false,
  allUsers: [],
  friendUserIds: [],
  curUser: {
    "id": 0,
    "name": "new user",
    "username": "newbee",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
};

export default function userReducer(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case "getAllUser":
      preState.allUsers = data;
      return preState;

    case "getUser":
      preState.curUser = data;
      // console.log(preState.curUser)
      return preState;

    case "getFriendUserId":
      preState.friendUserIds = data;
      localStorage.setItem("friendUserIds", JSON.stringify(preState.friendUserIds));
      // console.log(preState.friendUserIds)
      return preState;

    case "addFriend":
      preState.friendUserIds.push(data);
      localStorage.setItem("friendUserIds", JSON.stringify(preState.friendUserIds));
      // console.log(preState.friendUserIds)
      return preState

    case "changeStatus":
      // console.log("changeStatus");
      preState.userStatus = data;
      return preState;

    // case "updateInfo":
    //   return preState;

    // case "login":
    //   return preState;

    default:
      return preState;
  }
}
