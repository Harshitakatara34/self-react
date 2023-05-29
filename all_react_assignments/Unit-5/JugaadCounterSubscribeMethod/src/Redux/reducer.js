import { ADD } from "./actionTypes";
import { REDUCE } from "./actionTypes";
export const reducer = (state,{type,payload})=>{
    console.log("running")
    switch(type){
        case ADD:
            return {...state,counter:state.counter+payload};
            case REDUCE:
                return {...state,counter:state.counter-payload};
        default:
            return state;
    }
}