const Sequelize = require('sequelize');
const sequelize = new Sequelize('schedule-project','root','Raja9430@@##',{
    dialect:'mysql',
    host:'localhost',
    logging:false
});
module.exports = sequelize;