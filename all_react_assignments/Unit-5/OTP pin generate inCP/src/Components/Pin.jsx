import React, { forwardRef } from "react";
import PropTypes from "prop-types";
export const Pin = forwardRef(({ maxChar ,forOnChange , backSpaceChange }, ref ) => {

 const  handleKeyUp=(e)=>{
    // console.log(e.keyCode);

    if(e.keyCode==8){
      backSpaceChange(e);
    }else{
      forOnChange(e);
    }
 }

  return <input data-testid="pin-input" 
    maxLength={maxChar}
    ref={ref}
     onKeyUp={handleKeyUp}
  />;
});

// Check maxChar prop here
Pin.propTypes = {
  maxChar : PropTypes.number.isRequired
};