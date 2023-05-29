import axios from "axios";
import { Todo } from "./Constants";
import { AxiosResponse } from "axios";



export const postTodo = async (title:string) => {
const newTodo:Todo={
    title,
    status:false,
}
const res : AxiosResponse <Todo>= await axios.post ("http://localhost:8080/todos",newTodo)
}

export const getTodo=async()=>{
    const res=await axios.get("http://localhost:8080/todos")
    console.log("iloveujiii",axios.get("http://localhost:8080/todos"))
    console.log(res)
    console.log("v njvfjmhyfvjmg",res.data[0])
    return res
}

console.log(getTodo())
export const patchTodo=async(id?:number,status?:boolean)=>{

const res=await axios.patch(`http://localhost:8080/todos/${id}`,{status:!status})    // getRequest ->current status
    //make a patch ->!current status
}

// can also do 
// export const patch Todo= async(id?:number,status?:boolean)=>{
//     const todo=await axios.get("http://localhost:8080/todos/${id}");
//     const res=await axios.patch(`http://localhost:8080/todos/${id}`,{status:!todo.status})
// })