// import logo from './logo.svg';
import './App.css';
import Button from "./components/Button.jsx"
function App() {
  const handle=()=>{
   alert("You have clicked Masai!")
  return(<h1>pressed</h1>)
  }
  return (
  <div>
    <Button handle={handle}  />
    
    </div>
  );
}

export default App;
