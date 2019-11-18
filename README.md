# 01_NodeJS

## Introduction
I can now access my HTTP 'server' with the localhost:1337 and it has a short output text saying "Bonjour tout le monde !".
Two files are needed for that operation: index.js and handles.js

## index.js
Firstly, we import http and  Node url module with require:
const http = require('http')
const handles = require('./handles')

Then we create the server with:
const server = http.createServer(handles.serverHandle);

and link it to the port 1337 (localhost:1337):
server.listen(1337, "127.0.0.1") 'http.createServer' 

## handles.js
handles.js: In the handles file, we define the server's callback function.
An If-Statement proceeds to render the side with

if (path === '/Bonjour' && 'Name' in params) {

      if(params['Name'] == 'Niklas'){
        res.write('Bonjour ' + params['Name'] + ' How is it going?')
      }
    } 
    
    else {
      res.write('Bonjour tout le monde')
    }  

The if statement handles on default (http://localhost:1337), that the page displays 'Bonjour tout le monde',
if the url path is http://localhost:1337/Bonjour?Name=Niklas, it displays "Bonjour Niklas How is it going?".

Author: Niklas JOHANNESMEIER
