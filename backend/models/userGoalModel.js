const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userGoalSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true,
    },
    version: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: true,
      maxlength: 256,
    },
    type: {
      type: String,
      required: true,
      enum: ["Weight", "BMI", "Workout", "Height", "Steps", "Calories"],
    },
    target: {
      type: Number,
      required: true,
      min: 0,
    },
    dateline: {
      type: Date,
      required: true,
    },
    isCompleted: {
      type: String,
      enum: ["completed", "pending", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("userGoal", userGoalSchema);
