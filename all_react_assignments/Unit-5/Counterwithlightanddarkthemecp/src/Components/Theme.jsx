import { handleTheme } from "../Redux/action"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { themeReducer } from "../Redux/themeReducer"
export const Theme=()=>{
    const {theme}=useSelector(state=>state.themeReducer)
    const dispatch=useDispatch()
    const handlelight=()=>{
    dispatch(handleTheme("light"))
    }
    const handledark=()=>{
dispatch(handleTheme("dark"))
    }
    return(
        <>
        <button disabled={theme==="light"} onClick={handlelight}>Switch to Light</button>
        <button disabled={theme==="dark"} onClick={handledark}>Switch to Dark</button></>
    )
}