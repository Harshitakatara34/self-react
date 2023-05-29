const fs=require('fs')

const logger=(req,res,next)=>{
fs.appendFileSync("./log.txt",`\n API ENDPOINT:${req.url} | Method:${req.method} |TIMESTAMP:${Date()}`)
next()
}

module.exports={
    logger
}