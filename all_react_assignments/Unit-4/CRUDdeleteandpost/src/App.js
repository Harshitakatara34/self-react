
import './App.css';
import {useState,useEffect} from "react"
import Productform from './Components/Productform';
import ProductItem from "./Components/ProductItem";
import Pagination from "./Components/Pagination"
function App() {
  const[loading,setloading]=useState(false)
  const[error,seterror]=useState(false)
 const[products,setproducts]=useState([])
 const[page,setpage]=useState(1)
 const fetchandupdatedata=async()=>{
  setloading(true);
  try {
    let data=await fetch("http://localhost:8080/products")
    let res=await data.json()
    setproducts(res)
    setloading(false)
    
  } catch (err) {
    seterror(true)
    setloading(false)
  }
 }
 useEffect(()=>{
  fetchandupdatedata()
 },[])
 
  const handleFormSubmit=(formdata)=>{
    console.log("gfjaghfch")
    console.log(formdata)
    setloading(true)
fetch("http://localhost:8080/products",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify(formdata),
})
.then((data)=>data.json())
.then(()=>{setloading(false)
fetchandupdatedata()
})
.catch((err)=>{
  seterror(true)
  setloading(false)
})
  }
  const handledelete= async(id)=>{
    try {
      const deletData=  await fetch(`http://localhost:8080/products/${id}`,{
        method:"DELETE",
        headers:{
          "Content-Type":'application/json',
        }
      });
      console.log(deletData)
      if(deletData.ok){
        const data1=await deletData.json();
       fetchandupdatedata();
        console.log(data1)
      }
    } catch (err) {
      seterror(true)
    }
  }
  const handlePatch=async (id)=>{
const patchdata=  await fetch(`http://localhost:8080/products/${id}`,{
method:"PATCH",
headers:{
  "Content-Type":"application/json"
},
body:JSON.stringify({title:"updated title"})
      })
      .then(res=>{
        if(!res.ok){
          alert("not updated")
        }
        return res.json()
      })
      .then(data=>{
        console.log(data)
      })
     .catch (error=> {
console.log("errror")
    })
    }
  const handlePage=(value)=>{
   setpage(value+1)
  }
 
  return (
    loading?<h1>loading.....</h1>:error?<h1>something went wrong</h1>:
    <div className="App">
   <Productform handleFormSubmit={handleFormSubmit}/>
   <hr/>
   <hr/>
   <br/>
   <div>
    <h1>Products</h1>
    {products.map((prod)=>(<ProductItem key={prod.id}{...prod} handledelete={handledelete} handlePatch={handlePatch} page={page} handlePage={handlePage}/> ))}
   <Pagination page={page} handlePage={handlePage}/>
   </div>
     </div>
  );
}



export default App;
