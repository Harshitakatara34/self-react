const post=(req,res,next)=>{
    if(req.body.device=="PC"||req.body.device=="TABLET"||req.body=="MOBILE"){
        next()
    }
    else{
        res.send("device can only be PC,MOBILE or TABLET")
    }
}


module.exports={
    post
}