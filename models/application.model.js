const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  candidateName: String,
  email: String,
  jobId: mongoose.Schema.Types.ObjectId,
  applicationDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Application", applicationSchema);
