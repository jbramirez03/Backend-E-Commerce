const router = require('express').Router();
// Import all of the routes in the api folder
const apiRoutes = require('./api');

// Define the path for the api routes 
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Export the router in order ot be used in the server.js file
module.exports = router;