const express=require("express")
const noterouter=express.Router()
const  {Notesmodel}=require("../Model/note.model")

noterouter.post("/create",async(req,res)=>{
    try{
        const note=new Notesmodel(req.body)
       await note.save()
        res.send("added")
    }
    catch(err){
console.log(err)
    }
})

noterouter.get("/create",async(req,res)=>{
    try{
        const note=await Notesmodel.find()
        res.send(note)
    }
    catch(err){
console.log(err)
    }
})



noterouter.patch("/update/:noteID",async(req,res)=>{
    const{noteID}=req.params
    try {
        await Notesmodel.findByIdAndUpdate({_id:noteID},req.body)
        res.send("patched")
    } catch (error) {
        res.send(err)
    }
})



noterouter.delete("/delete/:noteID",async(req,res)=>{
    const{noteID}=req.params
    try {
        await Notesmodel.findByIdAndDelete({_id:noteID})
        res.send("deleted")
    } catch (error) {
        res.send(err)
    }
})















module.exports={
    noterouter
}