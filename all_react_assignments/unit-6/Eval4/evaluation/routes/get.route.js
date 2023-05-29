const express = require("express");
const { UserModel } = require("../models/user.model");
const getRoute = express.Router();

getRoute.get("/Players", async (req, res) => {
  try {
    const { goals, age, nationality } = req.query;
    const filter = {};

    if (goals) {
      filter.goals = { $gte: goals };
    }

    if (age) {
      filter.age = { $lte: age };
    }

    if (nationality) {
      filter.nationality = nationality;
    }

    const players = await UserModel.find(filter);
    res.json(players);
  } catch (err) {
    console.error(err);
    res.send({ error: "Server error" });
  }
});

getRoute.get("/players/:id", async (req, res) => {
  try {
    const player = await UserModel.findById(req.params.id);
    if (!player) {
      res.send({ " error": "Player not found" });
    }
    res.json(player);
  } catch (err) {
    console.error(err);
    res.send({ " error": "Server error" });
  }
});

getRoute.get("/players/top", async (req, res) => {
  try {
    const players = await UserModel.find().sort({ goals: -1 }).limit(5);
    res.json(players);
  } catch (err) {
    console.error(err);
    res.send({ error: "Server error" });
  }
});

module.exports = {
  getRoute,
};
