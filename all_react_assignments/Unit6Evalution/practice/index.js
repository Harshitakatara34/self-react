// Do not forget to export the server.
// e.g => module.exports = server;

const express=require("express")
const app=express()
const fs=require("fs")
const logger=require('./routes/logger')

app.use(express.json())
app.use(logger)

const validator=(req,res,next)=>{
  const {role,pass}=req.query

  if((req.method==="PATCH"||req.method==="DELETE")&&
  role==="leader"&&pass==="4534"){
    next()
  }else{
    res.status(401).send("You are not authorised")
  }
}

app.get("/",(req,res)=>{
  res.send(
    `<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>`

  )
})

app.post("/marvel/addnew",(req,res)=>{
  const {id,name,alias,power_level,role}=req.body
const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

data.marvel.push(req.body)
fs.writeFileSync("./db.json",JSON.stringify(data))

res.send(`New superhero has been added`)
})

app.post("/dc/addnew",(req,res)=>{
  const {id,name,alias,power_level,role}=req.body
const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

data.marvel.push(req.body)
fs.writeFileSync("./db.json",JSON.stringify(data))

res.send(`New superhero has been added`)
})

app.get("/marvel",(req,res)=>{
  const {alias}=req.query

  let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
  let filteredData=null

  if(alias){
    filteredData=data.marvel.find((item)=>item.alias===alias)
  }
  if(filteredData){
    res.send(filteredData)
  }
  else{
    res.send(data.marvel)
  }
})

app.get(" /dc",(req,res)=>{
  const {alias}=req.query

  let data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
  let filteredData=null

  if(alias){
    filteredData=data.dc.find((item)=>item.alias===alias)
  }
  if(filteredData){
    res.send(filteredData)
  }
  else{
    res.send(data.dc)
  }
})

app.get("/marvel/:id",(req,res)=>{
  const {id}=req.params
const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

data.marvel.map((item)=>{
  item.id===Number(id)
  res.send(item)
})
})

app.get("/dc/:id",(req,res)=>{
  const {id}=req.params
const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

data.dc.map((item)=>{
  item.id===Number(id)
  res.send(item)
})
})

app.get("/winningteam",(req,res)=>{
  const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
  let a=0
  let b=0

  data.marvel.map((item)=>{
    a=a+item.power_level
  })

  data.dc.map((item)=>{
    b=b+item.power_level
  })

  if(a>b){
    res.send(data.marvel)
  }else{
    res.send(data.dc)
  }
})

app.patch("/marvel/update/:id", validator, (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  const { id } = req.params;
  let updatedata = data.marvel.find((s) => s.id === +id);

  updatedata.name = req.body.name || updatedata.name;
  updatedata.alias = req.body.alias || updatedata.alias;
  updatedata.power_level = req.body.power_level || updatedata.power_level;
  updatedata.role = req.body.role || updatedata.role;
  fs.writeFileSync("./db.json", JSON.stringify(data), "utf-8");
  res.send("Patched Character Details");
});


app.patch("/dc/update/:id", validator, (req, res) => {
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  const { id } = req.params;
  let updatedata = data.dc.find((s) => s.id === +id);

  updatedata.name = req.body.name || updatedata.name;
  updatedata.alias = req.body.alias || updatedata.alias;
  updatedata.power_level = req.body.power_level || updatedata.power_level;
  updatedata.role = req.body.role || updatedata.role;
  fs.writeFileSync("./db.json", JSON.stringify(data), "utf-8");
  res.send("Patched Character Details");
});

app.delete("/marvel/delete/:id", validator, (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let length = data.marvel.length;
  let newarr = data.marvel.filter((el) => el.id != +id);
  data.marvel = newarr;
  if (data.marvel.length === length) {
    res.status(400).send("Invalid argument");
  } else {
    fs.writeFileSync("db.json", JSON.stringify(data));
    res.send("Deleted Character Details");
  }
});

app.delete("/dc/delete/:id", validator, (req, res) => {
  const { id } = req.params;
  const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
  let length = data.dc.length;
  let newarr = data.dc.filter((el) => el.id != +id);
  data.dc = newarr;
  if (data.marvel.length === length) {
    res.status(400).send("Invalid argument");
  } else {
    fs.writeFileSync("db.json", JSON.stringify(data));
    res.send("Deleted Character Details");
  }
});

app.listen(8080, () => {
  console.log("Server is Running");
});
module.exports = app;