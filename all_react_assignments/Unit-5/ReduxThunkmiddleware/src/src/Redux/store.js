import { reducer } from "./reducer"
import thunk from "redux-thunk"
import { applyMiddleware, legacy_createStore } from "redux"
// const myMiddleWare=(store)=>(dispatch)=>(action)=>{
   
// if(typeof action  ==="function"){
// return action(dispatch)
// }
// return dispatch(action)
// }
// const m2=(a)=>(b)=>(c)=>{
// console.log(a)
// console.log(b)
// console.log(c)
// }
export const store=legacy_createStore(reducer,applyMiddleware(thunk))

