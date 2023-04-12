/* Tables I need */

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL /* to hold department name */
)

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY
    title VARCHAR(30) NOT NULL /* to hold role title */
    salary DECIMAL NOT NULL /* to hold role salary */
    department_id INT NOT NULL /* to hold reference to department role belongs to */
)

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY 
    first_name VARCHAR(50) NOT NULL /* to hold employee first name*/
    last_name VARCHAR(50) NOT NULL /* to hold employee last name */
    role_id INT /* to hold reference to employee role */
    manager_id INT NOT NULL /* to hold reference to another employee that is the manager of the current employee */
)