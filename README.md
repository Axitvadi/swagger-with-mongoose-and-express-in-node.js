How to create a node js application

-- Goto your desired directory and create a folder
-- Folder creation command: mkdir "Folder Name"
-- Goto newly folder and type the command "npm init"


Add the following details:
package name: (first-app) first-app-node
version: (1.0.0)
description:
entry point: (index.js)
test command:
git repository:
keywords:
author: Axit vadi
license: (ISC) MIT

That's it. Now open the project in VS Code.


-- How to start the Nodejs application

command:
node index.js

where, index.js is the main file listed in the package.json file as the entry point of out application.

-- Register as a script to start the application:

{
  "name": "first-app-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js" 
  },
  "author": "Axit_vadi",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.2"
  }
}

Register the command start in the script section of the package.json file
then use "npm start" to serve the application