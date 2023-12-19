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
    const cookie = req.headers.cookie;
    const token = cookie.split("=")[1];
    /*     console.log(token); */
    if (!token) {
      throw new Error("No token provided");
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded) {
      throw new Error("Invalid token");
    }
    /*    console.log(decoded); */

    const adminInfo = await adminService.getAdminData(decoded);
    /*    console.log(adminInfo); */
    if (!adminInfo) {
      throw new Error("admin not found");
    }
    console.log(adminInfo);
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
