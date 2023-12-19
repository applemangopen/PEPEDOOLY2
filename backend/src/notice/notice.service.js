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

  async createNotice(noticeCreateRequestDTO) {
    try {
      if (!(noticeCreateRequestDTO instanceof NoticeCreateRequestDTO)) {
        throw new Error("Invalid request DTO");
      }
      const { noticeTitle, noticeContent, adminId, adminNickname } =
        noticeCreateRequestDTO;
      if (!adminId) {
        throw new Error("adminId cannot be null");
      }
      const createdValues = await this.noticeRepository.create({
        Admin_id: adminId,
        Notice_title: noticeTitle,
        Notice_content: noticeContent,
        Notice_writer: adminNickname,
      });
      return new NoticeCreateResponseDTO({
        Notice_id: createdValues.Notice_id,
      });
    } catch (e) {
      console.error("Service createNotice Error", e);
      throw new Error(e.message);
    }
  }
  async findAllNotice() {
    try {
      const notices = await this.noticeRepository.findAll();
      console.log(notices);
      return notices.map((notice) => new NoticeFindAllResponseDTO(notice));
    } catch (e) {
      console.error("Service findAllNotice Error", e);
      throw new Error(e.message);
    }
  }

  async findNotice(noticeFindRequestDTO) {
    try {
      if (!(noticeFindRequestDTO instanceof NoticeFindRequestDTO)) {
        throw new Error("Invalid request DTO");
      }
      const notice = await this.noticeRepository.findOne({
        where: { Notice_id: noticeFindRequestDTO.noticeId },
      });
      if (!notice) {
        throw new Error("Notice not found");
      }
      return new NoticeFindResponseDTO(notice);
    } catch (e) {
      console.error("Service findNotice Error", e);
      throw new Error(e.message);
    }
  }

  async updateNotice(noticeUpdateRequestDTO) {
    try {
      if (!(noticeUpdateRequestDTO instanceof NoticeUpdateRequestDTO)) {
        throw new Error("Invalid request DTO");
      }
      const { noticeId, noticeTitle, noticeContent } = noticeUpdateRequestDTO;
      await this.noticeRepository.update(
        {
          Notice_title: noticeTitle,
          Notice_content: noticeContent,
        },
        {
          where: { Notice_id: noticeId },
        }
      );
      return { message: "Update successful" };
    } catch (e) {
      console.error("Service updateNotice Error", e);
      throw new Error(e.message);
    }
  }

  async deleteNotice(noticeDeleteRequestDTO) {
    try {
      if (!(noticeDeleteRequestDTO instanceof NoticeDeleteRequestDTO)) {
        throw new Error("Invalid request DTO");
      }
      const deletedRowCount = await this.noticeRepository.destroy({
        where: { Notice_id: noticeDeleteRequestDTO.noticeId },
      });
      if (deletedRowCount === 0) {
        throw new Error("Notice not found");
      }
      return { message: "Notice deletion successful" };
    } catch (e) {
      console.error("Service deleteNotice Error", e);
      throw new Error(e.message);
    }
  }
}
