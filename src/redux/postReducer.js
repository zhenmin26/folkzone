let initState = {}

export default function postReducer(preState=initState, action){
    const {type, data} = action

    switch(type){
        case 'addPost':
          return preState;

        case 'editPost':
          return preState;

        case 'commentPost':
          return 'hello div';

        default:
          return preState;
    }
}
