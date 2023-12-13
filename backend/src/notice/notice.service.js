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

class NoticeService {
  constructor(Notice) {
    this.noticeRepository = Notice;
  }

  async createNotice(noticeCreateRequestDTO) {}

  async findAllNotice() {}

  async findNotice(noticeFindRequestDTO) {}

  async updateNotice(noticeUpdateRequestDTO) {}

  async deleteNotice(noticeDeleteRequestDTO) {}
}
