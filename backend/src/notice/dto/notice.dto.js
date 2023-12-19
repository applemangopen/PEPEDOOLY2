const BaseDTO = require("../../lib/base.dto");
const { BadRequest } = require("../../lib/customException");

class NoticeCreateRequestDTO extends BaseDTO {
  noticeTitle;
  noticeContent;
  adminId;
  adminNickname;

  constructor(body, admin) {
    super();
    this.noticeTitle = body.noticeTitle;
    this.noticeContent = body.noticeContent;
    this.adminId = admin.Admin_id;
    this.adminNickname = admin.Admin_nickname;

    this.validate(this, BadRequest);
  }
}

class NoticeCreateResponseDTO extends BaseDTO {
  noticeId;

  constructor(response) {
    super();
    this.noticeId = response.Notice_id;

    this.validate(this, BadRequest);
  }
}

class NoticeFindRequestDTO extends BaseDTO {
  noticeId;
  constructor(body) {
    super();
    this.noticeID = body.noticeID;

    this.validate(this, BadRequest);
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
    this.noticeCreatedAt = this.toDate(response.Notice_created_at);

    this.validate(this, BadRequest);
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
    this.noticeCreatedAt = this.toDate(response.Notice_created_at);

    this.validate(this, BadRequest);
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

    this.validate(this, BadRequest);
  }
}

class NoticeDeleteRequestDTO extends BaseDTO {
  noticeId;

  constructor(body) {
    super();
    this.noticeId = body.noticeId;

    this.validate(this, BadRequest);
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
