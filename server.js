import express from "express";
import db from "./Config/db.js";
import dotenv from "dotenv";
import {
  createDatabase,
  getDashboard,
  getJobCatalog,
  getDetailsReport,
  getUniqueSystemName,
  filterBySystemName,
  getAppNameByDropdown,
  getBySystemAndAppName,
  getJobReports,
  getJobDetails,
  getAllJobDetails,
  getJobDetailByStatus,
  getReportByStatus,
} from "./Controllers/databaseControllers.js";

import { executeJob } from "./Controllers/JobExecutorController.js";

//ENV variables
dotenv.config();

const app = express();

//connect the database

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySql Connected..");
  }
});
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Ok des ne",
  });
});
//Create a database through a route (Run Only Once)
app.get("/createdb", createDatabase);
//Fetching the dashboard
app.get("/dashboard", getDashboard);
//Fetching the JobCatalog
app.get("/catalog", getJobCatalog);
//Fetching the DetailsReport
app.get("/report", getDetailsReport);
//Get Unique System Names
app.get("/system", getUniqueSystemName);
//get details of all jobs
app.get("/reportdetail", getAllJobDetails);
//Get the results of jobs after execution
app.get("/basetable", getJobReports);
//Get Reports with 0 pass or 0 fail
app.get("/basetable/:status", getReportByStatus);
//get details of a specific job
app.get("/reportdetail/:title", getJobDetails);
//get job details by status
app.get("/statusdetail/:status", getJobDetailByStatus);
//Filter by system name
app.get("/filtersystem/:name", filterBySystemName);
//Get App name by selected System Name
app.get("/appname/:name", getAppNameByDropdown);
//Get the rows with system name and app name
app.get("/related/:systemname/:appname", getBySystemAndAppName);

//Execute a Job
app.get("/executeJob", executeJob);

app.listen(5000, () => {
  console.log(`Server running on Port 5000...`);
});
