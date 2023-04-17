-- Drops the database if it exists

DROP DATABASE IF EXISTS employeeTracker;

-- Creats the database

CREATE DATABASE employeeTracker;

-- Uses the employeeTracker database

USE employeeTracker;

-- Creats the departments table inside the employeeTracker database

CREATE TABLE
    departments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        departments_name VARCHAR(30) NOT NULL
    );

-- Creats the roles table inside the employeeTracker database

CREATE TABLE
    roles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(30) NOT NULL,
        salary DECIMAL NOT NULL,
        departments_id INT NOT NULL,
        CONSTRAINT departmentKey FOREIGN KEY (departments_id) REFERENCES departments(id)
    );

-- Creats the employees table inside the employeeTracker database

CREATE TABLE
    employees (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        roles_id INT,
        manager_id INT NULL
    );