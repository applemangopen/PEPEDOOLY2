const BaseDTO = require("../../lib/base.dto");

class CommentCreateRequestDTO extends BaseDTO {
    Comments_content;
    Users_uid;
    Boards_id;
    ParentCommentId;

    constructor(req) {
        super();
        this.Comments_content = req.body.Comments_content;
        this.Users_uid = req.body.Users_uid;
        this.Boards_id = req.body.Boards_id;
        this.ParentCommentId = req.body.ParentCommentId;

        this.validate(this);
    }
}

module.exports = {
    CommentCreateRequestDTO,
};
