// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `![GitHub license](https://img.shields.io/badge/license-${encodeURI(license)}-orange)`
}

// Create a function to generate markdown for README
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

 # [Vimeo Link](https://vimeo.com/513644649/719843b682) 
 # Description: A link to a brief walkthrough video that demonstrates the functionality of the README generator, which will take you from start to finish. 

`;
}

module.exports = generateMarkdown;




 


