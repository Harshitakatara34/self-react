import React from "react";
import {
  Delete_Product_Success,
  Get_Product_Success,
  Post_Product_Success,
  Product_Failure,
  Product_Request,
} from "./actionType";
const intialState = {
  isLoading: false,
  isError: false,
  product: [],
};
export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case Product_Request:
      return { ...state, isLoading: true };
    case Product_Failure:
      return { ...state, isLoading: false, isError: true };
    case Post_Product_Success:
        return {...state,isLoading:false}
    case Get_Product_Success:
      return { ...state, isLoading: false, product: payload };
      case Delete_Product_Success:
        return { ...state, isLoading: false, product: payload };
    default:
      return state;
  }
};
