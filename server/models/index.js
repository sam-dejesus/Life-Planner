// import models
const Accounts = require('./Accounts');
const Goals = require('./Goals');
const Investments = require('./Investments');
const PhysicalBenchmarks = require('./PhysicalBenchmarks');
const User = require('./User');


Accounts.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Accounts, { foreignKey: 'user_id' });

Goals.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Goals, {foreignKey: 'user_id' });

Investments.belongsTo(Accounts, {foreignKey: 'id' } )
Accounts.hasMany(Investments, {foreignKey: 'id' })

PhysicalBenchmarks.belongsTo(User, {foreignKey: 'user_id' })
User.hasMany(PhysicalBenchmarks, {foreignKey: 'user_id' })

module.exports = {
    User,
    Accounts,
    Goals,
    Investments,
    PhysicalBenchmarks,
};
