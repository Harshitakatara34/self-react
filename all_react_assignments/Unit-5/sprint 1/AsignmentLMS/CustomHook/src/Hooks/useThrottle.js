import React,{useRef} from 'react'

const useThrottle = (func,delay) => {
    let {current:wait}=useRef(false)

  return ()=>{
    if(wait) return;

    
    func()
    wait=true;

    setTimeout(() => {
        wait=false;
    },delay);
  }
}

export default useThrottle
