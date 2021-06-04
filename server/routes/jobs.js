const express = require("express");
const router = express.Router();

//import the controller
const Job = require("../controllers/job");

//Get all todos.
router.get("/", async (req, res) => {
  let jobs = await new Job().getJobs();
});

//Create a todo.
router.post("/job", async (req, res) => {
  let { title } = req.body;
  await new Job().createJob({ title }, res);
});

//Update a todo.
router.put("/todos/:todoId", async (req, res) => {
  let { jobId } = req.params;
  await new Job().updateJob(jobId, res);
  let jobs = await new Job().getJobs();
});

//Delete a todo.
router.delete("/jobs/:jobId", async (req, res) => {
  let { jobId } = req.params;
  await new Job().deleteJob(jobId);
  let todos = await new Job().getJobs();
});
