const express = require("express");
const {
  // User
  getAllUsers,
  getUser,
  postUser,
  patchUser,
  deleteUser,

  // Goals
  getUserGoals,
  postUserGoal,
  patchUserGoal,
  deleteUserGoal,

  // Activity Logs
  getUserActivityLogs,
  postUserActivityLog,
  patchUserActivityLog,

  // Posts
  getAllUserPosts,
  getUserPost,
  postUserPost,
  patchUserPost,
  deleteUserPost,

  // Comments
  getAllUserComments,
  postUserComment,
  patchUserComment,
  deleteUserComment,
} = require("../../controllers/userControllers");

const router = express.Router();

//get
router.get("/", getAllUsers);
router.get("/:userID", getUser);
router.get("/:userID/goals", getUserGoals);
router.get("/:userID/activity_logs", getUserActivityLogs);
router.get("/:userID/posts", getAllUserPosts);
router.get("/:userID/posts/:postID", getUserPost);
router.get("/:userID/posts/:postID/comments", getAllUserComments);

//post
router.post("/", postUser);
router.post("/:userID/goals", postUserGoal);
router.post("/:userID/activity_logs", postUserActivityLog);
router.post("/:userID/posts", postUserPost);
router.post("/:userID/posts/:postID/comments", postUserComment);

// patch
router.patch("/:userID", patchUser);
router.patch("/:userID/goals/:goalID", patchUserGoal);
router.patch("/:userID/activity_logs/:logID", patchUserActivityLog);
router.patch("/:userID/posts/:postID", patchUserPost);
router.patch("/:userID/posts/:postID/comments/:commentID", patchUserComment);

// delete
router.delete("/:userID", deleteUser);
router.delete("/:userID/goals/:goalID", deleteUserGoal);
router.delete("/:userID/posts/:postID", deleteUserPost);
router.delete("/:userID/posts/:postID/comments/:commentID", deleteUserComment);

module.exports = router;