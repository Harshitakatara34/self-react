const mongoose = require("mongoose");

const connection = mongoose.connect(
  "mongodb+srv://Harshita:harshita@cluster0.g1zjwi1.mongodb.net/Users?retryWrites=true&w=majority"
);

module.exports = {
  connection,
};
