// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
//const markdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
  {
    //pass questions here
    name: `title`,
    type: `input`,
    message: `Please provide the title of your project`,
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("You need to enter a project title!");
        return false;
      }
    },
    //this will be the title of User's README
  },
  {
    name: `description`,
    type: `input`,
    message: `Please provide a description of your project in up to 3 sentences (Required)`,
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You need to enter a project description!");
        return false;
      }
    },
    //#description
  },
  {
    name: `Table of Contents`,
    type: `checkbox`,
    message: `What is included in your Table of Contents? (Check all that applies)`,
    choices: [
      "description",
      "usage",
      "lnstallation",
      "licenses",
      "credits",
      "contribution",
      "test",
      "username",
      "useremail",
      "profile",
      "questions",
    ],
    //when click on the links here, taken to corresponding section of rEADME
    //should we enter everything below here, with exception for user email, user name, and license markdown resources
  },
  {
    name: `usage`,
    type: `input`,
    message: `How will this project be used?`,
  },
  {
    name: `installation`,
    type: `input`,
    message: `What are the installation instructions for your project?`,
  },
  {
    name: `licenses`,
    type: `rawlist`,
    message: `What licenses are required with this project?`,
    choices: [`MIT`, `IBM`, `Open Data Commons`, `None from the list`],
    //code out
    // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    //the badge should be located near the top of readme
    //add to #licenses section, which explains what license this is under
  },
  {
    name: `credits`,
    type: `input`,
    message: `Who were the contributors of this project, if any? Please provide a link to their respective GitHub profies, along with any resources used.`,
  },
  {
    name: `contributions`,
    type: `input`,
    message: `Please share if you're open to contributions and what your requirements are for accepting them`,
  },
  {
    name: `test`,
    type: `input`,
    message: `Optional- if you'd like to provide a test example and ways to apply your project, please include here.`,
  },
  {
    name: `username`,
    type: `input`,
    message: `What is your GitHub username?`,
    //add it in the Questions section
  },
  {
    name: `useremail`,
    type: `input`,
    message: `What is your email address?`,
    //add to #questions
  },
  {
    name: `questions`,
    type: `input`,
    message: `How should people reach you with additional questions?`,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("README.md", data, (err) => {
        if (err) {
            console.log(err);
            // throw new Error(err);
            return;
          }
          console.log("You have successfully created a README file!");
    });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((responses) => {
    console.log(responses);
  });
};

//fs.appendFile(`${responses.title}.json`, JSON.stringify(responses, null, 2), err => {

// Function call to initialize app
init();

const generatePage = (username, title) => {
  return `
    <!DOCTYPE html> 
      <html lang="en"> 
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>README Project ${title}</title>
      </head>
    
      <body>
        <h1>${username}</h1>
        <h2><a href="https://github.com/${profile}">Github profile</a></h2>
      </body>
      </html>
      `;
};

// fs.writeFile('./index.html', generatePage(name, github), err => {
//       if (err) throw new Error(err);

//       console.log('README.md complete! Check out index.html to see the result!');
//     });

// fs.writeFile('index.html', generatePage(username, title), err => {
//     if (err) throw err;
//     console.log('README.md complete! Check out index.html to see the result!')
// });
