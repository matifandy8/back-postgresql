const db = require("../db");
class Job {
  //get all jobs.
  async getJobs() {
    let results = await db.query(`SELECT * FROM jobs`).catch(console.log());
    return results.rows;
  }
  //get id job.
  async getJob(job) {
    let results = await db
      .query(`SELECT * FROM jobs WHERE job_id=$1`, [job.id])
      .catch(console.log());
    return results.rows;
  }
  // create a job.
  async createJob(job) {
    await db
      .query(
        "INSERT INTO jobs (job_description,job_location,job_full_time) VALUES ($1,$2,$3)",
        [job.description, job.location, job.full_time]
      )
      .catch(console.log);
    return;
  }
}

module.exports = Job;
