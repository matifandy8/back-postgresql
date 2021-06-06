const express = require("express");
const router = express.Router();

//import the controller
const Job = require("../controllers/job");

//Get all todos.
router.get("/", async (req, res) => {
  let jobs = await new Job().getJobs();
  console.log(jobs);
  res.json({ jobs });
});

//Create a todo.
router.post("/job", async (req, res) => {
  let { description, location, full_time } = req.body;
  await new Job().createJob({ description, location, full_time }, res);
});

//Update a todo.
router.put("/jobs/:jobId", async (req, res) => {
  let { jobId } = req.params;
  await new Job().updateJob(jobId, res);
  let jobs = await new Job().getJobs();
});

//Delete a todo.
router.delete("/jobs/:jobId", async (req, res) => {
  let { jobId } = req.params;
  await new Job().deleteJob(jobId);
  let jobs = await new Job().getJobs();
});

module.exports = router;
