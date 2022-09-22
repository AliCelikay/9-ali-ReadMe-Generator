// TODO: Include packages needed for this application
const fs = require('fs');
// const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your project',
        name: 'projTitle',
    },
    {
        type: 'input',
        message: 'Please enter a description of your project:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please enter installation instructions for your project:',
        name: 'installInstruc'
    },
    {
        type: 'input',
        message: 'Please enter usage information:',
        name: 'usageInfo',
    },
    {
        type: 'input',
        message: 'Please enter contribution guidleines:',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'Please enter test instructions for your project:',
        name: 'testInstruc',
    },
    {
        type: 'list',
        choices: ['license1', 'license2'],
        name: 'license',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();





// ```md
// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections 
//entitled::: Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// ```
