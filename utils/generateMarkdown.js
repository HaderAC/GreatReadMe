// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

## Table of Contents
1. [Description](#description)
2. [Installation Instructions](#installation-instructions)
3. [Usage](#usage)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Test Instuctions](#test-instructions)
6. [License Information](#license-information)
7. [Questions](#questions)


## Description
:computer:
* ${data.description}

## Installation Instructions
:keyboard:
* ${data.installation}

## Usage

* ${data.usage}

## Contribution Guidelines

* ${data.contribution}

## Test Instructions

* ${data.test}

# License Information

### ${data.license}

* ${data.license}

## Questions

If you have further questions you can contact ${data.email}.\n
Github: ${data.github}
`;
};


module.exports = generateMarkdown;
