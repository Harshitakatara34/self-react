import { MOVIE_FAILURE, MOVIE_REQUEST, MOVIE_SUCCESS } from "./actionTypes"
const intialState={
    isLoading: false,
    isError: false,
    movies: [],
  }
export const reducer=(state=intialState,{type,payload})=>{
    switch(type){
    case MOVIE_REQUEST:
        return {...state,isLoading:true}
    case MOVIE_FAILURE:
        return {...state,isLoading:false,isError:true}
    case MOVIE_SUCCESS:
        return {...state,isLoading:false,movies:payload}
    default:
        return state
    }
}

