const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    "Title of Project", "Project Description", "Table of Contents", "Intallation", "Usage", "License", "Contributing", "Tests", "Questions"];


//function to write ReadMe

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("Generetaing README file...");
    });
}

//function to initialize program

function init() {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the title of the project?",
            },
            {
                name: "description",
                type: "input",
                message: "Enter description of project",
            },
            {
                name: "installation",
                type: "input",
                message: "Installation instruction",
            },
            {
                name: "usage",
                type: "input",
                message: "Enter usage instruction",
            },
            {
                name: "contribution",
                type: "input",
                message: "contribution guidelines",
            },
            {
                name: "test",
                type: "input",
                message: "test instructions",
            },
            {
                name: "license",
                type: "list",
                message: "Choose a license",
                choices: ["No license", "Apache", "Boost", "BSD", "Creative Commons", "Eclipse", "GNU", "IBM", "ISC", "Mozilla", "Open Data Common", "Perl", "Unlicense"],
                default: "No license",
            },
            {
                name: "licenseInfo",
                type: "input",
                message: "Enter details about license",
            },
            {
                name: "github",
                type: "input",
                message: "Enter github",
            },
            {
                name: "email",
                type: "input",
                message: "Enter E-mail address"
            }


        ])
        .then(answers => {
            let markdown = generateMarkdown(answers);
            writeToFile("./README_files/README.md", markdown);
        })

}

// function call to initialize program

init();