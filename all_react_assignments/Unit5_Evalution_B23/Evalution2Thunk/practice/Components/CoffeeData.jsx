import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoffeeData, getCoffeeDataFailure, getCoffeeDataRequest, getCoffeeDataSuccess } from "../Redux/AppReducer/action";
import { store } from "../Redux/store";
import axios from "axios"

export default function CoffeeData() {
  const dispatch = useDispatch();
useEffect(() => {
  console.log("working")
  dispatch(getCoffeeData)
  //getData()
}, [])
const coffeeData = useSelector((store) => store.coffeeData);
const isLoading = useSelector((store)=>store.isLoading);
const isError = useSelector((store)=>store.isError);
console.log("coffee",coffeeData)
console.log("coffeeloading",isLoading);
console.log("coffeeError",isError);

if(isLoading){
  return <h1>Loading...</h1>
}
if(isError){
  return <h1>Error...</h1>
}
if(coffeeData===undefined){
  return <h1>Wait</h1>
}
return (
  <div>
    <h2>Coffee Data</h2>
    <div className="coffee_data">
      {/* map the below div against your coffee data */}
      {/* Show image, title and price  */}
     {coffeeData.map((item)=>
      <div key={item.id}>
      <img src={item.image}  alt="" />
      <h4>{item.title}</h4>
      <h4>{item.price}</h4>
      </div>
      )}
    </div>
  </div>
);
}

 // const {CoffeeData,isLoading,isError} = useSelector((store)=>{return{
  //   CoffeeData:store.CoffeeData,
  //   isLoading:store.isLoading,
  //   isError:store.isError,
  // }});
  // console.log("coffeeData",CoffeeData)

//   const getData = () => {
//       dispatch(getCoffeeDataRequest());
//       axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`)
//       .then((res) => dispatch(getCoffeeDataSuccess(res.data)))
//       .catch((err) => dispatch(getCoffeeDataFailure()))
// }
