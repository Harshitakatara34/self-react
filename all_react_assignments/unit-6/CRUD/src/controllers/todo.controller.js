const express=require("express");
const fs=require("fs");

const router=express.Router();

router.get("/",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))

    res.status(200).send(JSON.stringify(data.todos));
})

router.post("/",(req,res)=>{
    const data = JSON.parse(fs.readFileSync("./db.json","utf-8"))

    data.todos.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(data))

    res.status(200).send(JSON.stringify(data.todos));
})
 
router.put("/:id" , (req,res) => {
    const {id} = req.params
  
    const data = JSON.parse(fs.readFileSync("./db.json" , "utf-8"))
    // if(isNaN(id)){
    //   res.status(400).send("Invalid argument")
    // }
    for(let i=0; i<data.todos.length; i++){
      if(data.todos[i].id==(+id)){
          data.todos[i] = req.body
         continue;
      }
      else{
          res.status(400).send("Invalid argument")
      }
  
    }
    fs.writeFileSync("./db.json" , JSON.stringify(data))
    res.status(200).send(JSON.stringify(data.todos))
  })
router.delete("/:id",(req,res)=>{
    const {id}=req.params
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let length=data.todos.length;
    let newArr=data.todos.filter((el)=> el.id != (+id))
  
    data.todos=newArr;

    if(data.todos.length==length){
        res.status(400).send("Invalid argument")
    }
    else{
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.status(200).send(JSON.stringify(data.todos))
    }

})


module.exports = router;