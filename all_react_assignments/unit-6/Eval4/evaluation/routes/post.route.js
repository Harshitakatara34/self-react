const express = require("express");
const { validator } = require("../middlewares/validator.middleware");
const { UserModel } = require("../models/user.model");
// const { validator } = require(".../middlewares/validator.middleware")

const postroute = express.Router();
postroute.use(validator);
postroute.post("/", async (req, res) => {
  try {
    player = new UserModel(req.body);
    await player.save();
    res.send({ msg: "player is added successfully" });
  } catch (error) {
    res.send({ err: "something went wrong" });
  }
});

module.exports = {
  postroute,
};
