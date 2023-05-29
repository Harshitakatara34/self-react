const fs=require("fs")

const logger=(req,res,next)=>{
fs.appendFileSync("./logs.txt",`${req.url} ${req.method}\n`)
next()
}

module.exports={
    logger
}