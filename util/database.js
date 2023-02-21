const Sequelize = require('sequelize');

const sequelize = new Sequelize('lab_mysql', 'root', 'secure', {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    logging: false
});

module.exports = sequelize;