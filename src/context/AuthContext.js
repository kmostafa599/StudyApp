import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  authedUser: 
  JSON.parse(localStorage.getItem("user"))||
   null,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
      //save user in LocalStorage
    localStorage.setItem("user", JSON.stringify(state.authedUser));
  }, [state.authedUser]);
  console.log(state.authedUser)
  console.log(JSON.parse(localStorage.getItem("user")))

  return (
    <AuthContext.Provider value={{ authedUser: state.authedUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};