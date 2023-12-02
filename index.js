// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "1+1",
  },
  {
    type: "input",
    name: "description",
    message: "2+2",
  },
  {
    type: "list",
    name: "license",
    message: "3+3",
    choices: ['MIT','HELLO', 'N/A']
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err, result) => {
    if (err) throw err;
    console.log("file created!!!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
init();
