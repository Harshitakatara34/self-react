import { TodoInput } from "./TodoInput"
import { useEffect } from "react"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { postRequestAction } from "../redux/Todo/action"
import { postRequestFailure,postRequestSuccess } from "../redux/Todo/action"
import { todoRequestAction,todoSuccessAction,todoFailureAction } from "../redux/Todo/action"
export const Todo=()=>{
    const dispatch=useDispatch()
console.log("star")
    // const isLoading=useSelector((store)=>store.isLoading)
    const {data,isLoading}=useSelector((store)=>{
        return {
            data:store.todo.todos,
            isLoading:store.todo.isLoading
        }
    },shallowEqual)
// It checks one step ahead for re -rendering process
    const getData=()=>{
        dispatch(todoRequestAction())
        axios.get(" http://localhost:8080/todos").then((res)=>{
           dispatch(todoSuccessAction(res.data))
       
        }).catch((err)=>{
            dispatch(todoFailureAction())
            console.log(err)
        })
    }
    useEffect(()=>{
getData()
    },[])

    const handleAdd=(input)=>{
    
        const newTodo={
            title:input,
            status:false
        }


        dispatch(postRequestAction())
        axios.post("http://localhost:8080/todos",newTodo).then(res=>{
        dispatch(postRequestSuccess(res.data))
        //again get request
        })
        .catch((err)=>{
            dispatch(postRequestFailure())
            console.log(err)
        })
    }
    return(
        <>
            <h1>Todos</h1>
            <TodoInput addTodo={handleAdd}/>
           {isLoading && <h1>Loading...</h1>}
            {data.length>0 && data.map((ele)=>{
                return(
                    <div>{ele.title}==={ele.status?"completed":"pending"}
                    </div>
                )
            })}
        </>
    )
}