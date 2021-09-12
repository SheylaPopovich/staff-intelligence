const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;

const app = express();
const chalk = require('chalk');


let ownerOptions = ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Roles", "View All Departments", "Add Department", "Quit"];



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const db = mysql.createConnection(
  {
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: "free",
    database: 'employees_db'
  }
  );


db.connect(function(err) {
    if (err) throw err;
    console.log("Connected as Id" + db.threadId);
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

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);