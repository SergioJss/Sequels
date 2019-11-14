const express = require("express");
const mysql = require("mysql");

//start server

const server = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Student",
  database: "dog"
});

db.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log("MySQL is connected");
});

server.listen(3000, function() {
  console.log("server is Lit");
});
