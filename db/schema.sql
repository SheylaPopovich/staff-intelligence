DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;



CREATE TABLE department (
    id INT PRIMARY KEY ,
    name VARCHAR(30)
);



CREATE TABLE role (
    title VARCHAR(30), 
    id INT PRIMARY KEY,
    department_id INT,
    salary DECIMAL
    
);



CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INT, 
    manager_id INT 
);

