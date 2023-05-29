import Card from './Card';
import {useState} from "react"
const initialstate={Name:"",height:"",power:"",weight:""}
const InputTags=()=>{
    const[hero,sethero]=useState(initialstate)
    const[data,setdata]=useState([])
    const[powerfullhero,setpowerfullhero]=useState([])
    const handleChange=(e)=>{
const{name,value}=e.target
sethero({...hero,[name]:value})
console.log(e)
    }
    console.log(hero)

    const handleSubmit=(e)=>{
    e.preventDefault()
   setpowerfullhero((prev)=>{
        return [...prev,hero]
      })
      setdata((prev)=>{
        return [...prev,hero]
      })
    }
    const handleMost=()=>{
        console.log(data)
        console.log(...data)
let power=Math.max(...data.map((item)=>item.power))
console.log(power)
let PowerData = data.find((item)=> item.power==power?item:null)
    console.log(PowerData);
       setpowerfullhero([PowerData])
    }
    const handleShow=()=>{
setpowerfullhero([...data])
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <input data-testid="input-name" type="text" value={hero.Name} name="Name" onChange={handleChange}/>
            <input data-testid="input-height" type="text" value={hero.height} name="height" onChange={handleChange}/>
            <input data-testid="input-weight" type="text" value={hero.weight} name="weight" onChange={handleChange}/> 
            <input data-testid="input-power" type="text" value={hero.power} name="power" onChange={handleChange}/> 
            <button data-testid="add-button" disabled={hero.Name==""||hero.height==""
            ||hero.weight==""||hero.power==""}>Add SuperHero</button>
        </form>
        <button data-testid="most-powerfull" disabled={data.length<1} onClick={handleMost} >Most Powerful Superhero</button>
        <button data-testid="all-superheroes" disabled={data.length<1} onClick={handleShow} >Show All</button>
        <Card  data={powerfullhero}/>
        </>
    )
}

export default InputTags;
