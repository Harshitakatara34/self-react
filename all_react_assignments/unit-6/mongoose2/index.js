const express=require("express")
const { userRoute } = require("./Controller/user.controller")
const{connection}=require("./db")
const app=express()
app.use(express.json())
app.use("/user",userRoute)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected")
    }

  catch(err){
console.log(err)
console.log("something went wrong")
  }
    console.log("s")
})