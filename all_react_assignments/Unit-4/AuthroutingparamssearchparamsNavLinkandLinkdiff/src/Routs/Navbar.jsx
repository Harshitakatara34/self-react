import { Link, NavLink } from "react-router-dom";
import {useContext} from "react"
import { AuthContext } from "../Context/AuthContext";
function Navbar(){
    const {isAuth}=useContext(AuthContext)
    console.log(isAuth)
    const links=[
        {path:"/",title:"Home"},
    {path:"/about",title:"About"},
    {path:"users",title:"Users"},
    {path:"contact",title:"Contacts"},
    {path:"login",title:"Login"},
    ]
  return  <div style={{backgroundColor:"black",height:"100px"}}>
    <div style={{paddingTop:"15px",display:"flex",justifyContent:"space-around",alignItems:"center",fontSize:"30px",}}>
    {links.map(({path,title})=>{
    return <NavLink style={({isActive})=>{
        return isActive?{textDecoration:"none",color:"white"}:{textDecoration:"none",color:"teal"}
     }}key={path}to={path}>{title}</NavLink>
    })}
  <p style={{color:"teal"}}>Is User Authenticated:{isAuth?"Yes":"No"}</p>
    </div>
    </div>
}
export default Navbar
// by Link tag
// return <Link key={path} to={path}>
// {title}
// </Link>