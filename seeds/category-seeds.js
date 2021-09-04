// Import the category model from the models folder
const { Category } = require('../models');

// Created an array that will contain seed data for category model
const categoryData = [
  {
    category_name: 'Shirts',
  },
  {
    category_name: 'Shorts',
  },
  {
    category_name: 'Music',
  },
  {
    category_name: 'Hats',
  },
  {
    category_name: 'Shoes',
  },
];

// Create function to seed category model
const seedCategories = () => Category.bulkCreate(categoryData);

// Export the function that seeds the category model
module.exports = seedCategories;
