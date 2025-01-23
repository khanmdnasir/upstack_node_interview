const mongoose = require("mongoose");

require("dotenv").config();

const dbConfig = {
  uri: process.env.MONGO_URI
};

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbConfig.uri);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = { connectToDatabase };
