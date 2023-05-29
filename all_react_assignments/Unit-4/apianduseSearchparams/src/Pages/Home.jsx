import { useContext } from "react"
import { AuthContext } from "../Context.jsx/AuthContextProvider"

function Home(){
  const {isAuth,logout}=useContext(AuthContext)
    return (
      <>
      <h1>Home Page</h1>
      <button disabled={!isAuth} onClick={logout}>Logout</button></>
    )
  }
  export default Home