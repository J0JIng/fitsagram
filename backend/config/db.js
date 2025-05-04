require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  const url = process.env.MONGO_DB_URL;
  if (!url) {
    throw new Error("MONGO_DB_URL is not defined in the environment variables");
  }

  try {
    const connection = await mongoose.connect(url);
    console.log("connected to mongoDB");
  } catch (e) {
    console.error("Error connected to MongoDB", e);
    process.exit(1);
  }
};
module.exports = connectDB;


// USING PROMISE SYNTAX
// const connectDB = () => {
//   const url = process.env.MONGO_DB_URL;
//   if (!url) {
//     return Promise.reject(
//       new Error("MONGO_DB_URL is not defined in the environment variables")
//     );
//   }

//   return mongoose
//     .connect(url)
//     .then(() => console.log("Connected to MongoDB"))
//     .catch((err) => {
//       console.error("Error connecting to MongoDB:", err);
//       process.exit(1); // Exit the process if connection fails
//     });
// };