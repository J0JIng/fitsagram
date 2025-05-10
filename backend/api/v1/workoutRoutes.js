const express = require("express");
const {
  getAllWorkouts,
  getWorkout,
  postWorkout,
  patchWorkout,
  deleteWorkout,
} = require("../../controllers/workoutControllers");

const router = express.Router();

// get
router.get("/", getAllWorkouts);
router.get("/:workoutID", getWorkout);

// post
router.post("/", postWorkout);

// patch
router.patch("/:workoutID", patchWorkout);

// delete
router.delete("/:workoutID", deleteWorkout);

module.exports = router;
