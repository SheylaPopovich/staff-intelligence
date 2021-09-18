const mysql = require('mysql2');
const inquirer = require('inquirer');


const chalk = require('chalk');
const { response } = require('express');


let ownerOptions = ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Roles", "View All Departments", "Add Department", "Quit"];



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
    case "View All Employees":
      viewAllEmployees()

      break;
  
    default: console.log("this is the default")  //THIS IS THE ELSE IN IF STATEMENT:
      // code block

  }


  console.log(answer.task);
});
}

function viewAllEmployees () {
   connection.query("SELECT * FROM employee;", (err, response) => {
     if (err) throw err
     console.table(response)
     startPrompt()
   })
}

//  first_name VARCHAR(100) NOT NULL, 
last_name VARCHAR(100) NOT NULL, 
role_id INT, 
manager_id INT, 

.then 
//google how to inset into a sequal statement 

 