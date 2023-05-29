const mongoose=require("mongoose")




// we are creating here schema(structue)
const userSchema=mongoose.Schema({
    name:{type:String,required:true},
   password:{type:String,required:true}
},{
    // it will not show version
    versionKey:false
})





//Modal(sancha)
const UserModal=mongoose.model("user",userSchema)
// interminal it will show users because mongoose will automaticall put one extra s because collection is a group of different document


module.exports={
   
    UserModal
}