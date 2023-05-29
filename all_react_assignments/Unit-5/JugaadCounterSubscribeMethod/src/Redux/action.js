import { ADD } from "./actionTypes"
import { REDUCE } from "./actionTypes"
export const add=()=>{
    return {type:ADD , payload:1}
}

export const reduce=()=>{
    return {type: REDUCE , payload:1}
}