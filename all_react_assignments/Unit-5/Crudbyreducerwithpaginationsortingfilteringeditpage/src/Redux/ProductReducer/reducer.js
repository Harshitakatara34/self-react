import { PRODUCT_FAILURE, PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, GET_PRODUCT_SUCCESS, PATCH_PRODUCT_SUCCESS } from "./actionType"
import { SET_PAGE } from "./actionType"
const initialState={
    isLoading:false,
    isError:false,
 products:[],
 totalPage:1,
}


export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case PRODUCT_REQUEST:
        return {...state,isLoading:true}
case ADD_PRODUCT_SUCCESS:
    return{...state,isLoading:false}
case PRODUCT_FAILURE:
    return{...state,isLoading:false,isError:true}
case GET_PRODUCT_SUCCESS:
    return{...state,isLoading:false,products:payload}
case PATCH_PRODUCT_SUCCESS:
    return {...state,isLoading:false}
case SET_PAGE:
    return{...state,totalPage:payload}
    default:
            return state
    }

}