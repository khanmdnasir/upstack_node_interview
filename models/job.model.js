const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  location: String,
  salaryRange: String,
  employerId: String,
});

module.exports = mongoose.model("Job", jobSchema);
