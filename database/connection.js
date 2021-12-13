const { Sequelize } = require("sequelize");

const connection = new Sequelize(
  "bot",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = connection;
