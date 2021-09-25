const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();

const chalk = require('chalk');
const { response } = require('express');
// const { response } = require('express');


let ownerOptions = ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Quit"];

//create connection to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: 'employees_db'
  },
  console.log(`Connected to the employees_db database.`)
  );


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected as Id" + connection.threadId);
    startPrompt();
});


//create prompts for Employee app 
function startPrompt() {
console.log(chalk.blue.bold(`===========================================================
          🎇✨ Welcome to Staff Intelligence ✨🎇
    ===================================================
    Where you can view and manage your company employees 
    ===================================================
       to better organize your company successfully!
    ===================================================`));
    
inquirer.prompt([{
    name: "task",
    type: "list",
    message: "What would you like to do?",
    choices: ownerOptions,
},
])
.then ((answer) => {
  switch(answer.task) {
    case "View All Departments":
    viewAllDepartments();
    break;

    case "View All Roles":
      viewAllRoles();
      break;


    case "View All Employees":
      viewAllEmployees();
      break;


      case "Add Department":
        addDepartment();
    break;

    case "Add Role":
      addRole ();
      break; 

    default: console.log("this is the default");//THIS IS THE ELSE IN IF STATEMENT:
      // code block
  }
  console.log(answer.task);
});
}

//functions to select each table 
function viewAllDepartments () {
  connection.query("SELECT * FROM department;", (err, response) => {
    if (err) throw err;
    console.table(response);
    startPrompt();
   });
}

function viewAllRoles () {
  connection.query("SELECT * FROM role;", (err, response) => {
    if (err) throw err;
    console.table(response);
    startPrompt();
  });
}

function viewAllEmployees () {
   connection.query("SELECT * FROM employee;", (err, response) => {
     if (err) throw err;
     console.table(response);
     startPrompt();
   });
}

// *****function to add to each table****
function addDepartment () {

    inquirer.prompt([
      {
        type: 'input',
        name: 'newDepartment',
        message: 'What department would you like to add?',
      }
    ])
    .then( (response) => {
      connection.query ("INSERT INTO department (name) VALUES (?);", [response.newDepartment], (err, res) => {
        if (err) throw err;
        console.log(response);
        startPrompt();
      });
    });

}

 

function addRole () {

  inquirer.prompt([
    {
      type: 'input',
      name: 'newRole',
      message: 'What role would you like to add?'
    },
    {
      type: 'input',
      name: 'newSalary',
      message: 'What is the employee salary?'
    },
    {
      type: 'input',
      name: 'newDepartmentId',
      message: 'What is the Department ID?'
    }
  ]).then((response) => {
  connection.query('INSERT INTO role set ?',{
    title: response.newRole,
    salary: response.newSalary,
    department_id: response.newDepartmentId,
  },  (err, res) => {
    if (err) throw err;
    console.log(response);
    startPrompt();
  });
  });
}


//ADD EMPLOYEE FUNCTION
function addEmployee () {

  inquirer.prompt([
    {
      type: 'input',
      name: 'newFirstName',
      message: 'What is the employees first name?'
    },
    {
      type:'input',
      name: 'newLastName',
      message: 'What is the employees last name?'
    },
    {
      type: 'list',
      name: 'newEmpRole',
      message: 'What is the employees role?',
      choices: 'Business Development Manager',
      'Business Development Representative',
      'Marketing Executive',
      'Marketing Specialist',
      'Sales Engineer',
      'Chief Architect',
      'Software Architect',
      'Engineering Fellow',
      'Customer Experience Specialist',
      'Service Agent'
    },
    {
      type: 'input',
      name:'newEmpManager',
      message: "Who is the employees manager?"
    }
  ]). then ((response) =>{
    connection.query ('INSERT INTO employee set ?'. {
      first_name: response.newFirstName,
      last_name: response.newLastName,
      role_id: response.newEmpRole,
      manager_id: response.newEmpManager,
    },  (err, res) => {
      if (err) throw err;
      console.log(response);
      startPrompt();
  });
  });
}

//TRY TO UPDATE EMPLOYEE ROLE FUNCTION
