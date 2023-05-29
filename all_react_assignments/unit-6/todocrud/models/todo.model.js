const mongoose=require("mongoose");

const todoSchema=mongoose.Schema({
    task : {type  : String, required : true },
    Status : { type : Boolean, required : true }
},{
    versionKey : false 
})

const todoModel=mongoose.model("todo",todoSchema);

module.exports={
    todoModel
}