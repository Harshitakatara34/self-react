import React from "react";
import { forwardRef } from "react";
import propTypes from "prop-types";


export const Pin = forwardRef(({ maxChar,backspace,handleFocus},ref)=>{

  const keyHandler = (e) => {
    if (e.keyCode === 8) {
      backspace(e);
    }else{
        handleFocus(e);
    }
};

  return (
    <input data-testid="pin-input" 
     ref={ref} 
     onKeyUp={(e)=> keyHandler(e)} 
     maxLength={maxChar}/>
    )
})


Pin.propTypes = {
  handleFocus: propTypes.number.isRequired,
  maxChar: propTypes.number,
  ref:  propTypes.number,
};

// Check maxChar prop here
