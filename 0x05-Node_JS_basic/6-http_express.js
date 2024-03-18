const express = require('express'); // import express module (instead of http)

const app = express(); // create express app
const PORT = 1245; // port number to listen on
const HOST = 'localhost'; // hostname to listen on

app.get('/', (_, res) => { // handle GET requests to root path with callback function
  res.send('Hello Holberton School!');
});

app.listen(PORT, () => { // listen on port and print message to console
  console.log(`Server listening at http://${HOST}:${PORT}`);
});

module.exports = app;
