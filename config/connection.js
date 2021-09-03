require('dotenv').config();

// Require sequelize in order to create connection to database.
const Sequelize = require('sequelize');

// Connection to database defined
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

// Export connection in order to be used in other files
module.exports = sequelize;
