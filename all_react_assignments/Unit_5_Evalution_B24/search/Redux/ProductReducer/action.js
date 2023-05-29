import {
  PRODUCT_SUCCESS,
  EDIT_VALUE,
  PRODUCT_ERROR,
  PRODUCT_REQUEST,
  ADD_VALUE,
} from "./actionType";
import axios from "axios";

export const productAction = (paramsValue,page) => async (dispatch) => {

  dispatch({ type: PRODUCT_REQUEST });
  try {
    let res = await axios.get(`http://localhost:8080/products?_page=1&_limit=${page}`, paramsValue);
    dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};

export const EditAction = (id, value) => async (dispatch) => {
  try {
    let res = await axios.patch(`http://localhost:8080/products/${id}`, 
      value
    );
    console.log("edit",res.data)
    dispatch({ type: EDIT_VALUE, payload: res.data });
  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};

export const AddAction = (addValue) => async (dispatch) => {
  try {
    let res = await axios.post(`http://localhost:8080/products`, addValue);
    console.log("add",res.data)

  } catch (err) {
    dispatch({ type: PRODUCT_ERROR });
  }
};
