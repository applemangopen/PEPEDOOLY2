const AdminService = require("./admin.service");
const AdminController = require("./admin.controller");

const db = require("../lib/db");
const { Admin } = db;

const adminService = new AdminService(Admin);
const adminController = new AdminController(adminService);

module.exports = { adminController };
