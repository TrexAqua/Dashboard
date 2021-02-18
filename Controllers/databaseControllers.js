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

const getJobCatalog = async (req, res) => {
  const sql = "SELECT * FROM JobCatalog";
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

export {
  createDatabase,
  getDashboard,
  getJobCatalog,
  getDetailsReport,
  getUniqueSystemName,
  filterBySystemName,
};
