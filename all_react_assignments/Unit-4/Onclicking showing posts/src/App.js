import "./App.css";
import Post from "./Components/Post";
import {useState} from "react"
function App() {
  const[state,setstate]=useState([])
  const handlePosts=async()=>{
let data=await fetch(`https://jsonplaceholder.typicode.com/posts`)
let res=await data.json()
setstate(res)
  }
  return (
    <div className="App" data-testid="app">
      <button onClick={handlePosts}
        id="get-posts-btn"
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
     {state.map((ele)=><Post  title={ele.title} body={ele.body}/>)}
    
     
      </div>
    </div>
  );
}

export default App;
