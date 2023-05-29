import React from "react";
function TodoItem({id,status,title,handleToggle,handleDelete}){
    return(
        <li key={id}>
            {title}-{status?"completed":"not completed"}
        <button onClick={()=>handleToggle(id)}>TOGGLE</button>
        <button onClick={()=>handleDelete(id)}>DELETE</button>
        </li>
    )
}



function AddTodo(props){
    const[text,setText]=React.useState("");
    const handleChange=(e)=>{
      setText(e.target.value);
    };
    const handleclick=()=>{
        props.handleAddTodo(text);
        setText("");
    }
    return(
        <>
 <input placeholder="Add Todo" value={text} onChange={handleChange}/>
    <button onClick={handleclick}>Add</button>

        </>
    )
}




function Todo(){

const[todos,setTodos]=React.useState([]);

const handleAddTodo=(text)=>{
const newItem={
    title:text,
    status:false,
    id:Date.now()+ text + Math.random(),
};


const newlist=[...todos,newItem]
setTodos(newlist);

}
const handleToggle=(id)=>{
    const data=todos.map((todo)=>
        todo.id===id?{...todo,status:!todo.status}:todo
    );
    setTodos(data)
}
const handleDelete=(id)=>{
    const data2=todos.filter(todo=>
    todo.id!==id);
    setTodos(data2)
}
console.log(setTodos)
console.log(todos)
    return(
    <div>
   <AddTodo handleAddTodo={handleAddTodo}/>
   <div>
   {todos.map((todo)=>{
  return <TodoItem key={todo.id}
  title={todo.title}
  status={todo.status}
  id={todo.id}
  handleToggle={handleToggle}
handleDelete={handleDelete}
  />
    })}
    
   </div>
   
</div>


);
   

}
export default Todo;