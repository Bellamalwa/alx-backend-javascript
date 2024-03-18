// Simple node http server
const http = require('http');
/**
 * Creates a simple http server.
 * @param {String} port The port to listen to.
 * @param {String} host The host to listen to.
 * @param {Function} callback The callback function to execute.
 * @author Christabell  <https://github.com/Bellamalwa>
 */

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer(); // create server object with http module

app.on('request', (_, res) => { // listen for request event on server object
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain'); // set response header content type
  res.setHeader('Content-Length', responseText.length); // set response header content length
  res.statusCode = 200; // set response status code to 200
  res.end(responseText); // end response with response text string
});

app.listen(PORT, HOST, () => { // listen for server object on port 1245
  console.log(`Server listening on ${HOST}:${PORT}`); // log server listening message
});

module.exports = app;
