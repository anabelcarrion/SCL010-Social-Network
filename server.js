//to run use $ node server.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/src'));

app.get('/', (Request, Response) =>{
    Response.sendfile(__dirname +'/index.html');
});

app.listen(port, () =>{
    console.log("pulento");
});