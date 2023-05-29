const addStudentCode=(req,res,next)=>{
    const random=Math.floor(Math.random()*100)
    req.body.studentcode=`fw21_${random}`
    next()
}

module.exports={
    addStudentCode
}