const Sequelize = require('sequelize');

module.exports = new Sequelize('agenciaviajes', 'root', 'root', {
    host:'127.0.0.1', //En caso de tener un host poner el link aquí
    port: '8889',
    dialect: 'mysql',
    define : {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
})