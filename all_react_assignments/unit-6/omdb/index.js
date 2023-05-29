const express=require("express");
const app=express();
const {connection,MovieModel}=require("./db");
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Welcome to OMDB Api !");
})

app.post("/addmovie",async(req,res)=>{
    const movie=MovieModel(req.body);
    await movie.save();
      res.send("New movie has been added !");
})

app.get("/movie",async(req,res)=>{
    const {sort} = req.query;
    const query=req.query.q;
    try {
        let movie;
        if(sort==="asc"){
            movie=await MovieModel.find().sort({Year : 1 })
        }
        else if(sort==="desc"){
            movie=await MovieModel.find().sort({Year : -1 })
        }
        else if(query){
            movie=await MovieModel.find({"Title":{"$regex":query,"$options":"i"}})
        }
        else{
            movie=await MovieModel.find(query);
        }
        res.send(movie);

    } catch (error) {
         console.log("Can not get movie");
        console.log(err);
    }
})

app.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params;

    try {
        await MovieModel.findByIdAndDelete({_id : id });
        res.send(`Movie with id ${id} has been deleted successfully !`)
    } catch (error) {
        res.send(error);
    }
})

app.patch("/update/:id",async(req,res)=>{
    const {id}=req.params;
    try {
        await MovieModel.findByIdAndUpdate({_id : id},req.body);
        res.send("Updated Successfully");
    } catch (error) {
        res.send("err");
    }
})

app.listen(8080, async()=>{
    try {
        await connection
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error in Connecting to DB")
        console.log(error);
    }
    console.log("Server is Started on PORT 8080 !");
})