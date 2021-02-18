import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();
//Create Connection to database

const db = mysql.createConnection({
  host: "localhost",
  //Enter your MySql username
  user: process.env.DATABASE_USERNAME,
  //Enter your MySql password
  password: process.env.DATABASE_PASSWORD,
  //Remove the database field when calling the create database and add it again once you've created the database
  database: "nodemysql",
});

export default db;
