import { ADD} from "./actionType"
import { REDUCE } from "./actionType"
const initialState={
    counter:10,
}
export const reducer =(state=initialState,{type,payload})=>{
    switch(type){
    case ADD:
        return {...state,counter:state.counter+payload}
    case REDUCE:
        return {...state,counter:state.counter-payload}
   
        default:
        return state

}

}