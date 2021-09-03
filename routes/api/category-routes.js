// Use router in order to store the routes for category model
const router = require('express').Router();
// Require the models that include category or are associated to the category model
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  // Use Try/Catch in order to catch errors while using await on functions that contain a promise
  try {
    // Variable that uses sequelize to find all of the data in the 'Category' model/table
    const categoriesData = await Category.findAll({
      // Using include in order to get products that contain the returned categories Id
      include: [{ model: Product, as: 'products' }]
    });
    // Set the status to a 200 if there are no errors with the code or the server then return all of the categories through the defined variable
    res.status(200).json(categoriesData);
    // If there is any errors they will be displayed in the catch by setting the status to a 500 and returning the error
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    // Set a variable that contains a single Category's data using the findByPk method while also using the req.params.id as the desired category to view
    const singleCategoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product, as: 'products' }]
    });
    // If there is no category with the id set in the url then a 404 status comes back with a message formatted in json
    if (!singleCategoryData) {
      res.status(404).json({ message: 'No category found with that id.' })
      return;
    }

    res.status(200).json(singleCategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Route to create a new category
router.post('/', async (req, res) => {
  try {
    // Set a variable that contains the new category information through the use of the create mehtod in sequelize and the req.body
    const newCategoryData = await Category.create(req.body);
    res.status(201).json(newCategoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  // Route update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    // Define a variable containing the updated category information through the use of the update sequelize method and defining which files can be update
    const updatedCategory = await Category.update(
      {
        category_name: req.body.category_name
      },
      {
        // The where is defined as the req.params.id in order to specify which category to update
        where: {
          id: req.params.id
        }
      }
    );

      if(!updatedCategory){
        res.status(404).json({message: 'No category found with this id.'});
        return;
      }

    res.status(201).json(updatedCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Route to delete a category based on its 'id' value
router.delete('/:id', async (req, res) => {
  try {
    // Similar to the update method in sequelize you define a where object in the destroy method in sequelize and that where being defined as the req.params.id
    const deletedCategory = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!deletedCategory){
      res.status(404).json({message: "No category found with this id."});
      return;
    }
    res.status(200).json(deletedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export all the routes through the use of the router
module.exports = router;
