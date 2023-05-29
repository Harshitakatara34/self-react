import { useState,useEffect,useContext} from "react"
import { Link,useNavigate,useSearchParams} from "react-router-dom";

const getData=(url)=>{
    return fetch(url).then((res)=>res.json())
}

const getCurrentPage=(pages)=>{
let PageNumber=Number(pages)
return PageNumber
}
function User(){
const [loading,setLoading]=useState(false)
const [err,setErr]=useState(false)
const [user,setUser]=useState([])
let [searchParams,setSearchParams]=useSearchParams()
const [pages,setPages]=useState(getCurrentPage(searchParams.get("pages")))


const navigate=useNavigate();
const fetchNAdUpdateData=(pages)=>{
    setLoading(true)
    getData(`https://reqres.in/api/users?page=${pages}`).then((res)=>{
        setUser(res)
        console.log(res)
    }).catch((err)=>{
        console.log(err)
        setErr(true)
    }).finally(()=>setLoading(false))
}
useEffect(()=>{
fetchNAdUpdateData(pages)
},[pages])
useEffect(()=>{
    setSearchParams({pages:pages})
    },[pages])
const handleChange=(val)=>{
setPages(val+pages)
}

    return loading?(<h1>...Loading</h1>)
    :err?(<h1>some thing went wrong</h1>):(<>
    <h1>User page</h1>
    {user?.data?.map((ele)=>(
        <div key={ele.id} style={{padding:"10px",
        margin:"10px",border:"1px solid blue"}}>
            <img src={ele.avatar} alt="" />
       <p>{`${ele.first_name} ${ele.last_name}`}</p>
       <h4>{ele.email}</h4>
       <Link to={`/user/${ele.id}`}>More Info</Link>
  
        </div>
      
    ))}
    {/* usenavigate dot allow to open in new window but link allow it */}
     <button onClick={()=>navigate("/")}>Go To Home Page With useNavigater</button>
     <Link to="/"> <button>Go To Home page with Link</button></Link>
     <br />
     <br />
     <button disabled={pages==1} onClick={()=>handleChange(-1)}>Previous</button>
     <button>{pages}</button>
     <button onClick={()=>handleChange(+1)}>Next</button>
    </> 
    )
}
export default User
// https://reqres.in/api/users