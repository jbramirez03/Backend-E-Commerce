// Require important parts from sequelize library in order to create a model
const { Model, DataTypes } = require('sequelize');

// Require connection in order to connect to database
const sequelize = require('../config/connection');

// Define ProductTag as a new model by extending from sequelize's model class
class ProductTag extends Model {}

// Initialize ProductTag model by setting up fields and rules
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    // Set a foreign key for product_id by referencing the id column in the 'products' model
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
        unique: false
      }
    },
    // Set a foreign key for tag_id by referencing the id column in the 'tags' model
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tags',
        key: 'id',
        unique: false
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tags',
  }
);

// Export model in order to define association to other models in index file and to be used in routes
module.exports = ProductTag;
