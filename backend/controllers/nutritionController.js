const express = require("express");
const mongoose = require("mongoose");

// models
const NutritionItem = require("../models/nutritionModel");

const getAllNutritionItems = async (req, res) => {
  console.log("get all nutrition-items");
  res.status(200).send("hello");
};

const getNutritionItem = async (req, res) => {
  console.log("get single nutrition-item");
  res.status(200).send("hello");
};

const postNutritionItem = async (req, res) => {
  console.log("post single nutrition-item");
  res.status(201).send("hello");
};

const patchNutritionItem = async (req, res) => {
  console.log("patch nutrition-item");
  res.status(200).send("hello");
};

const deleteNutritionItem = async (req, res) => {
  console.log("delete nutrition-item");
  res.status(200).send("hello");
};

module.exports = {
  getAllNutritionItems,
  getNutritionItem,
  postNutritionItem,
  patchNutritionItem,
  deleteNutritionItem,
};
