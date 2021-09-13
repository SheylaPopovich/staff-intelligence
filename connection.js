const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');


const chalk = require('chalk');


let ownerOptions = ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Roles", "View All Departments", "Add Department", "Quit"];


const PORT = process.env.PORT || 3000;
const app = express();


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
    console.log(answer.task);
});
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
