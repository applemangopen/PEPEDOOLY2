const BaseDTO = require("../../lib/base.dto");

class NoticeCreateRequestDTO extends BaseDTO {
  noticeTitle;
  noticeContent;
  adminId;
  adminNickname;

  constructor(body, admin) {
    super();
    this.noticeTitle = body.Notice_title;
    this.noticeContent = body.Notice_content;
    this.adminId = admin.Admin_id;
    this.adminNickname = admin.Admin_nickname;
  }
}

class NoticeCreateResponseDTO extends BaseDTO {
  noticeId;

  constructor(response) {
    super();
    this.noticeId = response.Notice_id;
  }
}

class NoticeFindRequestDTO extends BaseDTO {
  noticeId;
  constructor(body) {
    super();
    this.noticeID = body.noticeID;
  }
}

class NoticeFindAllResponseDTO extends BaseDTO {
  noticeId;
  noticeTitle;
  noticeContent;
  noticeWriter;
  noticeCreatedAt;

  constructor(response) {
    super();
    this.noticeId = response.Notice_id;
    this.noticeTitle = response.Notice_title;
    this.noticeContent = response.Notice_content;
    this.noticeWriter = response.Notice_writer;
    this.noticeCreatedAy = this.toDate(response.Notice_created_at);
  }
}

class NoticeFindResponseDTO extends BaseDTO {
  noticeId;
  noticeTitle;
  noticeContent;
  noticeWriter;
  noticeCreatedAt;

  constructor(response) {
    super();
    this.noticeId = response.Notice_id;
    this.noticeTitle = response.Notice_title;
    this.noticeContent = response.Notice_content;
    this.noticeWriter = response.Notice_writer;
    this.noticeCreatedAy = this.toDate(response.Notice_created_at);
  }
}

class NoticeUpdateRequestDTO extends BaseDTO {
  noticeId;
  noticeTitle;
  noticeContent;

  constructor(body) {
    super();
    this.noticeId = body.noticeId;
    this.noticeTitle = body.noticeTitle;
    this.noticeContent = body.noticeContent;
  }
}

class NoticeDeleteRequestDTO extends BaseDTO {
  noticeId;

  constructor(body) {
    super();
    this.noticeId = body.noticeId;
  }
}

module.exports = {
  NoticeCreateRequestDTO,
  NoticeCreateResponseDTO,
  NoticeFindRequestDTO,
  NoticeFindAllResponseDTO,
  NoticeFindResponseDTO,
  NoticeUpdateRequestDTO,
  NoticeDeleteRequestDTO,
};
