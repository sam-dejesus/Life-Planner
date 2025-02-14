require('dotenv').config();
import Sequelize from 'sequelize';

const sequelize = new Sequelize("life_planner_db", process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

export default sequelize;
