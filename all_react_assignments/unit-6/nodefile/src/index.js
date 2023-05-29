// import required modules

// export the server
// eg.module.exports = app;
// import required modules
const express=require("express");
const path=require("path");
const multer  = require('multer')
const app=express();
const PORT=8080;

app.use(express.json())
// jpg mein dega 
app.use(express.urlencoded({extended : false }))

app.set("view engine","ejs");
app.set("index",path.resolve("./index.html"))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
     return cb(null, './uploads')
    },
    filename: function (req, file, cb) {
     
     return cb(null, file.originalname )
    }
  })
  
  const upload = multer({ storage: storage })



app.get("/",(req,res)=>{
    res.status(200).send({ message: "welcome to server" })
})
 
app.post("/upload",upload.single("avatar"),(req,res)=>{
    
    res.status(200).send({
        message: "file uploaded successfully"
     })
})

app.listen(PORT,()=> console.log("Server started at port 8080"))
// export the server
module.exports = app;