const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require("cors");

app.unsubscribe(express.json());
app.use(cors());

app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

// Jobs
app.use("/jobs", require("./routes/jobs"));

// const jobRoutes = require("./routes/jobs");
// app.use(jobRoutes);

app.listen(5000, () => {
  console.log("Server is running on port http://localhost:5000");
});
