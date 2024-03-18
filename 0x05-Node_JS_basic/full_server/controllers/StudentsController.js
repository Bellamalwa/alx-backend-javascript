import readDatabase from '../utils';

/**
 * The list of supported majors.
 */
const VALID_MAJORS = ['CS', 'SWE'];

/**
 * This function returns and displays of the number of students in the field,
 * and the list of first names (ordered by appearance in the database file).
 * @author: Christabell  <https://github.com/Bellamalwa>
 */
class StudentsController { // Class to handle the students controller
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath) // Read the database file and return a promise
      .then((studentGroups) => { // If the promise is resolved
        const responseParts = ['This is the list of our students'];
        // A comparison function for ordering a list of strings in ascending
        // order by alphabetic order and case insensitive
        const compareFunct = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        /** For each field in the student groups object (sorted by field name) and the
         * group of students in that field (sorted by first name).
         */
        for (const [field, group] of Object.entries(studentGroups).sort(compareFunct)) {
          responseParts.push([ // Add a new element to the response parts array
            `Number of students in ${field}: ${group.length}.`,
            'List:',
            group.map((student) => student.firstname).join(', '), // The list of first names
          ].join(' '));
        }
        response.status(200).send(responseParts.join('\n')); // Send a response to the client
      })
      .catch((err) => { // If the promise is rejected (an error occurred)
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  // Function to handle the route to get all students by major
  static getAllStudentsByMajor(request, response) {
    // The path to the database file (if any)
    const path = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params; // The major to filter by (if any)

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(path)
      .then((studentGroups) => { // If the promise is resolved (no error occurred)
        let responseText = ''; // The response text to send to the client

        if (Object.keys(studentGroups).includes(major)) { // If the major is in the database file
          const group = studentGroups[major]; // The group of students in the major
          responseText = `List: ${group.map((student) => student.firstname).join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController; // Export the class to be used in other files
module.exports = StudentsController;
