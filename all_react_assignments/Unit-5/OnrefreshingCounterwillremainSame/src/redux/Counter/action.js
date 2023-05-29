import { ADD } from "./actionType"
import { REDUCE } from "./actionType"

export const addAction=(payload)=>{
    return {type:ADD,payload}
}
export const reduceAction=(payload)=>{
    return {type:REDUCE,payload}
}
