
const express=require("express")
const router1=express.Router()
const fs=require("fs")


router1.get("/",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    res.status(200).send(data)
})


router1.post("/addStudent",(req,res)=>{
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
   const adddata = req.body
   data.students.push(adddata)
   fs.writeFileSync("./db.json",JSON.stringify(data),"utf-8")
   res.send(data.students)
})

router1.patch('/:rollNo',(req, res) => {
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    const student = data.students.find(s => s.roll_no === parseInt(req.params.rollNo));

    if (!student) {
        return res.status(404).json({message: 'Student not found.'});
    }

    student.name = req.body.name || student.name;
    student.location = req.body.location || student.location;
    student.course = req.body.course || student.course;
    student.roll_no=req.body.roll_no || student.roll_no;
    fs.writeFileSync("./db.json",JSON.stringify(data),"utf-8")
    res.json({message: 'Student updated successfully.'});
});

router1.delete("/:rollNo",(req,res)=>{
    const {rollNo}=req.params
    const data=JSON.parse(fs.readFileSync("./db.json","utf-8"))
    let length=data.students.length;
    let newArr=data.students.filter((el)=> el.roll_no != (+rollNo))
  
    data.students=newArr;

    if(data.students.length==length){
        res.status(400).send("Invalid argument")
    }
    else{
        fs.writeFileSync("./db.json",JSON.stringify(data))
        res.status(200).send(JSON.stringify(data.students))
    }

})
module.exports=router1