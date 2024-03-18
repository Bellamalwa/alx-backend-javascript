import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Bind all routes to the app instance passed in as parameter and export the router.
 * @param {Express} app - Express application instance.
 * @author Christabel <https://github.com/Bellamalwa>
 */

const mapRoutes = (app) => {
  // Homepage route (GET) - /
  app.get('/', AppController.getHomepage);
  // Get all students (GET) - /students
  app.get('/students', StudentsController.getAllStudents);
  // Get all students by major (GET) - /students/:major (e.g. /students/CS)
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes; // Export the router to be used in the server.js file.
module.exports = mapRoutes;
