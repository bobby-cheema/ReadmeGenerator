#!/usr/local/bin/node
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
import inquirer from "inquirer";
import fs from "fs";
import {
  generateMarkdown,
  renderLicenseBadge,
} from "./utils/generateMarkdown.js";
//import {} from "./utils/generateMarkdown";

// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
//

// TODO: Create a function to initialize app

const App = async () => {
  const getdata = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Title for the Readme File",
    },

    {
      type: "input",
      name: "description",
      message: "Description ",
    },
    {
      type: "input",
      name: "install",
      message: "describe how can you install this Application  ",
    },
    {
      type: "input",
      name: "usage",
      message: "explain how to use this application",
    },
    {
      type: "input",
      name: "contrib",
      message: "Explain how to contribute to this repo  ",
    },
    {
      type: "input",
      name: "test",
      message: "explain how to test this Application ",
    },

    {
      type: "input",
      name: "github",
      message: "Add Github username ",
    },
    {
      type: "input",
      name: "email",
      message: "Enter your email",
    },

    {
      type: "checkbox",
      name: "license",
      message: "whats Type of license you want to add ",
      choices: ["GNU", "Apache", "Mit"],
    },
  ]);
  console.log(getdata);
  const Link = renderLicenseBadge(getdata.license[0]);

  //tofile(getdata);
  let template = `${Link}`;
  template += generateMarkdown(getdata);
  console.log(template);
  tofile(template);
};
const tofile = (data) => {
  fs.appendFile("Readme.md", data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Sucessfully appended to file ");
    }
  });
};

// Function call to initialize app
App();
