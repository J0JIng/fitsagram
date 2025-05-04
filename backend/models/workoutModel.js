const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
      maxlength: 100,
    },
    version: {
      type: Number,
      required: true,
      default: 1,
    },
    type: {
      type: String,
      required: true,
      enum: ["Strength", "Cardio", "Flexibility", "Endurance"],
    },
    description: {
      type: String,
      required: true,
      maxlength: 256,
    },
    mets: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("workout", workoutSchema);
