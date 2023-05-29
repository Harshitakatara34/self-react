import React from "react";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";
import { useSelector } from "react-redux";
import { themeReducer } from "../Redux/themeReducer";
const Counter = () => {
  const {theme}=useSelector(store=>store.themeReducer)
  return (
    // the following div classname should be chnaged accrding to the theme
    <div  className={theme=="light"?"light_theme":"dark_theme"}  data-testid="counter">
      <h1>Counter</h1>
      {/* Import CounterValue component here and DO NOT PASS anything through props, for this component */}
<CounterValue/>
<CounterButtons/>
      {/* Import CounterButtons component here and DO NOT PASS anything through props, for this component */}
    </div>
  );
};

export default Counter;
