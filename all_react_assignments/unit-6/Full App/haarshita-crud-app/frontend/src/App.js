import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import Register from './Components/register';
 
import Navbar from './Components/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Create from './Components/create';
import Edit from './Components/Edit';
import Home from './Pages/Home';
import NotesData from './Pages/NotesData';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/notes" element={< NotesData />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
      </Routes>

    </div>
  );
}

export default App;
