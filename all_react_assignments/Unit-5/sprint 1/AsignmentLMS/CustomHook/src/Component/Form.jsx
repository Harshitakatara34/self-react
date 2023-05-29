import React, { useReducer } from 'react'
import useMyreducer from '../Hooks/useMyreducer'



const reducer=(state,{type,payload})=>{
    switch(type){
        case "ADD":
            return {...state,counter:state.counter+payload}
     default: return state 
    }
}

    const initialstate={
        counter:0,
        todos:[],
        email:"",
        password:"",
    }


const Form = () => {
    const [data,dispatch]=useMyreducer(reducer,initialstate)
   
  return (
    <div>
      <h1>Count:{data.counter}</h1>
      <button onClick={()=>dispatch({type:"ADD",payload:1})}>Submit</button>
    </div>
  )
}

export default Form
