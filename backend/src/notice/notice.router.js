const express = require("express");
const noticeRouter = express.Router();
const { noticeController } = require("./notice.module");
const { adminAuth } = require("../../src/lib/jwtAuthMiddleware");

const postNotice = noticeController.postNotice.bind(noticeController);
const getAllNotice = noticeController.getAllNotice.bind(noticeController);
const getNotice = noticeController.getNotice.bind(noticeController);
const putNotice = noticeController.putNotice.bind(noticeController);
const deleteNotice = noticeController.deleteNotice.bind(noticeController);

noticeRouter.post("/create", adminAuth, postNotice);
noticeRouter.get("/", getAllNotice);
noticeRouter.get("/:id", getNotice);
noticeRouter.put("/:id", adminAuth, putNotice);
noticeRouter.delete("/:id", adminAuth, deleteNotice);

module.exports = noticeRouter;
