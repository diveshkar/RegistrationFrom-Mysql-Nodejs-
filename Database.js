const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'Diveshkar@12345',
  database: 'User',
});

module.exports = sequelize;
