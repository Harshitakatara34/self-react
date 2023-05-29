//  import required modules from nodejs and build the server
 
const express=require("express");
const fs=require("fs");
const app=express();
 
const {validatorfunction}=require("./middlewares/validator")
app.use(express.json())
app.use(validatorfunction);

app.post("/",(req,res)=>{
    res.status(200).send("data received")
})
// export the server
// app.listen(8000,()=>{
//     console.log("Server is running at port 8000 !")
// })
 

module.exports=app;