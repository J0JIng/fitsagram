const express = require("express");
const mongoose = require("mongoose");

// models
const Workout = require("../models/workoutModel");

const getAllWorkouts = async (req, res) => {
  console.log("get all workouts");
  res.status(200).send("hello");
};

const getWorkout = async (req, res) => {
  console.log("get single workout");
  res.status(200).send("hello");
};

const postWorkout = async (req, res) => {
  console.log("post single workout");
  res.status(201).send("hello");
};

const patchWorkout = async (req, res) => {
  console.log("patch single workout");
  res.status(200).send("hello");
};

const deleteWorkout = async (req, res) => {
  console.log("delete single workout");
  res.status(200).send("hello");
};

module.exports = {
  getAllWorkouts,
  getWorkout,
  postWorkout,
  patchWorkout,
  deleteWorkout,
};
