const updateLimiter = (req, res, next) => {
  const { mutable } = req.body;

  if (!mutable) {
    return res.send({ err: "This document is not mutable" });
  }

  next();
}
module.exports={
    updateLimiter
}