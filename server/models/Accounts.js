const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Accounts extends Model {}

Accounts.init(
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
    type:{
        type: DataTypes.STRING,
      },
    amount:{
        type: DataTypes.INTEGER,
      },
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'accounts',
  }
);

module.exports = Accounts;
