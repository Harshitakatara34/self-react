import React from "react";
import { useState } from "react";
import propTypes from "prop-types";
import { useRef } from "react";
import { Pin } from "./Pin";

export const PinTab = ({ length , maxChar , setOtp }) => {
  const [pinLength] = useState(new Array(length).fill(""));
  let inputRef = useRef([]);
  const [otpValue] = useState(new Array(length).fill(""));


  const handleFocus = (e, index) => {
    otpValue[index] = e.target.value;
    if (e.target.value.length === maxChar && index < length - 1) {
        inputRef.current[index + 1].focus();
    }
    setOtp(otpValue.join(" "));
};


const backspace = (e, index) => {
  otpValue[index] = e.target.value;
  if (e.target.value.length === 0 && index > 0) {
      inputRef.current[index - 1].focus();
  }
  setOtp(otpValue.join(" "));
}




const pasteHandler =(e)=>{


  const data =e.clipboardData
  .getData("Text")
  .split("")
  .filter((_, index)=>{
      return index < length ;
  });


  data.forEach((el, index)=>{
      otpValue[index] =el;
      inputRef.current[index].value =el;
      if(e.target.value.length === maxChar && index < length-1){
          inputRef.current[index+1].focus();
      }
      setOtp(otpValue.join(" "));
  })
 }
 console.log(inputRef);




  return (
  <div data-testid="pin-tab" onPaste={pasteHandler}>{/* Add Pin component here  */}
  {pinLength.map((item, index)=>{
    return(
      <Pin
      ref={(e) => {
        inputRef.current[index] = e;
    }}
    key={index}
    maxChar={maxChar}


    backspace={(e) => backspace(e, index)}
    handleFocus={(e) => handleFocus(e, index)}
      />
    )
  })}
 
  </div>
  );
};

PinTab.propTypes = {
  length: propTypes.number.isRequired,
  maxChar: propTypes.number,
};
// Check length and maxChar props here

// Check length and maxChar props here
