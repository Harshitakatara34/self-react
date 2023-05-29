import {useState} from "react"
const useToggleItems = (initialvalue,i=0) => {

    const [state,setState]=useState(i);

    const fun=()=>{
        if(state>=initialvalue.length-1){
            setState(0)
        }else{
            setState(state+1)
        }
    }
    return [initialvalue[state],fun];
};

export { useToggleItems };