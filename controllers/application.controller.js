
const Application = require("../models/application.model");

const getApplications = async (req, res) => {
    try {
        const { email, jobId } = req.query;
        const filter = {};

        if (email) filter.email = new RegExp(email, "i");
        if (jobId) filter.jobId = new RegExp(jobId, "i");

        const applications = await Application.find(filter);
        res.status(200).json(applications);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving applications', error });
    }
}


const createApplication = async (req, res) => {
    try {
        const { candidateName, email, jobId } = req.body;
        const application = new Application({ candidateName, email, jobId });
        await application.save();
        res.status(201).json(application);
    } catch (error) {
        res.status(500).json({ message: 'Error applying for job', error });
    }
}

module.exports = { getApplications,createApplication };