// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log("generating Batch for ", license);

  switch (license) {
    case "GNU":
      // return "https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3NmFlNDM5Y2QucG5nJnZlcnNpb249MDAwMCZzaWc9NDQ0MzgxMTNmN2U3NDliM2U1MGE2ZjNkNzA2YzU5NDA.png";
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "Apache":
      return " [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)   ";
      break;
    case "Mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    default:
      return "nothing";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
//   switch (license) {
//     case "GNU":
//       // return "https://www.whitesourcesoftware.com/wp-content/media/2021/04/aHViPTcyNTE0JmNtZD1pdGVtZWRpdG9yaW1hZ2UmZmlsZW5hbWU9aXRlbWVkaXRvcmltYWdlXzVjNDk3NmFlNDM5Y2QucG5nJnZlcnNpb249MDAwMCZzaWc9NDQ0MzgxMTNmN2U3NDliM2U1MGE2ZjNkNzA2YzU5NDA.png";
//       return "This Software is protected By the GNU liense , click on the badge on the top to read the full license";
//       break;
//     case "Apache":
//       return " This Software is protected By the Apache GPL  , click on the badge on the top to read the full license ";
//       break;
//     case "Mit":
//       return "This Software is protected By the MIT License, click on the badge on the top to read the full license";
//       break;
//     default:
//       return "nothing";
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

##  Description 
${data.description} 

---
###  Table of Content 
 * [install](#Install-Instructions)
 * [Usage Information](#Usage-Information)
 * [Contribution guidelines](#Contributing-to-the-project)
 * [Test instructions](#Test-Instruction)
 * [Questions](#Questions)
---
## Install Instructions
${data.install}

## Usge Information 

${data.usage}

## Licience 

This repo is protected by the ${data.license} click on the badge on the top to get full information about this liciense 


## Contributing to the project 

${data.contrib}


## Test Instruction 

${data.test}

## Questions 

For further questions contact the maintainer of this repo at  ${data.email} 

The Github id of the maintainer is ${data.github}




`;
}

export { generateMarkdown, renderLicenseBadge, renderLicenseLink };
