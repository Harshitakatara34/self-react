const mongoose=require("mongoose")
const express=require("express")
require("dotenv").config()
const { connection } = require("./controller/connection")
// const { UserModel } = require("./model/user.model")
const { route } = require("./routes/user.route")
const { auth } = require("./Middlewares/user.middleware")
const { postroute } = require("./routes/post.route")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use(auth)
app.use("/users",route)
app.use("/posts",postroute)
app.listen(process.env.port,async()=>{
    try {
        await connection
console.log("connected to 8080")
    } catch (error) {
        console.log(error)
    }
console.log("connected to db")
})



