


const timelogger=(req,res,next)=>{
    console.log("form MW")
    let startTime= new Date().getTime()
    next()// it is telling your compiler where you have to go next.
   let endTime =new Date().getTime()
   console.log(`${endTime-startTime}ms`)

}

module.exports={
    timelogger
}