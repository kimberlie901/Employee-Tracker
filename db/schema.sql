-- Drops the database if it exists

DROP DATABASE IF EXISTS employeeTracker;

-- Creats the database

CREATE DATABASE employeeTracker;

-- Uses the employeeTracker database

USE employeeTracker;

-- Creats the departments table inside the employeeTracker database

CREATE TABLE
    department (
        id INT AUTO_INCREMENT PRIMARY KEY,
        department_name VARCHAR(30) NOT NULL
    );

-- Creats the roles table inside the employeeTracker database

CREATE TABLE
    roles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        department_id INT NOT NULL,
        CONSTRAINT departmentKey FOREIGN KEY (department_id) REFERENCES department(id)
    );

-- Creats the employees table inside the employeeTracker database

CREATE TABLE
    employees (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        role_id INT,
        manager_id INT NULL
    );

-- SELECT id, last_name FROM employees;