import React from "react";
import { useState,useEffect } from "react";
import SearchResults from "./SearchResults";
export const fetchData = async () => {
  // make fetch request to the mentioned api and return the result here
  try {
    return fetch("https://6098f0d799011f001713fbf3.mockapi.io/techcurators/products/flights/1")
     .then((res)=>res.json());
  } catch (error) {
    console.log(error);
  }
};


let obj={
  Source:"",
  Destination:""
}
 
function FlightSearch() {
  const [flight, setflight] =  useState(obj);
  const [Data,setData]= useState([]);
  const [resData,setresData]= useState([]);
  // on page load fetch the data (useEffect)
  const fetchedData = async () => {
  // make fetch request to the  mentioned api and return the result here
    try {
      let data= await fetchData();
      console.log(data);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };
  //first time onLoad
  useEffect(()=>{
    fetchedData();
  },[])


  const handleSearch = () => {
    // filter the data based on source and destination
     let x=Data.filter((item)=>{
        return item.source===flight.Source
         && item.destination==flight.Destination;
     })
     console.log(x);
     setresData(x);
    //  console.log(flight);
  };


  //handleChange :-
const handleChange=(e)=>{
  const {name,value}=e.target;
  console.log(e.target.value)
  setflight({...flight,[name]:value});
}
 
  const {Source,Destination}=flight;
  return (
    <div>
      <div></div>
      <div>
        <section>
          <h4>Flight Search</h4>
          <br />
          <input data-testid="source-input" placeholder="Source"  name="Source"
          value={Source}
          onChange={handleChange}/>
          <br /> <br />
          <input data-testid="destination-input" placeholder="Destination" name="Destination"
          value={Destination}
          onChange={handleChange} />
          <br /> <br />
          <button data-testid="search-button" onClick={handleSearch}>Search</button>
        </section>
      </div>
      {/* if there are search results pass it to SearchResults component else print No Flights found  */}
      { resData.length==0 ?  
      <div data-testid="no-flights" className="">
            No Flights Found
          </div> : <SearchResults resData={resData}/>   }
    </div>
  );
}


export default FlightSearch;


