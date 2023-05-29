import {useState,useEffect} from "react"
const useOnlineStatus = () => {
    const [state,setState]=useState()
    useEffect(()=>{
if(navigator.onLine){
    setState(true)
}else{
    setState(false)
}
    },[state])
    return state
};

export default useOnlineStatus;



