const express=require("express");
const {connection}=require("./db");
const {todoModel}=require("./models/todo.model")
const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page");
})
 
app.post("/addtodo", async(req,res)=>{
    const todo= todoModel(req.body);
    await todo.save()
   res.send("New Todo has been added !")
})

app.patch("/update/:id",async(req,res)=>{
     const {id}=req.params;
     try {
         await todoModel.findByIdAndUpdate({_id : id },req.body);
         res.send("Updated Successfully !")
     } catch (error) {
        console.log(error)
     }
})

 
app.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params
try{
    await todoModel.findByIdAndDelete({_id:id})
    res.send("deleted")
}
catch(err){
res.send("eror")
}
})

app.get("/todo",async(req,res)=>{
 
    try{
     const users=await todoModel.find()
     res.send(users)
    } 
     catch (error) {
        console.log("can not get todo ")
        console.log(error);
    }
})

app.listen(8000,async()=>{
    try {
        await connection
        console.log("connected to DB");
    } catch (error) {
        console.log("error while connecting to DB");
        console.log(error);
    }
    console.log("Server Started at Port 8000 !");
})