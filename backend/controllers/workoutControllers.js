const express = require("express");
const mongoose = require("mongoose");
const workout = require("../models/workoutModel")


// get all
const getAllWorkouts = async (req, res) => {
  console.log("get all workouts");
  res.status(200).send("hello");
};

module.exports = {
  getAllWorkouts,
};
