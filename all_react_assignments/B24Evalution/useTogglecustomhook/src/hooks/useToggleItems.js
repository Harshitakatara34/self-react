import { useState } from "react";

const useToggleItems = (initialValue, i=0) => {
    const [state, setState]= useState(i);

    const toggleState=()=>{
              if(state>=initialValue.length-1){
            setState(0)
        }else{
            setState(state+1)  
        }
    }
    return [initialValue[state], toggleState];
};

export { useToggleItems };
