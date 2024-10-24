const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const {
  login,
  checkUsername,
  checkEmail,
  signup,
  getTotalUsers,
} = require("./Routes/Auth/authUser");

const { getJobDetail } = require("./Routes/Jobs/getJobDetails");
const { addJob } = require("./Routes/Jobs/addJobs");
const { getJobs, getSpeceficJobs } = require("./Routes/Jobs/getJobs");
const { applyJob ,getApplications, deleteApplications, cancledApplicationsCount} = require("./Routes/Jobs/applyJob");
const { getJobCount, getAllApplications, getPendingApplications } = require("./Routes/Admin/getJobdata");
const { getTotalJobs, deleteJob } = require("./Routes/Admin/getTotalJobs");
const { changeApplicationStatus, getAcceptedApplications, getRejectedApplications } = require("./Routes/Admin/applicationStatus");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/login", login);
app.post("/api/check-username/:username", checkUsername);
app.post("/api/check-email/:email", checkEmail);
app.post("/api/signup", signup);
app.post("/api/addjob", addJob);
app.get("/api/getjobs", getJobs);
app.post("/api/getspeceficjobs", getSpeceficJobs);
app.get("/api/getjobdetail/:id", getJobDetail)
app.get("/api/Viewjob/:id", getJobDetail);
app.post("/api/apply/:jobId", applyJob);
app.get("/api/myapplications/:user_id", getApplications)
app.delete("/api/deleteApplication/:application_id",deleteApplications);
app.get("/api/jobs/totaljobs", getJobCount);
app.get("/api/jobs/totalapplications", getAllApplications);
app.get("/api/jobs/pendingapplications", getPendingApplications);
app.get("/api/jobs/getAlljobs", getTotalJobs);
app.delete("/api/jobs/deletejob/:job_id", deleteJob);
app.put("/api/jobs/updateapplicationstatus/:application_id", changeApplicationStatus);
app.get("/api/jobs/acceptedapplications", getAcceptedApplications);
app.get("/api/jobs/rejectedapplications", getRejectedApplications);
app.get("/api/jobs/totalusers", getTotalUsers);
app.get("/api/jobs/cancelledapplications/count", cancledApplicationsCount);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
