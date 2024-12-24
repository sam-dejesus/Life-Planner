const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Expenses extends Model {}

Expenses.init(
  {
    // define ID columns
    id:{
      type: DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
    },
    amount_due:{
        type: DataTypes.INTEGER,
      },
      date:{
        type: DataTypes.DATE,
      },
      category:{
        type: DataTypes.STRING
      }

  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'expenses',
  }
);

module.exports = Expenses;
