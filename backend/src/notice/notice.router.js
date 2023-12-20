const express = require("express");
const noticeRouter = express.Router();
const { noticeController } = require("./notice.module");
const AuthMiddleware = require("../../src/lib/jwtAuthMiddleware");

const postNotice = noticeController.postNotice.bind(noticeController);
const getAllNotice = noticeController.getAllNotice.bind(noticeController);
const getNotice = noticeController.getNotice.bind(noticeController);
const putNotice = noticeController.putNotice.bind(noticeController);
const deleteNotice = noticeController.deleteNotice.bind(noticeController);

noticeRouter.post("/create", AuthMiddleware.adminAuth, postNotice);
noticeRouter.get("/", getAllNotice);
noticeRouter.get("/:id", getNotice);
noticeRouter.put("/:id", AuthMiddleware.adminAuth, putNotice);
noticeRouter.delete("/:id", AuthMiddleware.adminAuth, deleteNotice);

module.exports = noticeRouter;
