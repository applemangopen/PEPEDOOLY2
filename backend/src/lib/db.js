const Sequelize = require("sequelize");
require("dotenv").config();
const db = {};

const sequelize = new Sequelize(
  process.env["DB_DATABASE"],
  process.env["DB_USERNAME"],
  process.env["DB_PASSWORD"],
  {
    host: process.env["DB_HOST"],
    dialect: process.env["DB_DIALECT"],
    port: process.env["DB_PORT"],
  }
);

const entityList = [
  `../admin/admin`,
  `../notice/notice`,
  `../comment/comment`,
  `../board/board`,
];

entityList.forEach((entity) => {
  const model = require(entity)(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

// console.log("Loaded models", db);
