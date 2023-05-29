const fs = require("fs");

const record = (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  const timestamp = new Date().toString();
  if (req.method == "PATCH") {
    fs.appendFile(
      "records.txt",
      `The Player with id:${id} has been updated | ${timestamp}\n`,
      (err) => {
        if (err) {
          res.send({ msg: "error" });
        }
      }
    );
    next();
  }
  if (req.method == "DELETE") {
    fs.appendFile(
      "records.txt",
      `The Player with id:${id} has been deleted | ${timestamp}\n`,
      (err) => {
        if (err) {
          res.send({ msg: "error" });
        }
      }
    );
    next();
  }
};

module.exports = {
  record,
};
