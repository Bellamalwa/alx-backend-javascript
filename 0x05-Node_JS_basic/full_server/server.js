import express from 'express'; // import express module
import mapRoutes from './routes'; // import routes module

const app = express(); // create express application instance
const PORT = 1245; // define port number for server to listen on
const HOST = 'localhost'; // define host name for server to listen on

mapRoutes(app); // map routes to express application instance
app.listen(PORT, () => { // start server and listen on defined port
  console.log(`Server listening at http://${HOST}:${PORT}`); // log server start message
});

export default app; // export express application instance
module.exports = app;
