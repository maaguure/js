// Assignment Four
/*
Q1: Create a new project folder:
- Create a file called “app.js”.
- Initialize an app & create a package.json file.
- The “author” field should contain your name.
- The “main” field should point to “app.js”.
*/

console.log(" 1st - npm init  - then look to the information in package.json ");


/*
Q2: Install packages:
- Install the package “pino” at latest version.
- Install the package “standard” as development dependency at latest version.
- Install the package “lodash” at version “4.17.0”.
*/
//Answers 
// - npm install pino
//- npm install --save-dev standard
// npm install lodash@4.17.0


/*
Q3: Create a module:
- Create a module called “calculator”.
- It should have 2 functions, “function add” & “function sub”.
- Both functions should take 2 arguments, and return a+b OR a-b.
- Export the functions in the module.
- Import the functions in your “app.js” and use both functions
*/
// Answer Q3

// Importing the  module with the below statement
const calculator = require('./calculator');


console.log("Addition of the  two numbers is "  + calculator.add(4, 5));

console.log("Subtraction of the two numbers is "  + calculator.sub(10, 5));