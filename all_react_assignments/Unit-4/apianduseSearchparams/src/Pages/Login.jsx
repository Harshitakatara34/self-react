import { useContext } from "react"
import { AuthContext } from "../Context.jsx/AuthContextProvider"



function Login(){
const {login,isAuth}=useContext(AuthContext)
    return (<> <h1>Login page</h1>
    
<button disabled={isAuth} onClick={login}>Login</button>


    </>
    )
}
export default Login