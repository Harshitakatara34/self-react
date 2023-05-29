import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Context.jsx/AuthContextProvider";

const links=[
    { path:"/",title:"Home"},
    { path:"/about",title:"About"},
    { path:"/contact",title:"Contact"}
    ,{ path:"/user",title:"User"},
    {   path:"/login",title:"Login"},
]


function Navbar(){
const activeLinkStyle={textDecoration:"none",color:"red"};
const defaultLinkStyle={textDecoration:"none",color:"teal"};
const {isAuth}=useContext(AuthContext)
return (
    <div style={{display:"flex",alignItems:"center",
    justifyContent:"space-around", 
    borderBottom: "solid 1px",
     paddingBottom: "1rem"}}>
        {links.map(({path,title})=>(
            // <Link key={path} to={path}>
            // {title}
            // </Link>
            <NavLink style={({isActive})=>{
                return isActive?activeLinkStyle:defaultLinkStyle
            }} key={path} to={path}>
                 {title}
            </NavLink>
        ))}
        <p>Is Authenticated:{isAuth?"Yes":"No"}</p>
     {/* <Link to="/" state={{textDecoration:"none"}}>Home</Link>
     <Link to="/about">About</Link>
     <Link to="/contact">Contact</Link>
     <Link to="/user">User</Link>
     <Link to="/login">Login</Link> */}
    </div>
)
}
export default Navbar