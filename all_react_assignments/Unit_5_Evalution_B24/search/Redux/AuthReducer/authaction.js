import axios from "axios";
import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./authactionType";

export const loginAction = (loginObj) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    let res = await axios.post("https://reqres.in/api/login", loginObj);
    dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
  } catch (err) {
    dispatch({ type: LOGIN_ERROR });
  }
};
