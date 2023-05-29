import React from "react";
import {useSelector} from "react-redux"
import { themeReducer } from "../Redux/themeReducer";
import { counterReducer } from "../Redux/counterReducer";
const CounterValue = () => {
//  console.log(useSelector(state=>state.counter))
 
 const {counter}=useSelector(state=>state.counterReducer)
//  console.log(theme)
 
  return <div data-testid="counterValue">{counter}</div>;
};

export default CounterValue;
