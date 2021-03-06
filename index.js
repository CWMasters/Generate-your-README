// TODO: Include packages needed for this application

// const fs = require ('fs');
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFile = require('./utils/generate-input.js');


// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'projectTitle',
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
            name: 'contents',
            message: 'Please select all/any elements to apply to your table of contents!',
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
            message: 'Please enter you GitHub User name: (Required)',
            validate: questionsInput => {
                if (questionsInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter you email to allow further communication or additional questions: (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false
                }
            }
        },
    ])
};



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

promptUser()
  .then(response => generateMarkdown(response))
  
  .then(readmeInput => {
    return writeFile(readmeInput);
  })
//   .then(pageREADME => {
//     return writeFile(pageREADME);
//   })
.catch(err => {
    console.log(err);
});
 



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// promptUser();