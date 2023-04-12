/* Database for tables */

INSERT INTO departments (department_name)
VALUES [
    ("Human Resources"),
    ("Marketing"),
    ("Consulting"),
    ("Finance"),
    ("Legal"),
    ("Engineering"),
    ("Accounting"),
]

INSERT INTO roles (title, salary, department_id)
VALUES [
    ("Human Resources Manager", 120000, 1),
    ("Marketing Analyst", 70000, 2),
    ("Management Consultant", 108000, 3),
    ("Investment Banker", 140000, 4),
    ("Account Executive", 183000, 4),
    ("Tech Lawyer", 158000, 5),
    ("Software Engineer", 150000, 6),
    ("Web Developer Engineer", 89000, 6),
    ("Cyber Security Engineer", 127000, 6),
    ("Financial Controller", 127000, 7),
]

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES [
    ("Naruto", "Uzumaki"),
    ("Itachi", "Uchiha"),
    ("Neji", "Hyuuga"),
    ("Jiraiya", "Sannin"),
    ("Minato", "Namikaze"),
    ("Kushina", "Uzumaki"),
    ("Hinata", "Hyuuga"),
    ("Sakura", "Haruno"),
    ("Ino", "Yamanaka"),
    ("Tsunade", "Sannin"),
]