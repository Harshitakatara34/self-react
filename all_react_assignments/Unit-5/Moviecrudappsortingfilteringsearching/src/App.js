import "./App.css";
import { MovieList } from "./Components/MovieList";
import { Navbar } from "./Components/Navbar";
import { Login } from "./Pages/Login";
import { MainRoutes } from "./Pages/MainRoutes";

function App() {
  //Do not modify anything in this file
  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
     
      
    </div>
  );
}

export default App;
