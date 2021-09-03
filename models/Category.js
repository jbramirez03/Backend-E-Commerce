// Require sequelize in order to use syntax in sequelize to create a new model
const { Model, DataTypes } = require('sequelize');

// Require connection in order to sync with database
const sequelize = require('../config/connection.js');

// Define category as a new model
class Category extends Model {}

// Initialize the catergory model by creating columns and setting up flags
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

module.exports = Category;
