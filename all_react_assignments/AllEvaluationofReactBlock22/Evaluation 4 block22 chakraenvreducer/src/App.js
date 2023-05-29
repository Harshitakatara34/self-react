import "./App.css";
import { Button  } from '@chakra-ui/react'
import Form from "./Components/Form/Form";
import Dashboard from "./Components/Dashboard/Dashboard";
import {useState} from "react" ;
function App() {
  const [isFormVisible, setisFormVisible] = useState(false)
  // TODO: Remove below const and instead import them from chakra
 
 
  return <div className="App">
      <Button width = "150px" className = "toggleForm"
      onClick={()=> setisFormVisible(!isFormVisible)
      }>
        Toggle Form  
      </Button>
        {isFormVisible ? <Form/>  : <Dashboard/> }
  </div>;
}


export default App;


