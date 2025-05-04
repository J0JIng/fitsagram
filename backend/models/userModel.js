const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 100,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      maxlength: 100,
      index: true,
      trim: true,
      match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/, // email format validation
    },
    password: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true,
      match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // password strength validation
    },
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    height: {
      type: Number,
      default: 0,
      min: 0,
    },
    weight: {
      type: Number,
      default: 0,
      min: 0,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "Prefer not to say", "Others"],
    },
    experience: {
      type: Number,
      default: 0,
      min: 0,
    },
    following: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        followedAt: { type: Date, default: Date.now },
      },
    ],
    followers: [
      {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
        followedAt: { type: Date, default: Date.now },
      },
    ],
    isDeleted: {
      type: Boolean,
      default: false,
    },
    profileSettings: {
      theme: String,
      language: String,
      notificationsEnabled: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", userSchema);
