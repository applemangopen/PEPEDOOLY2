const JWT = require("./jwt");
const jwt = new JWT();
const db = require("./db");
require("dotenv").config();

const UserService = require("../user/user.service");
const AdminService = require("../admin/admin.service");
const { Users, Admin } = db;
const userService = new UserService(Users);
const adminService = new AdminService(Admin);

exports.adminAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      throw new Error("No token provided");
    }
    console.log(token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      throw new Error("Invalid token");
    }
    console.log(decoded);

    const adminInfo = await adminService.getAdminById(decoded);
    console.log(adminInfo);
    if (!adminInfo) {
      throw new Error("Admin not found");
    }
    req.admin = adminInfo;
    next();
  } catch (e) {
    next(e);
  }
};

exports.auth = async (req, res, next) => {
  try {
  } catch (e) {}
};

exports.auth = async (req, res, next) => {
  try {
  } catch (e) {}
};
