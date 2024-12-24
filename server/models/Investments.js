const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Investments extends Model {}

Investments.init(
  {
    // define ID columns
    id:{
        type: DataTypes.INTEGER,
        references: {
          model: 'accounts',
          key: 'id',
        },
    },
    name:{
      type: DataTypes.STRING,
    },
    value:{
        type: DataTypes.INTEGER,
      },
    dividend_payrate:{
        type: DataTypes.INTEGER,
      },
      dividend_per_share:{
        type: DataTypes.INTEGER,
      },
      amount_owned:{
        type: DataTypes.INTEGER,
      },
     
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'investments',
  }
);

module.exports = Investments;
