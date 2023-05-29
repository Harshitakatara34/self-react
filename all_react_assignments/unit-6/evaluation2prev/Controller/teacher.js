const express=require("express")
const router2 = express.Router()

router2.get("/",(req,res)=>{
    res.send("khushi")
})

module.exports=router2