const express = require("express");
const mongoose = require("mongoose");

// models
const User = require("../models/userModel");
const UserGoal = require("../models/userGoalModel");
const UserActivityLog = require("../models/userActivityLogModel");
const Post = require("../models/postModel");

/////////////////////////////////////////
// USER

const getAllUsers = async (req, res) => {
    console.log("get all users");
    res.status(200).send("hello");
};

const getUser = async (req, res) => {
    console.log("get single user");
    res.status(200).send("hello");
};

const postUser = async (req, res) => {
    console.log("post single user");
    res.status(200).send("hello");
};

const patchUser = async (req, res) => {
    console.log("patch single user");
    res.status(200).send("hello");
};

const deleteUser = async (req, res) => {
    console.log("delete single user");
    res.status(200).send("hello");
};

/////////////////////////////////////////
// GOALS

const getUserGoals = async (req, res) => {
    console.log("get all user goals");
    res.status(200).send("hello");
};

const postUserGoal = async (req, res) => {
    console.log("post single user goal");
    res.status(200).send("hello");
};

const patchUserGoal = async (req, res) => {
    console.log("patch single user goal");
    res.status(200).send("hello");
};

const deleteUserGoal = async (req, res) => {
    console.log("delete single user goal");
    res.status(200).send("hello");
};

/////////////////////////////////////////
// ACTIVITY LOGS

const getUserActivityLogs = async (req, res) => {
    console.log("get user activity log");
    res.status(200).send("hello");
};

const postUserActivityLog = async (req, res) => {
    console.log("post user activity log");
    res.status(200).send("hello");
};

const patchUserActivityLog = async (req, res) => {
    console.log("patch user activity log");
    res.status(200).send("hello");
};

/////////////////////////////////////////
// POSTS

const getAllUserPosts = async (req, res) => {
    console.log("get all users post");
    res.status(200).send("hello");
};

const getUserPost = async (req, res) => {
    console.log("get single user post");
    res.status(200).send("hello");
};

const postUserPost = async (req, res) => {
    console.log("post single user post");
    res.status(200).send("hello");
};

const patchUserPost = async (req, res) => {
    console.log("patch single user post");
    res.status(200).send("hello");
};

const deleteUserPost = async (req, res) => {
    console.log("delete single user post");
    res.status(200).send("hello");
};

/////////////////////////////////////////
// COMMENTS

const getAllUserComments = async (req, res) => {
    console.log("get all user comments");
    res.status(200).send("hello");
};

const postUserComment = async (req, res) => {
    console.log("post single user comment");
    res.status(200).send("hello");
};

const patchUserComment = async (req, res) => {
    console.log("patch single user comment");
    res.status(200).send("hello");
};

const deleteUserComment = async (req, res) => {
    console.log("delete single user comment");
    res.status(200).send("hello");
};

/////////////////////////////////////////
// EXPORT ALL CONTROLLERS

module.exports = {
    // Users
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
};
