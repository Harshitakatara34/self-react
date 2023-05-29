const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  player_name: { type: String, required: true },
  position: { type: String, required: true },
  team: { type: String, required: true },
  goals: { type: Number, required: true },
  assists: { type: Number, required: true },
  nationality: { type: String, required: true },
  age: { type: Number, required: true },
  mutable: { type: Boolean, required: true },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
