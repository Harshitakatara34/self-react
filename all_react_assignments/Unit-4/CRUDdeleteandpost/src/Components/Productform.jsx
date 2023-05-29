import {useState} from "react"
var initialstate= {
  title:"",
  price:"",
  imageUrl:"",
}
const Productform=({handleFormSubmit})=>{
   
      const[formstate,setformstate]=useState(initialstate)
      const handleChange=(e)=>{
        const{name,value}=e.target
console.log(formstate)
        setformstate({...formstate,[name]:value})
          }
          console.log(formstate)
          const handleSubmit=(e)=>{
            e.preventDefault();
            handleFormSubmit(formstate)
            console.log("fdajsgfdFDG")
           
          }
          console.log(formstate)
          const {title,price,imageUrl}=formstate
          return  <div id="formcreation">
            <h1>Create Product</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input  name="title" type="text" value={title} onChange={handleChange} placeholder="enter product title"/>
              <br/>
              <br/>
          Price:
          <input  name="price"type="text" value={price} onChange={handleChange}placeholder="enter product Price"/>
          <br/>
          <br/>
          imageUrl:
          <input  name="imageUrl"type="text" value={imageUrl} onChange={handleChange} placeholder="enter product imageurl"/>
          <br/>
              <br/>
              <button>Submit Product</button>
            </label>
            </form>
            </div>
}

export default Productform