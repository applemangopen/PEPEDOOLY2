const express = require("express");
const adminRouter = express.Router();
const { adminController } = require("./admin.module");
const { adminAuth } = require("../../src/lib/jwtAuthMiddleware");

const login = adminController.login.bind(adminController);
const getAdmin = adminController.getAdmin.bind(adminController);
const putAdmin = adminController.putAdmin.bind(adminController);
const deleteAdmin = adminController.deleteAdmin.bind(adminController);

adminRouter.post("/login", login);
adminRouter.get("/:uid", adminAuth, getAdmin);
adminRouter.put("/:uid", adminAuth, putAdmin);
adminRouter.delete("/:uid", adminAuth, deleteAdmin);
module.exports = adminRouter;
