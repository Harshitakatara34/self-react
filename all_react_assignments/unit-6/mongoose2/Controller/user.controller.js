
const express=require("express")
const{UserModal}=require("../Model/user.model")
const userRoute=express.Router()
// userRoute.get("/",(req,res)=>{
//     res.send("home")
// })
// as long as your server is running it hould be connected to database
// create

userRoute.post("/adduser",async(req,res)=>{
    try{
        const user=new UserModal(req.body)
        await user.save()
            const data=req.body
        res.send("added")
    }
   catch(err){
    console.log(err)
    res.send("error")
   }
})

//Read
userRoute.get("/",async(req,res)=>{
    const{sort}=req.query
    const query=req.query
    try{
        let users;
        if(sort==="desc"){
            users=await UserModal.find().sort({age:-1})
        }
         users=await UserModal.find(query)
        res.send(users)
    }
   catch(err){
    console.log(err)
    res.send("error")
   }
})

//Edit/Update
userRoute.patch("/edit/:id",async(req,res)=>{
    const{id}=req.params
    try{
       await UserModal.findByIdAndUpdate({_id:id},req.body)
        res.send("patched")
    }
catch(err){
    res.send(err)
}
})

//Delete
userRoute.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params
try{
    await UserModal.findByIdAndDelete({_id:id})
    res.send("deleted")
}
catch(err){
res.send("eror")
}
})
module.exports={
    userRoute
}