import db from "../Config/db.js";
import mysql from "mysql";

const createDatabase = async (req, res) => {
  const sql = "CREATE DATABASE nodemysql";
  await db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.status(201).json({
      message: "Database Created",
    });
  });
};

const getDashboard = async (req, res) => {
  const sql = "SELECT * FROM dashboard";
  const query = await db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json({
      message: "Data Fetched",
      data: results,
    });
  });
};

const getUniqueSystemName = async (req, res) => {
  const sql = "SELECT DISTINCT Systemnm FROM dashboard";
  const query = await db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json({
      message: "System Names Fetched",
      data: results,
    });
  });
};

const getAppNameByDropdown = async (req, res) => {
  const sql = "SELECT distinct Applname FROM dashboard WHERE Systemnm=?";
  const query = await db.query(sql, [req.params.name], (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json({
      message: "App Names Fetched",
      data: results,
    });
  });
};

const filterBySystemName = async (req, res) => {
  const sql = "SELECT * FROM dashboard WHERE Systemnm=?";
  const query = await db.query(sql, [req.params.name], (err, results) => {
    if (err) {
      throw err;
    }
    if (results) {
      console.log(results);
      res.json({
        message: "System Names Fetched",
        data: results,
      });
    }
  });
};

const getBySystemAndAppName = async (req, res) => {
  const sql = "SELECT * FROM dashboard WHERE (Systemnm, Applname) = (?,?)";
  const query = await db.query(
    sql,
    [req.params.systemname, req.params.appname],
    (err, results) => {
      if (err) {
        throw err;
      }
      if (results) {
        console.log(results);
        res.json({
          message: "System Names Fetched",
          data: results,
        });
      }
    }
  );
};

const getJobCatalog = async (req, res) => {
  const sql = "SELECT * FROM JobCatalog order by Jobnm";
  const query = await db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json({
      message: "Data Fetched",
      data: results,
    });
  });
};

const getDetailsReport = async (req, res) => {
  const sql = "SELECT * FROM detailreport";
  const query = await db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json({
      message: "Data Fetched",
      data: results,
    });
  });
};

const getJobReports = async (req, res) => {
  const sql = "SELECT * FROM jobreports";
  const query = await db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json({
      message: "Data Fetched",
      data: results,
    });
  });
};
const getAllJobDetails = async (req, res) => {
  const sql = "SELECT * FROM detailreport";
  await db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json({
      message: "Data Fetched",
      data: results,
    });
  });
};

const getJobDetails = async (req, res) => {
  const sql = "SELECT * FROM detailreport where Reportnm=?";
  await db.query(sql, [req.params.title], (err, results) => {
    if (err) {
      throw err;
    }
    res.json({
      message: "Data Fetched Yay",
      data: results,
    });
  });
};

const getJobDetailByStatus = async (req, res) => {
  const sql = "SELECT * FROM detailreport where Reportnm=? and Status=?";
  await db.query(
    sql,
    [req.params.reportname, req.params.status],
    (err, results) => {
      if (err) {
        throw err;
      }
      console.log(results);
      res.json({
        message: "Data Fetched",
        data: results,
      });
    }
  );
};
const getReportByStatus = async (req, res) => {
  let condition;
  if (req.params.status === "pass") {
    condition = "totalfailed = 0";
  } else if (req.params.status === "fail") {
    condition = "totalfailed > 0 ";
  }
  const sql = `SELECT * FROM jobreports where ${condition}`;
  await db.query(sql, [req.params.status], (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json({
      message: "Data Fetched",
      data: results,
    });
  });
};

const getJobNames = async (req, res) => {
  const sql = "SELECT DISTINCT Jobnm from detailreport order by Jobnm asc";
  await db.query(sql, (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json({
      message: "Data Fetched",
      data: results,
    });
  });
};
const getReportByJobName = async (req, res) => {
  const sql =
    "select * from jobreports where reporttitle in(select distinct Reportnm from detailreport where Jobnm=?);";
  await db.query(sql, [req.params.job], (err, results) => {
    if (err) {
      throw err;
    }
    console.log(results);
    res.json({
      message: "Data Fetched",
      data: results,
    });
  });
};

export {
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
  getJobNames,
  getReportByJobName,
};
