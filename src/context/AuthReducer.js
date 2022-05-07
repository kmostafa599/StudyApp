const AuthReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN": {
        console.log(action.payload)
        return {
          authedUser: action.payload,
        };
      }
      case "LOGOUT": {
        return {
          authedUser: null,
        };
      }
      default:
        return state;
    }
  };
  
  export default AuthReducer;