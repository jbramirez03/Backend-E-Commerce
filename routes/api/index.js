const router = require('express').Router();
// Import all the routes
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

// Define the path for all the routes that are being used
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Export the router to be used in the index
module.exports = router;
