// Require sequelize in order to use syntax in sequelize to create a new model
const { Model, DataTypes } = require('sequelize');

// Require connection in order to sync with database
const sequelize = require('../config/connection.js');

// Define category as a new model
class Category extends Model {}

// Initialize the catergory model by creating columns and setting up fields
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'categorys',
  }
);

// Export model in order to be used in index to define association to other models and to be used in routes
module.exports = Category;
