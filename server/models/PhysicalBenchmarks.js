const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class PhysicalBenchmarks extends Model {}

PhysicalBenchmarks.init(
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
    metric:{
        type: DataTypes.STRING,
      },
    record:{
        type: DataTypes.INTEGER,
      },
      goal:{
        type: DataTypes.INTEGER
      },
      user_id:{
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      }
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'physical_benchmarks',
  }
);

module.exports = PhysicalBenchmarks;
