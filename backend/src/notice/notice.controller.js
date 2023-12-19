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

  async postNotice(req, res, next) {
    try {
      const adminId = req.admin;
      if (!adminId) {
        throw new Error("Invalid admin ID");
      }

      const noticeCreateRequestDTO = new NoticeCreateRequestDTO(
        req.body,
        req.admin
      );
      const noticeCreateResponseDTO = await this.service.createNotice(
        noticeCreateRequestDTO
      );
      res.status(201).json(noticeCreateResponseDTO);
    } catch (e) {
      console.error("postNotice Error", e);
      next(e);
    }
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
