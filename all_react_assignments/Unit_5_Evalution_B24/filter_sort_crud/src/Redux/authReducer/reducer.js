import {
    Login_Failure,
    Login_Request,
    Login_Success,
  } from "../authReducer/actionType";
  
  const intialstate = {
    isLoading: false,
    isError: false,
    isAuth: false,
    token: "",
  };
  export const reducer = (state = intialstate, { type, payload }) => {
    switch (type) {
     
      case Login_Request:
        return { ...state, isLoading: true };
      case Login_Success:
        return { ...state, isLoading: false, token: payload ,isAuth:true};
      case Login_Failure:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };
  