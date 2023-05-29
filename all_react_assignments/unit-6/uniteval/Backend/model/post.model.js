const mongoose=require("mongoose")
const PostSchema=mongoose.Schema({
    title:{type:String,required:true},
   body:{type:String,required:true},
    device:{type:String,required:true},
    authorId:{type:String,required:true},
    authorname:{type:String,required:true}
})


const PostModel=mongoose.model("posts",PostSchema)



module.exports={
PostModel
}