import React from "react";
import { ADD, REDUCE } from "../Redux/actionTypes";
import { useDispatch } from "react-redux";
import { handleAdd, handleReduce } from "../Redux/action";
import { useSelector } from "react-redux";
import { themeReducer } from "../Redux/themeReducer";
import "./counter.css"

const CounterButtons = () => {
  const{theme}=useSelector(store=>store.themeReducer)
  const dispatch=useDispatch()
  const add=()=>{
    dispatch(handleAdd(1))
  }
  const reduce=()=>{
    dispatch(handleReduce(1))
  }
  return (
    <div data-testid="counterButtons">
      <button className={theme=="dark"?"light_theme":""} data-testid="addButton" onClick={add}>ADD</button>
      <button className={theme=="dark"?"light_theme":""} data-testid="reduceButton" onClick={reduce}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
