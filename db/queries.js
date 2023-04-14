const connection = require("./connection");

class employeeTrackerDB {
    constructor(connection) {
        this.connection = connection;
    }
    // View all departments
    viewDepartments() {
        return this.connection.promise().query (
            "SELECT department.name, department.id from department"
        );
    }
    // View all roles
    viewRoles() {
        return this.connection.promise().query (
            "SELECT role.title, role.id, department.name, role.salary FROM role LEFT JOIN department on role.department_id = department.id"
        );
    }
    // View all employees
    viewEmployees() {
        return this.connection.promise().query (
            "SELECT * FROM employees"
        )
    }
}





// Add a department

// Add a role

// Add an employee 

// Update an employee role 
