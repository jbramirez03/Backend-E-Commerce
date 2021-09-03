// Require parts of sequelize library needed in order to create a new model
const { Model, DataTypes } = require('sequelize');

// Import the connection to the database from the config file
const sequelize = require('../config/connection.js');

// Define tag as a new model by extending the model class in sequelize
class Tag extends Model {}

// Initialize the tag model by setting up the fields and rules
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tags',
  }
);

// Export the model in order to be used in index to define association to other models and in routes
module.exports = Tag;
