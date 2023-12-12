const Sequelize = require("sequelize");
require("dotenv").config();
const db = {};

const sequelize = new Sequelize(
  process.env["DB_DATABASE"],
  process.env["DB_USERNAME"],
  process.env["DB_PASSWORD"],
  process.env["DB_HOST"],
  process.env["DB_DIALECT"],
  process.env["DB_PORT"]
);

const entityList = [`../admin/model/admin`, `../admin/model/notice`];

entityList.forEach((entity) => {
  const model = require(entity)(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
