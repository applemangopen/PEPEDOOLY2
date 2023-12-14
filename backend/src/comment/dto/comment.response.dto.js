const BaseDTO = require("../../lib/base.dto");

class CommentResponseDTO extends BaseDTO {
    Comments_uid;
    Comments_content;
    Comments_created_at;
    UserNickname;
    UserProfile;

    constructor(comment) {
        super();
        // 필요한 데이터를 comment 객체로부터 추출하여 할당
    }
}

module.exports = {
    CommentResponseDTO,
};
