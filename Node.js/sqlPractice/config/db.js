require('dotenv').config();
const { populate } = require('dotenv');
const { query } = require('express');
const mysql = require('mysql2/promise');

// create the connection to database
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});