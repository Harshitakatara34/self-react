import {useState} from "react"
function App() {
  const[counter,setCounter]=useState(0)
  
  const handle=()=>{
    setCounter(0)
  }
  let showdata=counter%2===0?"Even":"Odd"
  const check=(counter)=>{
    if(counter==1||counter==0){
      return false
    }
    for(let i=2;i<counter;i++){
      if(counter%i==0){
        return false
      }
    }
    return true
  }
  let Prime=check(counter)

  return (
    <div>
      <div>
        <button data-testid="minusonebtn"disabled={counter==0}onClick={(()=>setCounter(counter-1))}>-</button>
        <button data-testid="plusonebtn" onClick={(()=>setCounter(counter+1))}>+</button>
      <div>
        <button data-testid="resetbtn" onClick={handle}>reset</button>
      </div>
      </div>
      <span data-testid="counter">{counter}</span>
      <div>
        <span data-testid="odd-or-even">{showdata}</span>
        <span data-testid="is-prime">{Prime?"true":"false"}</span>
      </div>
    </div>
  );

}

export default App;

