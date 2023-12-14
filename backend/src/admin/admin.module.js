const AdminService = require("./admin.service");
const AdminController = require("./admin.controller");

const db = require("../lib/db");
const { Admin } = db;

const adminSerivice = new AdminService(Admin);
const adminController = new AdminController(adminSerivice);

module.exports = { adminController };
