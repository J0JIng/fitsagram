const express = require("express");
const { getAllWorkouts } = require("../../controllers/workoutControllers");

const router = express.Router();

// get
router.get("/", getAllWorkouts);

// post

// patch

// delete

module.exports = router;
