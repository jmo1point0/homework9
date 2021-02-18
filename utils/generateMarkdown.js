// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

return `# Project Title: ${data.title}

## Description: ${data.description}

# Table of Contents:
*[Installation](#installation)
*[Usage](#usage)
*[License](#license)
*[Contributions](#contribution)
*[Test](#test)
*[Questions](#questions)


## [GitHub Link](http://github.com/${data.github})

** [GitHub Profile](${data.gitHubP}) **

## Installation:
 ${data.installation}    

 ## Usage:
 ${data.usage}

 ## License:
 ${renderLicenseSection(data.license)}

 ## Contributing:
 ${data.contribution} 

 ## Test:
 ${data.test}

 ## Questions:
 
Reach out to me on my GitHub page at the following Link:
 -[GitHub Profile](https://github.com/${data.github})    
 Or by email: ${data.email}
 
 # ![Image](./READMEpictureREADME.PNG)

 # ![Image](./READMEtesting.PNG)

`;
}

module.exports = generateMarkdown;




 


