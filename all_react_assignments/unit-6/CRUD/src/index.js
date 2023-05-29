//  import required modules from nodejs and build the server
const express=require("express")
const router=require("./controllers/todo.controller")

const app=express()
app.use(express.json());
app.use("/", router);

// app.listen(8080,()=>{
//     console.log("server has started");
// })

// export the server
// eg.module.exports = app;
module.exports=app;