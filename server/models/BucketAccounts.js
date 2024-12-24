const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class BucketAccounts extends Model {}

BucketAccounts.init(
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
    goal:{
        type: DataTypes.INTEGER,
      },
    amount:{
        type: DataTypes.INTEGER,
      },
      
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'bucket_accounts',
  }
);

module.exports = BucketAccounts;
