const express=require("express")
const { record } = require("../middlewares/record.middleware")
const { updateLimiter } = require("../middlewares/updateLimiter.middleware")

const { UserModel } = require("../models/user.model")

const patchRoute=express.Router()
patchRoute.use(updateLimiter)
// patchRoute.use(record)
patchRoute.patch("/update/:id",record,async(req,res)=>{
    let id=req.params.id
    res.send(id)
    try {
        await UserModel.findByIdAndUpdate({"_id":id},req.body)
   res.send({"msg":"player is updated"})
   
    } catch (error) {
        res.send({"err":"Something went wrong"})
    }
})

module.exports={
    patchRoute
}