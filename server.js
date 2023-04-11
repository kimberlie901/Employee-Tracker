/** Acceptance Criteria
 * GIVEN  command-line application that accepts user input
 * WHEN I start the application
 * THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
 * WHEN I choose to view all departments
 * THEN I am presented with a formatted table showing department names and department ids
 * WHEN I choose to view all roles
 * THEN I am presented with the job title, role, id, the deparment that role belongs to, and the salary, for that role
 * WHEN I choose to view all employees
 * THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to 
 * WHEN I choose to add a department
 * THEN I am prompted to enter the name of the department and that department is added to the database
 * WHEN I choose to add a role
 * THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
 * WHEN I choose to add an employee
 * THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database
 * WHEN I choose to update an employee role
 * THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
 */

//Dependencies
const mysql = require("mysql2/promise");
const express = require("express");
const inquirer = require("inquirer");
const db = require("./db");
const fs = require("fs");
const cTable = require("console.table");

//Set up Express app
const app = express();
const PORT = process.env.PORT || 3003;

//Set-up Middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Initial function at start
function init(){
    startPrompt();
}

//Start Prompt Questions 
function startPrompt() {
    inquirer.prompt({
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role"]

    }).then( answer => {
        let answer = answer.menu; 
        switch (answer.menu) {
            case "View All Departments":
                viewAllDepartments();
                break;
            case "View All Roles":
                viewAllRoles();
                break;
            case "View All Employees":
                viewAllEmployees();
                break;
            case "Add A Department":
                addDepartment();
                break;
            case "Add A Role":
                addRole();
                break;
            case "Add An Employee":
                addEmployee();
                break;
            case "Update An Employee Role":
                updateEmployeeRole();
                break;    
        }

    })
};

// View all departments 
function viewAllDepartments() {
    db.allDepartments()
        .then(([rows]) => {
            let departments = rows
            console.table(departments);
        })
        .then(() => startPrompt());
}
// View all roles
// View all employees
// Add a department
// Add a role
// Add an employee
// Update an employee role

//Call to start app
init();