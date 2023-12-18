const BaseDTO = require("../../lib/base.dto");

class CommentResponseDTO extends BaseDTO {
    Comments_uid;
    Comments_content;
    Comments_created_at;
    UserNickname;
    UserProfile;

    constructor(comment) {
        super();
        this.Comments_uid = comment.Comments_uid;
        this.Comments_content = comment.Comments_content;
        this.Comments_created_at = comment.Comments_created_at;

        // this.UserNickname = comment.UserNickname;
        // this.UserProfile = comment.UserProfile;
    }
}

module.exports = {
    CommentResponseDTO,
};
