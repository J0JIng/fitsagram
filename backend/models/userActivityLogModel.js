const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userActivityLogSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
      index: true,
    },
    isCompletedWorkout: {
      type: Boolean,
      default: false,
    },
    workoutStartTime: {
      type: Date,
      default: null,
    },
    workoutEndTime: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

userActivityLogSchema.pre("save", function (next) {
  // Check if workoutStartTime is later than workoutEndTime
  if (
    this.workoutStartTime &&
    this.workoutEndTime &&
    this.workoutStartTime > this.workoutEndTime
  ) {
    return next(
      new Error("Start-workout time cannot be later than end-workout time")
    );
  }

  // If workout is marked as completed, ensure there's an end time
  if (this.isCompletedWorkout && !this.workoutEndTime) {
    return next(
      new Error("Workout cannot be completed without a valid end time")
    );
  }

  // If workout has an end time, mark the workout as completed
  if (this.workoutEndTime && !this.isCompletedWorkout) {
    this.isCompletedWorkout = true; // Auto-complete the workout if there's an end time
  }
  next();
});

module.exports = mongoose.model("userActivityLog", userActivityLogSchema);
