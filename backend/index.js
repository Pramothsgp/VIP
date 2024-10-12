const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
const {
  login,
  checkUsername,
  checkEmail,
  signup,
} = require("./Routes/Auth/authUser");

const { getJobDetail } = require("./Routes/Jobs/getJobDetails");
const { addJob } = require("./Routes/Jobs/addJobs");
const { getJobs, getSpeceficJobs } = require("./Routes/Jobs/getJobs");
const { applyJob ,getApplications} = require("./Routes/Jobs/applyJob");
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

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
