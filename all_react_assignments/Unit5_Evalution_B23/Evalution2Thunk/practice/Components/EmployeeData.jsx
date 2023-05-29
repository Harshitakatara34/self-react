import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { store } from "../Redux/store";
import axios from "axios"
import { getEmployeeData } from "../Redux/AppReducer/action";


export default function EmployeeData() {
  const dispatch = useDispatch();
  
useEffect(() => {
  console.log("working")
  dispatch(getEmployeeData)
  //getData()
}, [])
//const employeeData = useSelector((store) => store.employeeData.data);
const employeeData = useSelector((store) => store.employeeData);
const isLoading = useSelector((store)=>store.isLoading);
const isError = useSelector((store)=>store.isError);
console.log("employee",employeeData)
console.log("coffeeloading",isLoading);
console.log("coffeeError",isError);

if(isLoading){
  return <h1>Loading...</h1>
}
if(isError){
  return <h1>Error...</h1>
}
if(employeeData===undefined){
  return <h1>Wait</h1>
}
  return (
    <div>
      <h2>Employee Data</h2>
      <div className="employee_data">
        {/* Map the below div against yoru employee data */}
        {/* Show image name, gender, and department */}
        {employeeData.map((item)=>
      <div key={item.id}>
      <h4>{item.name}</h4>
      <h4>{item.gender}</h4>
      <h4>{item.department}</h4>
      </div>
      )}
      </div>
    </div>
  );
}
