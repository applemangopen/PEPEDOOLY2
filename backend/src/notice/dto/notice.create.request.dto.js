const BaseDTO = require("../../lib/base.dto");

class NoticeCreateRequestDTO extends BaseDTO {
  noticeTitle;
  noticeContent;
  adminId;
  adminNickname;

  constructor(body) {
    super();
    this.noticeTitle = Notice_title;
    this.noticeContent = Notice_content;
    this.adminId = Admin_id;
    this.adminNickname = Admin_nickname;
  }
}

module.exports = {
  NoticeCreateRequestDTO,
};
