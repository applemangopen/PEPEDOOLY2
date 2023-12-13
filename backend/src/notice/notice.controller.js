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

  async postNotice(req, res) {}

  async getAllNotice(req, res) {}

  async getNotice(req, res) {}

  async putNotice(req, res) {}

  async deleteNotice(req, res) {}
}
