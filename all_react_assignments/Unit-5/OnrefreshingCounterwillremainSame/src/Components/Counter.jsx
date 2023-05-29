import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { addAction,reduceAction} from "../redux/Counter/action"


export const Counter=()=>{
    const dispatch = useDispatch()
    console.log(dispatch)
    const { counter }=useSelector((state)=>{
      
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
    <h1>Counter:{counter}</h1>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleReduce}>reduce</button>
    </>
}
export default Counter