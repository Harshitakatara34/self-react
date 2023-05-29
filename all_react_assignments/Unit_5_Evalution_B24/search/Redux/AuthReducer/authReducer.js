import { LOGIN_ERROR, LOGIN_REQUEST, LOGIN_SUCCESS } from "./authactionType";

const initialState = {
  loading: false,
  error: false,
  token: "",
  auth: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        auth:false
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        token: payload,
        auth:true
      };
    }
    case LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        auth:false
      };
    }

    default: {
      return state;
    }
  }
};
