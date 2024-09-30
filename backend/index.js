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

const { addJob } = require("./Routes/Jobs/addJobs");
const { getJobs } = require("./Routes/Jobs/getJobs");
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
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
