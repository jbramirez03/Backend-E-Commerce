// Import the tag model from the models folder
const { Tag } = require('../models');

// Create an array that contains seed data for tag model
const tagData = [
  {
    tag_name: 'rock music',
  },
  {
    tag_name: 'pop music',
  },
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'white',
  },
  {
    tag_name: 'gold',
  },
  {
    tag_name: 'pop culture',
  },
];

// Create function to seed Tag model
const seedTags = () => Tag.bulkCreate(tagData);

// Export function in order to be used in index
module.exports = seedTags;
