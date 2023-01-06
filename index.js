// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, JSON.stringify(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule(questions).then((response) => {
        console.log(response);
        writeToFile("README.md", response);
    })
}

// Function call to initialize app
init();
