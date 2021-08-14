// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./utils/page-template');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'project_title',
    message: 'What is the name of your project?',
    validate: project_title => {
      if (project_title) {
        return true;
      } else {
        console.log('You need to enter a project name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description_input',
    message: 'Provide a description of the project',
    validate: description_input => {
      if (description_input) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation_instructions',
    message: 'Provide installation instructions?',
    validate: installation_instructions => {
      if (installation_instructions) {
        return true;
      } else {
        console.log('installation instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage_information',
    message: 'Provide usage information:',
    validate: usage_information => {
      if (usage_information) {
        return true;
      } else {
        console.log('usage information!');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for the application',
    choices: ['Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 3-Clause',
    'Mozilla Public License 2.0','The Unlicense']
  },
  {
    type: 'input',
    name: 'contribution_guidelines',
    message: 'Provide the contribution guidelines?',
    validate: contribution_guidelines => {
      if (contribution_guidelines) {
        return true;
      } else {
        console.log('contribution guidelines!');
        return false;
      }
    }
  },  {
    type: 'input',
    name: 'test_instructions',
    message: 'Provide any test instructions?',
    validate: test_instructions => {
      if (test_instructions) {
        return true;
      } else {
        console.log('test instructions!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'GitHub_username',
    message: 'Enter your GitHub Username',
    validate: GitHub_username => {
      if (GitHub_username) {
        return true;
      } else {
        console.log('Please enter your GitHub Username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email_address',
    message: 'Enter email_address',
    validate: email_address => {
      if (email_address) {
        return true;
      } else {
        console.log('You need to enter an email_address!');
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./output/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
  try{
    return inquirer.prompt(questions)
      .then(projectData => {
        return generatePage(projectData);
      })
      .then(pageMD => {
        return writeFile(pageMD);
      });
     
    } catch (err) {
      console.error("Error creating README. File not created.");
      console.log(err);
  };
};

// Function call to initialize app
init()







