import { useParams } from "react-router-dom"
import { useState,useEffect} from "react"
// let res={
//     data: 
//         {
//         id: 1,
//         email: "george.bluth@reqres.in",
//         first_name: "George",
//         last_name: "Bluth",
//         avatar: "https://reqres.in/img/faces/1-image.jpg",
//         },
//         support: {
//             url: "https://reqres.in/#support-heading",
//             text: "To keep ReqRes free, contributions towards server costs are appreciated!"
//             }
    
// }


const getData=(url)=>{
    return fetch(url).then((res)=>res.json())
}


function SingleUserPage(){
const {user_id}=useParams();
const [loading,setLoading]=useState(false)
const [err,setErr]=useState(false)
const [user,setUser]=useState([])
// console.log(val)
const fetchNAdUpdateData=()=>{
    setLoading(true)
    getData(`https://reqres.in/api/users/${user_id}`).then((res)=>{
        setUser(res)
        console.log(res)
    }).catch((err)=>{
        console.log(err)
        setErr(true)
    }).finally(()=>setLoading(false))
}
useEffect(()=>{
    fetchNAdUpdateData()
    },[])
    
    return loading?(<h1>...Loading</h1>)
    :err?(<h1>some thing went wrong</h1>):(
    <div style={{border:"1px solid red",padding:"10px",margin:"10px"}}>
        <img src={user?.data?.avatar} />
        <h4>{`${user?.data?.first_name} ${user?.data?.last_name}`}</h4>
        <h5>{user?.data?.email}</h5>
        <p>Id:{user?.data?.id}</p>
    </div>
    
)
}
export default SingleUserPage