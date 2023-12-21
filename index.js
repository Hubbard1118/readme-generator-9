const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
  {
    name: "title",
    type: "input",
    message: "What is the title of your project?",
  },
  {
    name: "description",
    type: "input",
    message: "Describe what your application/project will accomplish:",
  },
  {
    name: "Table of Contents",
    type: "input",
    message: "Please provide a table of contents:",
  },
  {
    name: "Installation",
    type: "input",
    message: "Please provide instructions for installation:",
  },
  {
    name: "Usage",
    type: "input",
    message: "Please provide usage instructions:",
  },
  {
    name: "Contributors/Authors",
    type: "input",
    message: "Please provide contributor/author name(s):",
  },
  {
    name: "Tests",
    type: "input",
    message: "Please provide any tests used for this project:",
  },
  {
    name: "license",
    type: "list",
    message: "Please choose a license",
    choices: ['MIT','Apache License 2.0', 'Mozilla Public License 2.0', 'GNU General Public License', 'N/A']
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
function startUp() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", generateMarkdown(answers));
  });
}

// Function call to initialize app
startUp();
