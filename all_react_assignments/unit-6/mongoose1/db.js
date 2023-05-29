const mongoose =require("mongoose")

const main=async ()=>{
    // if there is error it will show started 
    try{
        //database name
        const connection =await mongoose.connect("mongodb://127.0.0.1:27017/LearningMongoose")
console.log("started")
// For inserting only one document as modal is a constructor 
const user=new UserModal({
    name:"h",
    age:5,
    city:"a"
})
// for inserting many item
await UserModal.insertMany({name:"mohit",age:22,city:"sasni"},{name:"mohit",age:22,city:"sasni"})
//for disconnect
connection.disconnect()
console.log("disconnected")
    } catch(err){
console.log(err)
    }

}
main()
// if we will not use async await then it will show the started value if our given connect is wrong also it will give the write statement that is written in console so for that we are using async await here 
//document will be our final product
//we can't directly create document we want some mould and in this case that is modal
//schema(structure)
// structure--->Modal---->document


// when there is a change in a document then _v value will increase by 1



//IN MONGOOSE
// 1.You can't create document directly
//2.You can't create Modal directly

//Schema
const userSchema=mongoose.Schema({
    name:{type:String,require:true},
    age:{type:Number,require:true},
    city:String,
},{
    // it will not show version
    versionKey:false
})
//Modal
const UserModal=mongoose.model("user",userSchema)
// interminal it will show users because mongoose will automaticall put one extra s because collection is a group of different document




// In case of mongoose there is not insertone exist