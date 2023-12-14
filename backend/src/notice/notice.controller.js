const db = require("../lib/db");
const {
  NoticeCreateRequestDTO,
  NoticeCreateResponseDTO,
  NoticeFindRequestDTO,
  NoticeFindAllResponseDTO,
  NoticeFindResponseDTO,
  NoticeUpdateRequestDTO,
  NoticeDeleteRequestDTO,
} = require("./dto/notice.dto");

class NoticeController {
  constructor(service) {
    this.service = service;
  }

  async postNotice(req, res) {
    const adminData = req.body;
    console.log(adminData);
  }

  async getAllNotice(req, res) {
    const adminData = req.body;
    console.log(adminData);
  }

  async getNotice(req, res) {
    const adminData = req.body;
    console.log(adminData);
  }

  async putNotice(req, res) {
    const adminData = req.body;
    console.log(adminData);
  }

  async deleteNotice(req, res) {
    const adminData = req.body;
    console.log(adminData);
  }
}
