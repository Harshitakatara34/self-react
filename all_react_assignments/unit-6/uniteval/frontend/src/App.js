import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Components/login';
import Register from './Components/register';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
     <Route path="/users/register" element={<Register/>}></Route>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/users/login" element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
