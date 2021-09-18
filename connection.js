const mysql = require('mysql2');
const inquirer = require('inquirer');

const chalk = require('chalk');
const { response } = require('express');
// const { response } = require('express');


let ownerOptions = ["View All Departments", "View All Roles", "View All Employees", "Add Department", "Add Role", "Add Employee", "Update Employee Role", "Quit"];

//create connection to database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: "Christ303!",
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
    if (err) throw err
    console.table(response)
    startPrompt()
   });
};

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


//*****function to add to each table****
// function addDepartment () {
//   const newDepartment = () =>{
//     inquirer.prompt([
//       {
//         type: 'input',
//         name: 'newDepartment',
//         message: 'What department would you like to add?',
//       }
//     ]);
//   };
// }
// .then(  
//   connection.query ("INSERT INTO department (department_name) VALUES (?);", [response.department_name]);
//   if (err) throw err;
//      console.table(response);
//      startPrompt();
// );

 