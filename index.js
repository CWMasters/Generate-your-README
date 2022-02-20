// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./src/page-template');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'project title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of the project!');
                    return false
                }
            }
        },
        {
            type: 'checkbox',
            name: 'Contents',
            message: 'Please select all/any elements to apply to your table of contents! (Required)',
            choices: ['installation', 'Usage', 'License', 'Contribution', 'Test', 'Questions']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What steps are required to install your project? (Required)',
            validate: installationInput => {
                if (installationInput) {
                    return true;
                } else {
                    console.log('Please enter a guide for installation!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide instructions and examples for use!'
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Did you use any licensing with you project?',
            default: true
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Select which License you used from the list',
            choices: ['Apache', 'MIT', 'GPL', 'BSD'],
            when : ({ confirmLicense }) => confirmLicense
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please add any contributors to the project (including yourself!)'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Provide tests for you application and examples of how to run them:'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please add your GitHub username and email to allow communication for additional questions'
        }
    ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser();