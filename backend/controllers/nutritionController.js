const express = require("express");
const mongoose = require("mongoose");

const NutritionItem = require("../models/nutritionModel"); // models
// const {} = require("../service/nutritionService"); // services

const getAllNutritionItems = async (req, res) => {
  console.log("get all nutrition-items");
  try {
    const items = await NutritionItem.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ message: "successful", data: items });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: error.message });
  }
};

const getNutritionItem = async (req, res) => {
  console.log("get single nutrition-item");
  const { nutrition_itemID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(nutrition_itemID)) {
    return res.status(400).json({ error: "Invalid nutrition item ID" });
  }
  try {
    const item = await NutritionItem.findById(nutrition_itemID);
    if (!item) {
      return res.status(404).json({ error: "Nutrition item not found" });
    }
    res.status(200).json({ message: "successful", data: item });
  } catch (error) {
    console.error("Error fetching nutrition item:", error);
    return res.status(500).json({ error: error.message });
  }
};

const postNutritionItem = async (req, res) => {
  console.log("post single nutrition-item");
  const item = req.body;

  try {
    const newItem = await NutritionItem.create(item);
    res.status(201).json({ message: "successful", data: newItem });
  } catch (error) {
    console.error("Error posting nutrition item:", error);
    res.status(400).json({ error: error.message });
  }
};

const patchNutritionItem = async (req, res) => {
  console.log("patch nutrition-item");
  const { nutrition_itemID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(nutrition_itemID)) {
    return res.status(400).json({ error: "Invalid nutrition item ID" });
  }

  try {
    const updateItem = await NutritionItem.findOneAndUpdate(
      { _id: nutrition_itemID },
      { ...req.body },
      { new: true, runValidators: true }
    );

    if (!updateItem) {
      return res.status(404).json({ error: "No such nutrition item" });
    }

    return res.status(200).json({ message: "successful", data: updateItem });
  } catch (error) {
    console.error("Error posting nutrition item:", error);
    res.status(400).json({ error: error.message });
  }
};

const deleteNutritionItem = async (req, res) => {
  console.log("delete nutrition-item");
  const { nutrition_itemID } = req.params;

  if (!mongoose.Types.ObjectId.isValid(nutrition_itemID)) {
    return res.status(400).json({ error: "Invalid nutrition item ID" });
  }

  try {
    const deleteItem = await NutritionItem.findOneAndDelete({
      _id: nutrition_itemID,
    });

    if (!deleteItem) {
      return res.status(404).json({ error: "No such nutrition item" });
    }

    return res.status(200).json({ message: "successful", data: deleteItem });
  } catch (error) {
    console.error("Error deleting nutrition item:", error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllNutritionItems,
  getNutritionItem,
  postNutritionItem,
  patchNutritionItem,
  deleteNutritionItem,
};
