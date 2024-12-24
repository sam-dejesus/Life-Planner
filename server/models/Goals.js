const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Goals extends Model {}

Goals.init(
  {
    // define ID columns
    id:{
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
    },
    name:{
      type: DataTypes.STRING,
    },
    status:{
        type: DataTypes.BOOLEAN,
      },
    description:{
        type: DataTypes.STRING,
      },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'goals',
  }
);

module.exports = Goals;
