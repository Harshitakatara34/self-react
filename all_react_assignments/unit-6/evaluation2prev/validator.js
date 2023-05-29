const validator=(req,res,next)=>{
    const {pass,role}=req.query;
  
    if(req.method=="PATCH" || req.method=="DELETE"){
      if(role=="admin" || role=="teachers"){
         if(pass=="7877"){
           res.send("students details deleted")
            next();
         }else{
           res.send({message : "You are not authorised to do this operation"})
         }
      }else{
       res.send({message : "You are not authorised to do this operation"})
      }
    }else{
       res.send({message : "You are not authorised to do this operation"})
    }

}
module.exports={ validator}