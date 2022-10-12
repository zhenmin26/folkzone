let initState = {
  login : false
}

export default function userReducer(preState=initState, action){
    const {type, data} = action

    switch(type){
        case 'register':
          
          return preState;

        case 'updateInfo':
          return preState;

        case 'login':
          return preState;

        default:
          return preState;
    }
}