import React from "react";
import { BrowserRouter } from "react-router-dom";
import{Routes,Route} from "react-router-dom"
import NavBar from "./Components/Navbar/Navbar";
const Home=()=>{
  return<>
  <h1>Home Page</h1></>
}
 const Contact=()=>{
  return<>
  <h1>Contact Page</h1></>
}
 const About=()=>{
  return<>
  <h1>About Page</h1></>
}
 const Services=()=>{
  return<>
  <h1>Services Page</h1></>
}
 const Login=()=>{
  return<>
  <h1>Login Page</h1></>
}


function App() {
  return <BrowserRouter>
  {/* Add your code here */}
  <>
  <NavBar/>
  </>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/about-us" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/login" element={<Login/>}/>
  </Routes>
  </BrowserRouter>;
}

export default App;
