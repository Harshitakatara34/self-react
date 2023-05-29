const express=require("express")
const { post } = require("../Middlewares/post.middleware")

const { PostModel } = require("../model/post.model")
const postroute=express.Router()

postroute.get("/",async(req,res)=>{
    
    try {
        const post=await PostModel.find({authorId:req.body.authorId})
        res.send({"msg":post})
    } catch (error) {
        res.send({"msg":"error"})
    }
})

postroute.post("/create",post,async(req,res)=>{
    try {
        const{title,body,device}=req.body
        const post=new PostModel(req.body)
        await post.save()
        res.send({"msg":post})
    } catch (error) {
        res.send({"msg":"error"})
    }
})



postroute.patch("/update/:id",async(req,res)=>{
    const{id}=req.params
    try {
        const{authorId}=req.body
        const post=await PostModel.findOne({_id:id},authorId)
        if(!post){
            return res.send({"errror":"not found"})
        }
        await PostModel.findByIdAndUpdate(id)
        res.send({"msg":"updated"})
    } catch (error) {
        res.send({"msg":"error"})
    }
})


postroute.delete("/delete/:id",async(req,res)=>{
    const{id}=req.params
    try {
        const{authorId}=req.body
        const post=await PostModel.findOne({_id:id},authorId)
        if(!post){
            return res.send({"errror":"not found"})
        }
        await PostModel.findByIdAndDelete(id)
        res.send({"msg":"deleted"})
    } catch (error) {
        res.send({"msg":"error"})
    }
})



module.exports={
    postroute
}