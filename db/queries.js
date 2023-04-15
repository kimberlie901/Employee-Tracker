const connection = require("./connection");

class employeeTrackerDB {
    constructor(connection) {
        this.connection = connection;
    }
    // View all departments
    viewDepartments() {
        return this.connection.promise().query (
            "SELECT * from departments"
        );
    }
    // View all roles
    viewRoles() {
        return this.connection.promise().query (
            "SELECT roles.title, roles.id, departments.departments_name AS departments, roles.salary from roles LEFT JOIN departments on roles.departments_id = departments.id"
        );
    }
    // View all employees
    viewEmployees() {
        return this.connection.promise().query (
            "SELECT * FROM employees"
        );
    }
    // Add a department
    addADepartment(departments) {
        return this.connection.promise().query ("INSERT INTO departments SET ?", departments);
    }
    // Add a role
    createRoles(roles) {
        return this.connection.promise().query("INSERT INTO roles SET?", roles);
    }
    // Add an employee 
    addEmployee(employees) {
        return this.connection.promise().query("INSERT INTO employees SET ?", employees);
    }
    // Update an employee role 
    updateEmployeeRole(employee_id, role_id) {
        return this.connection.promise().query("UPDATE employee SET role_id ? WHERE id = ?", employee_id, role_id);
    }
}




module.exports = new employeeTrackerDB(connection);