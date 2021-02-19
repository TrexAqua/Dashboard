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
} from "./Controllers/databaseControllers.js";
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
//Filter by system name
app.get("/filtersystem/:name", filterBySystemName);
//Get App name by selected System Name
app.get("/appname/:name", getAppNameByDropdown);
//Get the rows with system name and app name
app.get("/related/:systemname/:appname", getBySystemAndAppName);

app.listen(5000, () => {
  console.log(`Server running on Port 5000...`);
});
