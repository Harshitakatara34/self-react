import logo from './logo.svg';
import './App.css';
import { Provider } from 'react';
import { Login } from './Pages/Login';
import Navbar from './Components/Navbar';
import MainRoutes from './Pages/MainRoutes';
import Pagination from './Components/Pagination';
function App() {
  return (
    <div className="App">
    <Navbar/>
   <MainRoutes/>
   
    </div>
  );
}

export default App;
