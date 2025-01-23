const Job = require("../models/job.model");

const getAllJobs = async (req, res) => {
  try {
    const { title, location, salaryRange } = req.query;
    const filter = {};

    if (title) filter.title = new RegExp(title, "i");
    if (location) filter.location = new RegExp(location, "i");
    if (salaryRange) filter.salaryRange = salaryRange;

    const jobs = await Job.find(filter);
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving jobs", error });
  }
};

const getJobById = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: "Error getting job", error });
  }
};

const createJob = async (req, res) => {
  const { title, description, location, salaryRange } = req.body;

  try {
    employerId = req.user._id;
    const job = new Job({
      title,
      description,
      location,
      salaryRange,
      employerId,
    });
    await job.save();
    res.status(201).json({ message: "Job created successfully", job });
  } catch (error) {
    res.status(500).json({ message: "Error creating job", error });
  }
};

const updateJob = async (req, res) => {
  const { id } = req.params;
  const { title, description, location, salaryRange } = req.body;

  try {
    const job = await Job.findByIdAndUpdate(id, {
      title,
      description,
      location,
      salaryRange
    });
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job updated successfully", job });
  } catch (error) {
    res.status(500).json({ message: "Error updating job", error });
  }
};

const deleteJob = async (req, res) => {
  const { id } = req.params;

  try {
    const job = await Job.findByIdAndDelete(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully", job });
  } catch (error) {
    res.status(500).json({ message: "Error deleting job", error });
  }
};

module.exports = {
  getAllJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob,
}