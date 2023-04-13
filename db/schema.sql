DROP DATABASE IF EXISTS employeeTracker;

CREATE DATABASE employeeTracker;

USE employeeTracker;

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY
    dapartment_name VARCHAR(30) 
)

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY
    title VARCHAR(30) 
    salary DECIMAL 
    department_id INT 
)

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY 
    first_name VARCHAR(50) 
    last_name VARCHAR(50) 
    role_id INT 
    manager_id INT 
)