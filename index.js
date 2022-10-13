const inquire = require("inquirer");
const fs = require("fs");

const generateHTML = ({ name, location, github, linkedIn }) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Generator</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
     <div class="container">
        <h1 class="display-4">My name is ${name}</h1>
        <p class="lead">I am from ${location}</p>
        <h3>Example heaing <span class="bagde badge-secondary">Contact Me</span></h3>
        <lu class="lsit-group">
        <li class="list-group-item">My Github username ${github} </li>
        <li class="list-group-item">LinkedIn:${linkedIn} </li>
        </lu>
        </div>
    </div>
</body>
</html>`;

inquire
.prompt([
    {
        type: "input",
        name: "name",
        message: "what is you name?",
    },
    {
        type: "input",
        name: "location",
        message: "where you from?",
    },
    {
        type: "input",
        name: "food",
        message: "what is your favorite food",
    },
    {
        type: "input",
        name: "hobby",
        message: "what is your favorite hobby?",
    },
    {
        type: "input",
        name: "github",
        message: "what is your github username?",
    },
    {
        type: "input",
        name: "linkedIn",
        message: "what is your linkedIn username?",
    },
    
])

.then((resposne) => {
    const htmlPageContent = generateHTML(resposne);
 
    fs.writeFile("index.html", htmlPageContent, (err) => 
    err ? console.log(err) : console.log("Successfully created index.html!")
    );
});


