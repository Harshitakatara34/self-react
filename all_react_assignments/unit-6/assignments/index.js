const express = require("express");

const { connection } = require("./controllers/connection");
const { router } = require("./Routers/user.router");
const { noterouter } = require("./Routers/notes.router");
const { auth } = require("./Middlewares/auth.middleware");
const app = express();

app.use(express.json());
app.use("/", router);
app.use(auth);
app.use("/", noterouter);

app.listen(8000, async () => {
  try {
    await connection;
    console.log("connected");
  } catch (error) {
    console.log(error);
  }
  console.log("connected to db");
});
