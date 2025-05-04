const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./api/v1/workoutRoutes")
const connectDB = require("./config/db")

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/workout',workoutRoutes)
connectDB()


app.listen(PORT, (error) => {
  if (!error) {
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  } else {
    console.log("Error occurred, server can't start", error);
  }
});
