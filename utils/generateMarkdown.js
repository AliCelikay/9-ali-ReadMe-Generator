// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //this function generates a badge link for the user to display
  if (license === "GNU"){
    return 'https://img.shields.io/badge/License-GNU-red'
  }
  else if(license === "MIT") {
    return 'https://img.shields.io/badge/License-MIT-blue'
  }
  else if(license === "Mozilla") {
    return 'https://img.shields.io/badge/License-Mozilla-brightgreen'
  }
  else if(license === "Apache") {
    return 'https://img.shields.io/badge/License-Apache-orange'
  }
  else{
    return ''
  }
  
 }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //this is for the license link, it will appear on the badge and once the user clicks on the badge it will take them to the license page
  // I couldn't figure out what a link is or where to find it


 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //this function is for the display of the license section inside of the m, you will need to acall this function in the readmegen function in order to display the license
  let badge = renderLicenseBadge(license);

  if(badge){
    return `![License](${badge})`
  }
  else{
    return ''
  }
  
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# Project Title: ${data.projTitle}
  
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contacts](#contacts)

  ## License:
  ${renderLicenseSection(data.license)}
  ### Notice

  ## Description
  ${data.description}

  ## Installation
  ${data.installInstruc}

  ## Usage
  ${data.usageInfo}

  ## Contributing
  ${data.guidelines}

  ## Tests
  ${data.testInstruc}

  ## Contacts
  ### GitHub: 
  https://github.com/${data.GitHub}
  ### Email:
  ${data.Email}

`;
}

module.exports = generateMarkdown;
