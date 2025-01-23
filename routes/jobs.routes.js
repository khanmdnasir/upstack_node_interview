 const express = require("express");
 const { getAllJobs, getJobById, createJob, updateJob, deleteJob } = require("../controllers/job.controller");
 const { authToken } = require("../utils/auth.middleware");
const { validateJob, validateJobFilter } = require("../validators/job.validator");
 
const router = express.Router();


router.get("/", validateJobFilter, getAllJobs);
router.get("/:id", getJobById);
router.post("/", authToken, validateJob, createJob);
router.put("/:id", authToken, validateJob, updateJob);
router.delete("/:id", authToken, deleteJob);

module.exports = router;