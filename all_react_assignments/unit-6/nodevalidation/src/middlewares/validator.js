const fs = require("fs");
function CheckNuminArray(arr){
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i]==="number"){
            return true;
        }
    }
    return false;
}
// make the validator function and export it.
const validatorfunction =(req , res , next)=>{
    // console.log(req.body)
    const {  ID ,
        Name ,
        Rating ,
        Description ,
        Genre ,
        Cast }=req.body;

        if(!req.body.Genre){
            res.status(400).send("invalid request body.")
        }
    if(CheckNuminArray(Cast) || /\d/.test(Name) || typeof ID !== "number" || typeof Name!=="string" || 
       typeof Rating !=="number" || typeof Description!=="string" || typeof Genre !=="string" ||  
       !Array.isArray(Cast) && Cast.map((el)=> el !=="string" )){
        fs.appendFileSync("res.txt", `bad request.some data is incorrect.\n`)
        res.status(400).send("bad request.some data is incorrect.")
        next()
       }

        if(typeof ID === "number"){
            fs.appendFileSync("res.txt", `ID is a number\n`)
        }
        if (typeof Name==="string"){
            fs.appendFileSync("res.txt", `Name is a string\n`)
        }
        if(typeof Rating==="number"){
            fs.appendFileSync("res.txt", `Rating is a number\n`)
        }
        if(typeof Description==="string"){
            fs.appendFileSync("res.txt", `Description is a string\n`)
        }
        if(typeof Genre==="string"){
            fs.appendFileSync("res.txt", `Genre is a string\n`)
        }
        if(Array.isArray(Cast) && Cast.map((el)=>(
            typeof el==="string"
        ))){  
            fs.appendFileSync("res.txt", `Cast is a array of string\n`)
        }
    
    next();
}

module.exports = {validatorfunction};