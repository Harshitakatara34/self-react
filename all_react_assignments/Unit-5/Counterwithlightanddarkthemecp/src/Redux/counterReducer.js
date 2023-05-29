//Complete the reducer function logic inside the curly braces {}

import { ADD, REDUCE } from "./actionTypes";


// the counter initstate shouldbe 10
const initialState={
    counter:10,
}

const counterReducer = (state=initialState,{type,payload}) => {
    console.log(state)
    switch(type){
    case ADD:
        return{...state,counter:state.counter+payload}
        case REDUCE:
            return {...state,counter:state.counter-payload}
        default:
            return state;
        }
    }
export { counterReducer };
