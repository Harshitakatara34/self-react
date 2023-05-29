import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addAction } from "../redux/action"
import { reduceAction } from "../redux/action"


export const Counter=()=>{
    const dispatch = useDispatch()
    console.log(dispatch)
    const count=useSelector((state)=>{
      
console.log(state)
return state.counter
    })

    
const handleAdd=()=>{
dispatch(addAction(1))
}
  const handleReduce=()=>{
dispatch(reduceAction(1))
  }  
    return <>
    <h1>Counter:{count}</h1>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleReduce}>reduce</button>
    </>
}
export default Counter