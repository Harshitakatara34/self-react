import { GET_TODO_SUCCESS, POST_TODO_SUCCESS, TODO_FAILURE, TODO_REQUEST } from "./actionType"
import axios from "axios"

export const todoRequestAction=()=>{
    return {type:TODO_REQUEST}
}
export const todoFailureAction=()=>{
    return {type:TODO_FAILURE}
}
export const getTodoSuccessAction=(payload)=>{
    return {type:GET_TODO_SUCCESS,payload}
}
export const postTodoSuccessAction=()=>{
    return {type:POST_TODO_SUCCESS}
}
export const getTodos=(dispatch)=>{
    dispatch(todoRequestAction());
    axios.get(" http://localhost:8080/todos").then(res=>{
        dispatch(getTodoSuccessAction(res.data))
    })
    .catch((err)=>{
        dispatch(todoFailureAction())
    })
        }

       export  const addTodo=(title)=>(dispatch)=>{
            const obj={
              title,
              status:false
            }
            dispatch(todoRequestAction());
            axios.post("http://localhost:8080/todos",obj).then((res)=>{
              dispatch(postTodoSuccessAction(res.data))
            })
            .catch(()=>{
              dispatch(todoFailureAction())
            })
          }
      