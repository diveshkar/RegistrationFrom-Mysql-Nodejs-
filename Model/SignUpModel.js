const { DataTypes } = require('sequelize');
const sequelize = require('../Database');

const SignUpModel = sequelize.define('SignUp', {
  UserName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  UserEmail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  UserPassword: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  UserType: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = SignUpModel;
