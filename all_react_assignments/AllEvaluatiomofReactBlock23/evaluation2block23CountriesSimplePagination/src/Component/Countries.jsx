import { useState,useEffect } from "react";
import LoadingIndicator from "./LoadingIndicator";
import Pagination from './Pagination';
import CountriesCard from './CountriesCard'

function Countries() {
  const [loading,setLoading]=useState(false)
  const [data,setdata]=useState(null)
  const [current,setCurrent]=useState(1)
  const [total,setTotal]=useState(null)

  
  const getData=async()=>{
    setLoading(true)
   const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries?page=${current}&limit=10`)
   const result=await response.json()
  setTotal(result.totalPages)
   setdata(result.data)
   setLoading(false)
  }

  
  useEffect(()=>{
    getData()
  },[current])

  const handleChange=(page)=>{
    setCurrent(page)
  }
  return loading?<LoadingIndicator/>: (
    <div>
      <h1 data-testid="countries-header">Countries List</h1>
      <div data-testid="countries-container">
        {/* Counties card */}
       {data?.map((el)=>
<CountriesCard
 key={el.id} country={el.country} population={el.population}/>
       )}
      </div>
      <div>
       <Pagination current={current} onChange={handleChange} total={total}/>
      </div>
    </div>
  );
}

export default Countries;