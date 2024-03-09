DROP DATABASE IF EXISTS hr_db;
CREATE DATABASE hr_db;

USE hr_db;
-- Department table
CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- Role table
CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Employee table
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);

-- Insert sample data into the department table
INSERT INTO department (id, name) VALUES
(1, 'Human Resources'),
(2, 'IT Department'),
(3, 'Finance Department');

-- Insert sample data into the role table
INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'HR Manager', 80000.00, 1),
(2, 'Software Developer', 90000.00, 2),
(3, 'Financial Analyst', 75000.00, 3);

-- Insert sample data into the employee table
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'John', 'Doe', 1, NULL),
(2, 'Jane', 'Smith', 2, 1),
(3, 'Bob', 'Johnson', 3, 1),
(4, 'Alice', 'Williams', 2, 1);

-- Commit the transaction
