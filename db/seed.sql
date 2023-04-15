/* Database for tables */

INSERT INTO departments (departments_name)
VALUES ("Human Resources"), ("Marketing"), ("Consulting"), ("Finance"), ("Legal"), ("Engineering"), ("Accounting");

INSERT INTO roles (title, salary, departments_id)
VALUES
    ("Human Resources Manager", 120000, 1),
    ("Marketing Analyst", 70000, 2),
    ("Management Consultant", 108000, 3),
    ("Investment Banker", 140000, 4),
    ("Account Executive", 183000, 4),
    ("Tech Lawyer", 158000, 5),
    ("Software Engineer", 150000, 6),
    ("Web Developer Engineer", 89000, 6),
    ("Cyber Security Engineer", 127000, 6),
    ("Financial Controller", 127000, 7);


INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES 
 ("Naruto", "Uzumaki", 9, NULL), ("Itachi", "Uchiha", 5, NULL), ("Neji", "Hyuuga", 7, NULL), ("Steven", "Yeun", 8, NULL), ("Spirited", "Away", 3, 7), ("Mia", "Thermopolis", 8, NULL), ("Hinata", "Hyuuga", 1, NULL), ("John", "Tucker", 8, 2), ("Harry", "Potter", 2, NULL), ("Ariana", "Grande", 4, NULL), ("Drake", "Graham", 6, NULL), ("Beyonce", "Knowles", 7, 5), ("Nicki", "Minaj", 9, 1), ("Snoh", "Aalegra", 4, 7);
