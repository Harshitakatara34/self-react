import {useState} from "react"
function App() {
  const[player,setplayer]=useState(1)
  const [Counter,setCounter]=useState(0)
  
  const handleClick=()=>{
    setplayer(player===1?2:1)
    setCounter(Counter+1)

  }
  const handleClickk=()=>{
    setplayer(player===1?2:1)
    setCounter(Counter+2)
  }
 
  
  const handleReset=()=>{
    setplayer(1)
    setCounter(0)
  }
 
 var winnerplayer = "Still To Be Decided";
 const Winner = () => {
   if (Counter === 10) {
     winnerplayer = player===1 ? "Player 2": "Player 1"
   }
 }
 Winner()
  return (
    <div className="App">
<h1>Welcome to Reach Ten Mini-Game</h1>
      {/* Display Player Turn here */}
      <span data-testid="turn-container">Player {player}</span>


      {/* Buttons to increment the counter */}
      <div data-testid="buttons-container">
        <button data-testid="add-one-btn" disabled={Counter==10} onClick={handleClick}>+1</button>
        <button data-testid="add-two-btn" disabled={Counter==9}onClick={handleClickk} >+2</button>
      </div>

      {/* Display the counter here */}
      <h1 data-testid="counter">{Counter}</h1>

      {/* Display the winner here */}
      <span data-testid="winner-container">Winner:{winnerplayer}</span>

      {/* Reset the Game with this button */}
      <button data-testid="reset-btn" onClick={handleReset}>Reset Game</button>
    </div>
  );
}

export default App;
