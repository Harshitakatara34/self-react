const express = require("express")
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.end("hello")
})

app.post("/adddata",(req,res)=>{
    res.send("data")
   console.log(req.body)
})
app.listen(8080)