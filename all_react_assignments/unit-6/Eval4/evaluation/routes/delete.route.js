const express = require("express");
const { UserModel } = require("../models/user.model");
const { record } = require("../middlewares/record.middleware");
const deleteRoute = express.Router();
// deleteRoute.use(record);
deleteRoute.delete("/delete/:id",record,async (req, res) => {
  const { id } = req.params;
  try {
    await UserModel.findByIdAndDelete({ _id: id });
    res.send({ msg: "player is deleted successfully" });
  } catch (error) {
    res.send({ err: "Something went wrong" });
  }
});

module.exports = {
  deleteRoute,
};
