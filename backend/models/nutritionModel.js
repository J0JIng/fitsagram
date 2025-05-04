const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nutritionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      trim: true,
      maxlength: 100,
    },
    description: {
      type: String,
      required: true,
      maxlength: 256,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "protein",
        "carbohydrates",
        "fats",
        "fruits",
        "vegetables",
        "dairy",
        "snack",
        "dessert",
        "beverages",
        "supplements",
        "grains",
        "other",
      ],
      index: true,
    },
    calories: {
      type: Number,
      required: true,
      min: 0,
    },
    servingSize: {
      type: String,
      required: true,
      enum: [
        "per 100 grams",
        "per item",
        "per serving",
        "per slice",
        "per cup",
      ],
    },
    protein: {
      type: Number,
      min: 0,
      default: 0,
    },
    fat: {
      type: Number,
      min: 0,
      default: 0,
    },
    carbohydrates: {
      type: Number,
      min: 0,
      default: 0,
    },
    sugar: {
      type: Number,
      min: 0,
      default: 0,
    },
    verified: {
      type: String,
      enum: ["pending", "verified", "rejected"],
      default: "pending",
    },
    isUserAdded: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("nutrition", nutritionSchema);
