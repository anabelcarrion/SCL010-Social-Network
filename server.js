//To run use $ node server.js
var express = require('express');
var app = express();
const port = 3000;

app.use(express.static(__dirname + '/src'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('Server express ready!');
});