const validator=(req, res, next)=> {
    const method = req.method;
    const role = req.query.role;
    const pass = req.query.pass;
  
    if ((method === "PATCH" || method === "DELETE") ){
        if(role === "leader" && +pass === 4534) {
            // res.send("authorised")
      next();
    } 
    else {
        res.status(401).send("You are not authorised to do this operation" );
      }
}
next()  
  }
  
  module.exports = { validator };
  