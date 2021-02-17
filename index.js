//Packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
const path = require = require("path");

//Array of Questions
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'gitHubP',
        message: 'Please enter the link to your GitHub profile'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain how your project is used'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Explain how your project is tested'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines'
    },
    {
        type: 'list',
        name: 'license',
        choices: ["MIT", "Apache 2.0", "BSD 3", "GPL 3.0", "None"],
        message: 'What kind of license should your project have?'
    }
];

//To write README file using the user INPUT
const writeToFile = (fileName, data) => {
   // console.log("Writing file ..")
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
//Function to initialize the application
const init = async () => {
    let inquirerResponses = await inquirer.prompt(questions);
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses }));
};
   

init();