const express=require("express")
const {timeLogger}=require("./middleware/timeLogger.middleware")
const {logger}=require("./middleware/logger.middleware")
const {addStudentCode}=require("./middleware/addstudentcode.middleware")
const fs=require("fs") 
const app=express()

app.use(express.json())
//middleware
// app.use((req,res,next)=>{
    //1.
    // console.log("Hello from MW");
    // next()
    //2.private route
    // if(req.url==='/about'){
    //     next()
    // }else{
    //     res.send("You dont have access to this routes")
    // }
    //activity1
// app.use(timeLogger)

//2.activity 2
// app.use(logger)

//phase 3 if we have multiple middleware
app.use((req,res,next)=>{
    console.log(1);
    next()
    console.log(2);
})
app.use((req,res,next)=>{
    console.log(4);
    next()
    console.log(5);
})
app.get('/',(req,res)=>{
    console.log("home page");
    res.send("home page")
})

app.get('/about',(req,res)=>{
    console.log("about page");
    res.send("about page")
})
app.get('/contacts',(req,res)=>{
    console.log("contact page");
    res.send("contact page")
})
app.get('/data',(req,res)=>{
    let data=fs.readFileSync("./db.json","utf-8")

    res.send(data)
})

app.get('/search',(req,res)=>{
    let {love}= req.query

console.log(req.query);
    res.send(`This is data of avatar Movie ${love} `)
})

app.get('/wheather',(req,res)=>{
    let {city}= req.query

console.log(req.query);
//read the data
const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    const temp=data.cities[city]
    res.send(`Temperture of ${city} is ${temp} `)
})

app.get('/students/:rollno',(req,res)=>{
    //:rollno is veriable here
    const {rollno}=req.params
    console.log(req.params
        );
    res.send(`Student Rolll No. ${rollno} `)
})
// app.use(addStudentCode)
app.post("/register",(req,res)=>{
    let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    data.students.push(req.body)
    fs.writeFileSync("./db.json",JSON.stringify(data))
    res.send("New student hs been added to the db ,this student clear msat")
})
app.listen(8080,()=>{
    console.log('Running the server at 8080');
})

