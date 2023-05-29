import React from 'react';
import './App.css';
import Login from '../../../../../evaluation/frontend/src/Components/login';
import Register from '../../../../../evaluation/frontend/src/Components/register';
import Home from '../../../../../evaluation/frontend/src/Components/Posts';
import Navbar from '../../../../../evaluation/frontend/src/Components/Navbar';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Create from '../../../../../evaluation/frontend/src/Components/create';
import Edit from '../../../../../evaluation/frontend/src/Components/Edit';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
     <Route path="/register" element={<Register/>}></Route>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/create" element={<Create/>}></Route>
     <Route path="/login" element={<Login/>}></Route>
     <Route path="/edit/:id" element={<Edit/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
