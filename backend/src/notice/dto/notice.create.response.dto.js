const BaseDTO = require("../../lib/base.dto");

class NoticeCreateResponseDTO extends BaseDTO {
  noticeId;

  constructor() {}
}

module.exports = {
  NoticeCreateResponseDTO,
};
