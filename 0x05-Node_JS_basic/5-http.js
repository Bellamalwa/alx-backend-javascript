const http = require('http'); // import http module
const fs = require('fs');

const PORT = 1245; // port number for the server to listen on
const HOST = 'localhost';
const DB_FILE = process.argv.length > 2 ? process.argv[2] : ''; // path to the database file

const app = http.createServer(); // create a server object with a request listener
/**
 * Counts the students in a CSV data file.
 * @param {String} Path The path to the CSV database file.
 * @author Christabel <https://github.com/Bellamalwa>
 */
// create a promise to count the students in the database file asynchronously
const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) { // if the path is empty or undefined then reject the promise with an error message
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      /**
       * if the data is not empty then resolve the promise with the data as a string and
       * the number of students
       */
      if (data) {
        const reportParts = [];
        const fileLines = data.toString('utf-8').trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) { // iterate over the lines of the file
          const studentRecord = line.split(','); // split the line into an array of fields
          // get the student's properties from the student record
          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          const studentEntries = studentPropNames.map((propName, idx) => [
            propName,
            studentPropValues[idx],
          ]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        // get the total number of students in the database file
        const totalStudents = Object.values(studentGroups).reduce(
          (pre, cur) => (pre || []).length + cur.length,
        );
        // add the total number of students to the report file
        reportParts.push(`Number of students: ${totalStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push([
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        resolve(reportParts.join('\n'));
      }
    });
  }
});

const SERVER_ROUTE_HANDLERS = [ // array of route handlers for the server
  {
    route: '/',
    handler(_, res) { // handler for the root route
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) { // handler for the /students route
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => { // if the promise is resolved then add the report to the response
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => { // if the promise is rejected then send an error message
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => { // add a request listener to the server
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});

app.listen(PORT, HOST, () => { // listen on port and host and print message to console
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
