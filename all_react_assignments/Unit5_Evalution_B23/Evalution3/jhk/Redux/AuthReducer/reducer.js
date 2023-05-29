import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actionTypes"

const intialState= {
        isLoading: false,
        isError: false,
        isAuth: false,
        token: "",
      }

export const reducer=(state=intialState,{type,payload})=>{
    switch(type){
    case LOGIN_REQUEST:
        return {...state,isLoading:true}
    case LOGIN_FAILURE:
        return {...state,isLoading:false,isError:true}
    case LOGIN_SUCCESS:
        return {...state,isLoading:false,isAuth:true,payload}
    default:
            return state
    }
}

