/** Acceptance Criteria
 * GIVEN  command-line application that accepts user input
 * WHEN I start the application
 * THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
 * WHEN I choose to view all departments
 * THEN I am presented with a formatted table showing department names and department ids
 * WHEN I choose to view all roles
 * THEN I am presented with the job title, role id, the deparment that role belongs to, and the salary, for that role
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
const inquirer = require("inquirer");
const db = require("./db/connection");
const fs = require("fs");
const cTable = require("console.table");
const { title } = require("process");
const queries = require("./db/queries");

//Set up Express app
const PORT = process.env.PORT || 3001;

//Initial function at start
function init() {
    startPrompt();
}

//Start Prompt Questions 
function startPrompt() {
    inquirer.prompt({
        type: "list",
        name: "menu",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role"]
    }).then(choices => {
        switch (choices.menu) {
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
                addADepartment();
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
    queries.viewDepartments()
        .then(([rows]) => {
            let departments = rows
            console.table(departments);
        })
        .then(() => startPrompt());
};

// View all roles
function viewAllRoles() {
    queries.viewRoles()
        .then(([rows]) => {
            let roles = rows
            console.table(roles);
        })
        .then(() => startPrompt());
};

// View all employees
function viewAllEmployees() {
    queries.viewEmployees()
        .then(([rows]) => {
            let employees = rows
            console.table(employees);
        })
        .then(() => startPrompt());
};

// Add a department
function addADepartment() {
    inquirer.prompt([
        {
            name: "departments_name",
            message: "What is the name of the department?",
        }
    ])
    // queries.addADepartment()
    .then((departments_name) => {
        console.log(departments_name)
        queries.addADepartment(departments_name)
        .then(() => console.log("added a new department"))
        .then(() => startPrompt());
    })
};

// Add a role
function addRole() {
    queries.viewDepartments()
        .then(([rows]) => {
            console.log(rows)
            let departments = rows;
            const departmentChoices = departments.map(({ id, departments_name }) => ({
                name: departments_name,
                value: id,
            }))
            console.log(departmentChoices)
            inquirer.prompt([
                {
                    name: "title",
                    message: "What is the name of the role?",
                },
                {
                    name: "salary",
                    message: "What is the desired salary of the role?",
                },
                {
                    type: "list",
                    name: "departments_id",
                    message: "What department does the role belong to?",
                    choices: departmentChoices
                }
            ])
                .then(roles => {
                    queries.createRoles(roles)
                        .then(() => console.log(`Added ${roles.title} to database`))
                        .then(() => startPrompt())
                })
        }
        )
};


// Add an employee
function addEmployee() {
    queries.viewRoles()
        .then(([rows]) => {
            let departments = rows;
            const departmentChoices = departments.map(({ id, title }) => ({
                name: title,
                value: id, 
            }))
            console.log(departmentChoices)
    inquirer.prompt([
        {
            name: "first_name",
            message: "What is the employee's first name?",
        },
        {
            name: "last_name",
            message: "What is the employee's last name?",
        },
        {
            type: "list",
            name: "roles_id",
            message: "What role does the employee belong to?",
            choices: departmentChoices
        }
    ])
    .then(employees => {
        queries.addEmployee(employees)
        .then(() => console.log("Employee added to database"))
        .then(() => startPrompt());
    })
})
};


// Update an employee role
function updateEmployeeRole() {
    let employeeChoices = [];
    let roleChoices = viewAllRoles;
    queries.viewEmployees()
    .then(([rows]) => {
        let departments = rows;
        const departmentChoices = departments.map(({ id, title}) => 
        ({
            name: title,
            value: id,
    }))
        console.log(departmentChoices);
        employeeChoices = departments.map(({ id, first_name, last_name}) =>
        ({
            name: `${first_name} ${last_name}`,
            value: id,
        }));
    })
    .then(() => {
    inquirer.prompt([
        {
            type: "list",
            name: "employee_id",
            message: "Which employee's role do you want to update?",
            choices: employeeChoices
        },
        {
            type: "list",
            name: "roles_id",
            message: "What new role do you want to assign to this employee?",
            choices: roleChoices
        }
    ])
    .then(employees => {
        queries.updateEmployeeRole(employees)
        .then(() => console.log("Employee role updated in database"))
        .then(() => startPrompt());
    });
});
};

//Call to start app
init();