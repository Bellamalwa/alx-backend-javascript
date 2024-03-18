/**
 * This is the main controller for the application. It is the "hub" of the
 * application, in that virtually all requests for data or HTML from the
 * server pass through this controller.
 * @author Christabell <https://github.com/Bellamalwa>
*/
class AppController { // Class to handle the main controller
  static getHomepage(request, response) { // Function to handle the root route
    response.status(200).send('Hello Holberton School!'); // Send a response to the client
  } // End of the function to handle the root route
}

export default AppController;
module.exports = AppController;
