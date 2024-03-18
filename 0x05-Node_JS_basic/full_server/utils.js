import fs from 'fs'; // import { readDatabase } from './utils.js';

// Read the database file and return the parsed JSON object
const readDatabase = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  if (path) {
    fs.readFile(path, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const fileLines = data
          .toString('utf-8') // convert Buffer to string
          .trim() // remove white spaces from both sides of a string
          .split('\n'); // split string into array of substrings
        const studentGroups = {}; // create an empty object to store the student groups
        // Get the field names from the first line of the file
        const dbFieldNames = fileLines[0].split(',');
        const studentPropNames = dbFieldNames
          .slice(0, dbFieldNames.length - 1);

        for (const line of fileLines.slice(1)) { // Skip the first line (field names)
          const studentRecord = line.split(','); // Split the line into an array of values
          // Get the student property values from the record
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1); // Skip the last value (group name)
            // Get the group name from the last value of the record
          const field = studentRecord[studentRecord.length - 1];
          // Check if the group name is not in the object yet (first time)
          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }
          // Create an array of [key, value] pairs for the student object
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          studentGroups[field].push(Object.fromEntries(studentEntries));
        }
        resolve(studentGroups); // Return the student groups object with the parsed data
      }
    });
  }
});

export default readDatabase; // export { readDatabase };
module.exports = readDatabase;
