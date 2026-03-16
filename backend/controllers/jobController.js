const Job = require("../models/Job");

// create job
exports.createJob = async (req, res) => {

try {

const job = await Job.create(req.body);

res.status(201).json(job);

} catch (error) {

res.status(500).json({ message: error.message });

}

};


// get all jobs
exports.getJobs = async (req, res) => {

try {

const jobs = await Job.find();

res.json(jobs);

} catch (error) {

res.status(500).json({ message: error.message });

}

};


// get single job
exports.getJobById = async (req, res) => {

try {

const job = await Job.findById(req.params.id);

res.json(job);

} catch (error) {

res.status(500).json({ message: error.message });

}

};