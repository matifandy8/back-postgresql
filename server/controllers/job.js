const db = require("../db");
class Job {
  //get all jobs.
  async getJobs() {
    let results = await db.query(`SELECT * FROM jobs`).catch(console.log());
    return results.rows;
  }
  //create a job.
  async createJob(job) {
    await db
      .query(
        "INSERT INTO jobs (description, location,full_time) VALUES ($1, $2, $3)",
        [description, location, full_time]
      )
      .catch(console.log);
    return;
  }

  //update a job.
  async updateJob(jobId) {
    //get the previous job.
    let original_job = await db
      .query(`SELECT * FROM jobs WHERE id=$1`, [parseInt(jobId)])
      .catch(console.log);
    let new_checked_value = !original_job.rows[0].checked;

    //update the checked job
    await db
      .query(`UPDATE jobs SET checked=$1 WHERE id=$2`, [
        new_checked_value,
        parseInt(jobId),
      ])
      .catch(console.log);
    return;
  }

  //delete a job.
  async deleteJob(jobId) {
    await db
      .query(`DELETE FROM jobs WHERE id=$1`, [parseInt(jobId)])
      .catch(console.log);
    return;
  }
}

module.exports = Job;
