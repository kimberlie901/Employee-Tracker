// Create connection add schema.sql and seed.sql code 
const mysql = require("mysql2");

// Connect to the database 
const db = mysql.createConnection({
    host: "localhost",
    // MySQL username
    user: "root",
    // MySQL password 
    password: "",
    database: "employeeTracker"
},
    console.log("Connected to database.")
);

module.exports = db;

