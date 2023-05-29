const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    try {
      const decoded = jwt.verify(token, "harshi");
      if (decoded) {
        next();
      } else {
        res.send("please login ");
      }
    } catch (err) {
      console.log(err);
    }
  } else {
    res.send("login first");
  }
};

module.exports = {
  auth,
};
