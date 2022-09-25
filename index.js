// TODO: Include packages needed for this application
//3rd party package
const inquirer = require('inquirer');
//Built in Package
const fs = require('fs');
//Custom Package
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: 'input',
//         message: 'What is the Title of your project',
//         name: 'projTitle',
//     },
//     {
//         type: 'input',
//         message: 'Please enter a description of your project:',
//         name: 'description'
//     },
//     {
//         type: 'input',
//         message: 'Please enter installation instructions for your project:',
//         name: 'installInstruc'
//     },
//     {
//         type: 'input',
//         message: 'Please enter usage information:',
//         name: 'usageInfo',
//     },
//     {
//         type: 'input',
//         message: 'Please enter contribution guidleines:',
//         name: 'guidelines',
//     },
//     {
//         type: 'input',
//         message: 'Please enter test instructions for your project:',
//         name: 'testInstruc',
//     },
//     {
//         type: 'input',
//         message: 'Please enter your GitHub username:',
//         name: 'Github',
//     },
//     {
//         type: 'input',
//         message: 'Please enter your email address:',
//         name: 'Email',
//     },
//     {
//         type: 'list',
//         choices: ['license1', 'license2', 'license3', 'license4'],
//         name: 'license',
//     },
// ];

// TODO: Create a function to write README file
//this function takes has 2 parameters: fileName(used to name the file to generate), and the data to fill in the fileName
function writeToFile(fileName, data) {
    // this writeFile will completely create a new file every time this function is called
    // the data used to fill the fileName will be pulled from the generateMarkdown function from generateMarkdown.js
    //the error function parameter(in e6) will check if there is an error in writing or creating the file, if so then there will be an error message to the console, if not then there will be a Success message in the console
    
    //fs is an package, writeFile is a method
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log("Success!");
    })
}

// TODO: Create a function to initialize app
function init() {
    //inquirer package with the prompt method lists an array of questions for the input to respond to
    inquirer
    .prompt([
    {
        type: 'input',
        message: 'What is the Title of your project?',
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
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'GitHub',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'Email',
    },
    {
        type: 'list',
        choices: ['GNU', 'MIT', 'Mozilla', 'Apache', 'None'],
        name: 'license',
    },
    //answers will grab all the response from the user and places it into the 
]).then((answers) => {
    writeToFile('README.md', answers);
})
}

// Function call to initialize app
init();
