import { getData, setData } from "../../utils/getData"
import { ADD} from "./actionType"
import { REDUCE } from "./actionType"
const initialState={
    counter:getData("count")||0,
}
export const reducer =(state=initialState,{type,payload})=>{
    switch(type){
    case ADD:
        setData("count",state.counter+payload)
        return {...state,counter:state.counter+payload}
    case REDUCE:
        setData("count",state.counter-payload)
        return {...state,counter:state.counter-payload}
   
        default:
        return state

}

}