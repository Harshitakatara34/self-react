import axios from "axios"
import {getCoffeeFailure, getCoffeeRequest, getCoffeeSuccess, getEmployeeFailure, getEmployeeSuccess, getRestaurantFailure, getRestaurantRequest, getRestaurantSuccess} from "./actionType"
//coffee
export const getCoffeeDataRequest = () => {
    return {type: getCoffeeRequest}
}
export const getCoffeeDataSuccess = (payload) => {
    return {type: getCoffeeSuccess, payload}
}

export const getCoffeeDataFailure = () => {
    return {type: getCoffeeFailure}
}
// restaurant
export const getRestaurantDataRequest = () => {
    return {type: getRestaurantRequest}
}
export const getRestaurantDataSuccess = (payload) => {
    return {type: getRestaurantSuccess, payload}
}

export const getRestaurantDataFailure = () => {
    return {type: getRestaurantFailure}
}
// employee
export const getEmployeeDataRequest = () => {
    return {type: getEmployeeDataRequest}
}
export const getEmployeeDataSuccess = (payload) => {
    return {type: getEmployeeSuccess, payload}
}

export const getEmployeeDataFailure = () => {
    return {type: getEmployeeFailure}
}

export const getCoffeeData = (dispatch) => {
    dispatch(getCoffeeDataRequest());
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`)
.then((res) => dispatch(getCoffeeDataSuccess(res.data.data)))
.catch((err) => dispatch(getCoffeeDataFailure()))
}

export const getEmployeeData = (dispatch) => {
    dispatch(getEmployeeDataRequest());
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`)
    .then((res)=>dispatch(getEmployeeDataSuccess(res.data.data)))
    .catch((err)=>dispatch(getEmployeeDataFailure()));
}

export const getRestaurantData = (dispatch) => {
    dispatch(getRestaurantDataRequest());
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants`)
    .then((res)=>dispatch(getRestaurantDataSuccess(res.data.data)))
    .catch((err)=>dispatch(getRestaurantDataFailure()));
}
