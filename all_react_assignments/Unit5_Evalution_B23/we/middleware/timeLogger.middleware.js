const timeLogger=(req,res,next)=>{
    let startTime=new Date().getTime()
    next()
    let finalTime=new Date().getTime()
    console.log(`Time Taken to provide the response ${finalTime-startTime}ms`);
}

module.exports={
    timeLogger
}