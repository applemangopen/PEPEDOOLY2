const express = require("express");
const adminRouter = express.Router();
const { adminController } = require("./admin.module");

const login = adminController.login.bind(adminController);
const getAdmin = adminController.getAdmin.bind(adminController);
const putAdmin = adminController.putAdmin.bind(adminController);
const deleteAdmin = adminController.deleteAdmin.bind(adminController);

adminRouter.post("/login", login);
adminRouter.get("/:uid", getAdmin);
adminRouter.put("/:uid", putAdmin);
adminRouter.delete("/:uid", deleteAdmin);
module.exports = adminRouter;
