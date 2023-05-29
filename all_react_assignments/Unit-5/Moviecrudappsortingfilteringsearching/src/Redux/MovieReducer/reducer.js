import React from 'react'
import { PRODUCT_FAILURE } from './actionTypes'
import { GET_PRODUCT_SUCCESS } from './actionTypes'
import { PRODUCT_REQUEST } from './actionTypes'
const initialState={
    isLoading: false,
    isError: false,
    movies: [],
  }
export const reducer = (state=initialState,{type,payload}) => {
 
 switch(type){
case PRODUCT_REQUEST:
 return {...state,isLoading:true}
 case GET_PRODUCT_SUCCESS:
    return{...state,isLoading:false,movies:payload}
   
case PRODUCT_FAILURE:
    return {...state,isLoading:false,isError:true}
    default:
        return state
}

}



