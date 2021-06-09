const express = require("express");
const router = express.Router();

//import the controller
const Job = require("../controllers/job");

//Get all jobs.
router.get("/", async (req, res) => {
  let jobs = await new Job().getJobs();
  console.log(jobs);
  res.json({ jobs });
});

//Create a job.
//Create a todo.
router.post("/job", async (req, res) => {
  let { description, location, full_time } = req.body;
  await new Job().createJob({ description, location, full_time }, res);
});

module.exports = router;
