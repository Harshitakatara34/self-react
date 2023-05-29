import React, { useEffect, useRef, useState } from "react";
import { Pin } from "./Pin";
import PropTypes from 'prop-types';
export const PinTab = ({ length, maxChar, setOtp }) => {
 
  const [inputTabVal] = useState(new Array(length).fill(0));

  const  inputRef  = useRef([]);

  const forOnChange=(e,i)=>{
    //  console.log(e.target.value)
     inputTabVal[i]=e.target.value;

     if(i<length-1 && inputRef.current[i].value.length=== maxChar){
      inputRef.current[i+1].focus()
     }
     console.log(inputRef.current[i].value.length)
     setOtp(inputTabVal.join(""))
  }

  const backSpaceChange = (e,i)=>{
     console.log(e.target.value)
     inputTabVal[i]=e.target.value;

     if(i>0 && inputRef.current[i].value.length === 0 ){
      inputRef.current[i-1].focus()
     }
     setOtp(inputTabVal.join(""))
  }

  const handlePaste=(e)=>{
    console.log(e.clipboardData.getData("text"))
       let data= e.clipboardData.getData("text");

       // 1 2 3 4 5 6 7 8 9 
       let index=0;
       for(let i=0; i<length * maxChar; i+=maxChar){
            let str =  data.slice(i, i + maxChar) // 0 2  01
            inputTabVal[index] = str;
            inputRef.current[index].value=str;

            if(index < length){
               index++;
            }
       }
          setOtp(inputTabVal.join(""))
  }

  useEffect(() => {
    console.log(inputRef.current[0].focus())
  }, [ ])
  
  return <div data-testid="pin-tab" onPaste={handlePaste}>{/* Add Pin component here  */}
     {
         new Array(length).fill(0).map((item , i )=> (
          <Pin 
           key={i}
           maxChar={maxChar}
        
           ref={(val)=> {
            inputRef.current[i] = val ;
            // console.log(inputRef.current[i])
            }}

            forOnChange={(e)=> forOnChange(e,i)}
            backSpaceChange={(e)=> backSpaceChange(e,i)}
          />
        ))
      }
  </div>;
};

// Check length and maxChar props here
PinTab.propTypes = {
  length : PropTypes.number.isRequired ,
  maxChar : PropTypes.number
};