const express =require("express")
// Cors is used for to connect frontend and backend it is an external middleware I have to install it first than only we can use  that.
const cors =require("cors")
const app = express()
const{timelogger}=require("./timelogger")
//before all the routes MW will be executed 
const {logger}=require("./logger")
// app.use(timelogger)
// app.use(logger)
app.use(cors())

/////--------Top to Bottom approach Follows---------/////
app.use((req,res,next)=>{
    console.log(1)
    next()
    console.log(2)
})
app.use((req,res,next)=>{
    console.log("3")
    next()
    console.log("4")
})


/////--------Top to Bottom approach Follows---------/////


//Three Types of MiddleWare 
//1.Inbuilt Middleware--->example->express.json that is used to parse your json data , express.router is also there
//2.Custom Middleware -->That we create in our file as per requiresment like in this app we have made timelogger and logger
//3.Community Middleware -->That are created by someone else and we can just use by installing them simply----->(multer,CORS)
// CORS ---> Cross Origin Resource Sharing 


app.get("/",(req,res)=>{
    console.log("home page will console due to next()")
    res.send("Home page")
})

app.get("/about",(req,res)=>{
    console.log("about page")
    res.send("about page")
})

app.get("/contact",(req,res)=>{
    console.log("Contact page")
    res.send("Contact page")
})

app.get("/data",(req,res)=>{
    console.log("data page")
    res.send("data page")
})

app.listen(8000,()=>{
    console.log("started")
})
