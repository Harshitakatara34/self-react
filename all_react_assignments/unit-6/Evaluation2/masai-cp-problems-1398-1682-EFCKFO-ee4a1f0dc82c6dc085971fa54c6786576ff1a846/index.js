const express=require("express")
const app=express()
app.use(express.json())
// const home=express.Router()
const fs=require("fs")
// app.use("/",home)
const {logger}=require("./middleware/logger")
const{validator}=require("./middleware/validator.js")
app.use(logger)
app.use(validator)



app.get('/', (req, res) => {
  res.send('<h1>Welcome new Team Member, You are about to be the part of best Superhero Team Out there!!!</h1>');
});

app.post('/marvel/addnew', (req, res) => {
  const newData =  req.body
  const db = JSON.parse(fs.readFileSync('db.json'));
  db.marvel.push(newData);
  try {
    fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
    res.send('New superhero has been added');
  } catch (error) {
    res.send(error);
  }
});

app.post('/dc/addnew', (req, res) => {
  const newData =req.body
  const db = JSON.parse(fs.readFileSync('db.json'));
  db.dc.push(newData);
  try {
    fs.writeFileSync('db.json', JSON.stringify(db, null, 2));
    res.send('New superhero has been added');
  } catch (error) {
    res.send(error);
  }
});

app.get('/marvel', (req, res) => {
  const db = JSON.parse(fs.readFileSync('./db.json',"utf-8"));
  if (req.query.alias) {
    const character = db.marvel.find((c) => c.alias === req.query.alias);
    res.send(character);
  } else {
    res.send(db.marvel);
  }
});

app.get('/dc', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json'));
  if (req.query.alias) {
    const character = db.dc.find((c) => c.alias === req.query.alias);
    res.send(character);
  } else {
    res.send(db.dc);
  }
});

app.get('/marvel/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json'));
  const character = db.marvel.find((c) => c.id === parseInt(req.params.id));
  res.send(character);
});

app.get('/dc/:id', (req, res) => {
  const db = JSON.parse(fs.readFileSync('db.json'));
  const character = db.dc.find((c) => c.id === parseInt(req.params.id));
  res.send(character);
});
app.get('/winningTeam', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./db.json', 'utf-8'));
    const marvelPowerLevel = db.marvel.reduce((sum, c) => sum + c.power_level, 0);
    const dcPowerLevel = db.dc.reduce((sum, c) => sum + c.power_level, 0);
    if (marvelPowerLevel > dcPowerLevel) {
      res.send(db.marvel);
    } else {
      res.send(db.dc);
    }
  });
  app.patch("/marvel/update/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const { id } = req.params;
    const edited = data.marvel.find((s) => s.id === +id);
    if (!edited) {
      res.json({ message: "invalid" });
    }
    edited.name=req.body.name||edited.name;
    edited.alias=req.body.alias||edited.alias;
    edited.power_level=req.body.power_level||edited.power_level;
    edited.role=req.body.role||edited.role
    fs.writeFileSync("./db.json", JSON.stringify(data), "utf-8");
    res.send(`Patched Character Details`);
  });
  app.patch("/dc/update/:id", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));
    const { id } = req.params;
    const edited = data.dc.find((s) => s.id === +id);
    if (!edited) {
      res.json({ message: "invalid" });
    }
    edited.name=req.body.name||edited.name;
    edited.alias=req.body.alias||edited.alias;
    edited.power_level=req.body.power_level||edited.power_level;
    edited.role=req.body.role||edited.role
    fs.writeFileSync("./db.json", JSON.stringify(data), "utf-8");
    res.send(`Patched Character Details`);
  });
  app.delete("/marvel/delete/:id",(req,res)=>{
    const {id}=req.params
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let length=data.marvel.length;
    let newArr=data.marvel.filter((el)=> el.id != (+id))
  
    data.marvel=newArr;

    if(data.marvel.length==length){
        res.status(400).send("Invalid argument")
    }
    else{
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.send(`Deleted Character Details`)
    }

})
app.delete("/dc/delete/:id",(req,res)=>{
    const {id}=req.params
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let length=data.dc.length;
    let newArr=data.dc.filter((el)=> el.id != (+id))
  
    data.dc=newArr;

    if(data.dc.length==length){
        res.status(400).send("Invalid argument")
    }
    else{
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.send(`Deleted Character Details`)
    }

})
  
// app.listen(8000,()=>{
//     console.log("s")
// })
module.exports=app;