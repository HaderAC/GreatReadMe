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
:spiral_notepad:

* ${data.description}

## Installation Instructions

:keyboard:
:package:
* ${data.installation}

## Usage
:battery:

* ${data.usage}

## Contribution Guidelines
:link:

* ${data.contribution}

## Test Instructions
:open_book:

* ${data.test}

# License Information
:memo:
:pencil:

## ${data.license}

* ${data.license}

## Questions
:e-mail:

If you have further questions you can contact ${data.email}.\n
Github: ${data.github}
`

;

![screenshot](Assets/ScreenShot.png)


};


module.exports = generateMarkdown;
