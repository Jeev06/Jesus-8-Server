const { Sequelize } = require('sequelize');
const dbConfig = require('../Config/config.js').db;


const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false, // Disable query logging by default
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.authentication = require('./model.js')(sequelize, Sequelize).authentication;

db.product = require('./model.js')(sequelize, Sequelize).product;

db.cart = require('./model.js')(sequelize, Sequelize).cart;


module.exports = db;
