const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache-brightgreen)";
  } else if (license == "MIT") {
    return "[![License](https://img.shields.io/badge/License-MIT-brightgreen)";
  } else if (license == "GPL") {
    return "[![License](https://img.shields.io/badge/License-GPL-brightgreen)";
  } else if (license == "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD-brightgreen)";
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "Apache") {
    return "[![License](https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "MIT") {
    return "[![License](https://opensource.org/licenses/MIT)";
  } else if (license == "GPL") {
    return "[![License](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "BSD") {
    return "[![License](https://opensource.org/licenses/BSD-3-Clause)";
  } else {
    return "";
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
  return `This project is covered under ${license} License.
  ${renderLicenseLink(license)}
  `
} else {
  return "";
}
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ${renderLicenseBadge()}

  ## Descritption
  ${data.description}
    
  ## Table of Contents
  - [Installation](#installation) 
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
    
  ## License
  ${renderLicenseSection(data.license)}
    
  ## Contribution
  ${data.contribution}
    
  ## Test
  ${data.test}
    
  ## Questions
  For any further Questions regarding this project, please reach me via email ${data.email} or contact me via GitHub (https://github.com/${data.questions})
  
    
    `;
};


// module.exports = generateMarkdown;
module.exports = generateMarkdown;