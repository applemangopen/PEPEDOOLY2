const NoticeService = require("./notice.service");
const NoticeController = require("./notice.controller");

const db = require("../lib/db");
const { Notice } = db;
const noticeSerivice = new NoticeService(Notice);
const noticeController = new NoticeController(noticeSerivice);

module.exports = { noticeController };
