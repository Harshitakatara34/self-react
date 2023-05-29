const express=require("express")
const app=express()
app.use(express.json())
require("dotenv").config()
const{connection}=require("./Contollers/db")
const{ getRoute}=require("./routes/get.route")
const {postroute}=require("./routes/post.route")
const{patchRoute}=require("./routes/patch.route")
const { deleteRoute } = require("./routes/delete.route")
app.use("/player",deleteRoute)
app.use("/player",patchRoute)
app.use("/addplayer",postroute)
app.use("/",getRoute)

app.get("/",(req,res)=>{
    res.send("harshita")
})
app.listen(process.env.port,async()=>{
try {
    await connection
    console.log("connected to db")
} catch (err) {
    console.log("something went wrong")
    console.log(err)
}
console.log("running")
})