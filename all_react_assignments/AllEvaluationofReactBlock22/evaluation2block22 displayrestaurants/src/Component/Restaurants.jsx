import LoadingIndicator from "./LoadingIndicator"
import {useState,useEffect} from "react"
import RestaurantCard from "./RestaurantCard"
import Pagination from"../Component/Pagination"
function Restaurants() {
  const [state,setstate]=useState([])
  const[error,seterror]=useState(false)
 const[loading,setloading]=useState(false)
const[page,setPage]=useState(1)
useEffect(()=>{
  temp(page)
},[page])
const temp=async(page)=>{
  setloading(true)
 try {
    let data= await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?limit=10&page=${page}`)
    console.log(data)
    let res=await data.json()
    console.log(res)
    setstate(res)
    setloading(false)
    seterror(false)
  } 

  catch (error) {
    seterror(true)
    setloading(false)
  }
}
console.log(state)


if(loading){
  return <LoadingIndicator/>
}
 
  return (
    <div>
      <h1 data-testid="restaurants-header">Restaurants List</h1>
      <div data-testid="restaurants-container">
       {/* Restaurant Card */}
       {state?.data?.map((ele)=>{
       return <RestaurantCard key={ele.id} name={ele.name} image={ele.image}type={ele.type}rating={ele.rating} price_starts_from={ele.price_starts_from}number_of_votes={ele.number_of_votes}/>
        }
        )}
      </div>
      <div>
        {/* Pagination Component */}


        <Pagination current={page} total={state.totalPages}
        onChange={(value)=>setPage(value)}/>
        
      </div>
    </div>
  );
}

export default Restaurants;
