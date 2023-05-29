const express=require("express")
const router1=require("./Controller/student.js")
const router2=require("./Controller/teacher.js")

const app=express()
app.use(express.json())
app.use("/teachers",router2)
app.use("/students",router1)


app.listen(8000,()=>{
    console.log("s")
})


module.exports=app