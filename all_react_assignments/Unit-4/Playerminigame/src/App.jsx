
import {useState} from"react"


function App() {
 const[count,setCount]=useState(0);
 const[text,setText]=useState(1)
 const counttext=()=>{
  if(text===2){
    setText(1)
   
  }
 }
 function handle(){
  setCount(count+1)
  setText(text+1)
  counttext()
 }
 
 const handlee=()=>{
  setCount(count+2)
  setText(text+1)
  counttext()
 }
 const reset=()=>{
setCount(0)
setText(1)
 }
 var winner=text
 console.log(winner)
  return (
    <div className="App">
<h1>Welcome to Reach Ten Mini-Game </h1>
      {/* Display Player Turn here */}
      <span data-testid="turn-container">Player {text}</span>


      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button disabled={count===10}onClick={handle} data-testid="add-one-btn">+1</button>
        <button disabled={count===10||count===9}onClick={handlee} data-testid="add-two-btn">+2</button>
      </div>

      {/* Display the counter here */}

      <h1 data-testid="counter">{count}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">{(count===10)?(winner===1)?winner="Player "+2:winner="Player "+1:winner="Still To Be Decided"}</span>

      {/* Reset the Game with this button */}
      <button data-testid="reset-btn" onClick={reset}>Reset Game</button>
    </div>
  );
}

export default App;
