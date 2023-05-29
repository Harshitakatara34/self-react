// import * as types from "./actionType";

import {
    getCoffeeFailure,
    getCoffeeRequest,
    getCoffeeSuccess,
    getEmployeeFailure,
    getEmployeeRequest,
    getEmployeeSuccess,
    getRestaurantFailure,
    getRestaurantRequest,
    getRestaurantSuccess
} from "./actionType";

const initialState = {
    isLoading: false,
    isError: false,
    coffeeData: [],
    restaurantData: [],
    employeeData: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case getCoffeeRequest:
            return {
                ...state,
                isLoading: true
            }

        case getCoffeeSuccess:
            return {
                ...state,
                isLoading: false,
                coffeeData: action.payload,
            }

        case getCoffeeFailure:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case getEmployeeRequest:
            return {
                ...state,
                isLoading: true
            }

        case getEmployeeSuccess:
          console.log("employeeData",action.payload)
            return {
                ...state,
                isLoading: false,
                employeeData: action.payload
                
            }
        case getEmployeeFailure:
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case getRestaurantRequest:
            return {
                ...state,
                isLoading: false
            }

        case getRestaurantSuccess:
          console.log("rest",action.payload)

            return {
                ...state,
                isLoading: false,
                restaurantData: action.payload,
            }

        case getRestaurantFailure:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }

};

export {
    reducer
};
