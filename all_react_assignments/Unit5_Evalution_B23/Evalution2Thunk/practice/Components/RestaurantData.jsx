import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { store } from "../Redux/store";
import axios from "axios"
import { getRestaurantData } from "../Redux/AppReducer/action";

export default function RestaurantData() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    console.log("working")
    dispatch(getRestaurantData)
    //getData()
  }, [])
  const restaurantData = useSelector((store) => store.restaurantData);
  const isLoading = useSelector((store)=>store.isLoading);
  const isError = useSelector((store)=>store.isError);
  console.log("restaurant",restaurantData)
  console.log("resloading",isLoading);
  console.log("resError",isError);
  
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <h1>Error...</h1>
  }
  if(restaurantData===undefined){
    return <h1>Wait</h1>
  }
  return (
    <div>
      <h2> Restaurant Data </h2>
      <div className="restaurant_data">
        {/* Map the below div against your restaurant Data */}
        {/* show image, name, type, rating and number_of_votes */}

        {restaurantData.map((item)=>
      <div key={item.id}>
      <h4>{item.name}</h4>
      <h4>{item.type}</h4>
      <h4>{item.rating}</h4>
      <h4>{item.number_of_votes}</h4>
      </div>
      )}


        
      </div>
    </div>
  );
}
