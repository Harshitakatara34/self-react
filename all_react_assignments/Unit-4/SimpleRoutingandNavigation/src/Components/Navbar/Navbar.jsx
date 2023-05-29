import React from 'react'
import { Link } from 'react-router-dom'



const links=[
  {path:"/",title:"Home"},
  {path:"/contact",title:"Contact"},
  {path:"/about-us",title:"About"},
  {path:"/services",title:"Services"},
  {path:"/login",title:"Login"}
]




function NavBar() {
  return (
    <>
    {links.map((ele)=>{
      return<Link key={ele.path} to={ele.path}>{ele.title}</Link>
    })}
      {/* add your links */}
    </>
  )
}

export default NavBar
