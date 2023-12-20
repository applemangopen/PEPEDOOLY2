const express = require("express");
const adminRouter = express.Router();
const { adminController } = require("./admin.module");
const AuthMiddleware = require("../../src/lib/jwtAuthMiddleware");

const login = adminController.login.bind(adminController);
const logout = adminController.logout.bind(adminController);
const getAdmin = adminController.getAdmin.bind(adminController);
const putAdmin = adminController.putAdmin.bind(adminController);

adminRouter.post("/login", login);
adminRouter.get("/logout", logout);
adminRouter.get("/info", AuthMiddleware.adminAuth, getAdmin);
adminRouter.put("/:Admin_uid", AuthMiddleware.adminAuth, putAdmin);
module.exports = adminRouter;
