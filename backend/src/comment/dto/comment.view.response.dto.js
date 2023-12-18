const BaseDTO = require("../../lib/base.dto");

class CommentViewResponseDTO extends BaseDTO {
  Comments_uid;
  Comments_content;
  Comments_created_at;
  Boards_id;
  Users_uid;
  UserNickname;
  UserProfile;
  Replies = [];

  constructor(comment) {
    super();

    this.Comments_uid = comment.dataValues.Comments_uid;
    this.Comments_content = comment.dataValues.Comments_content;
    this.Comments_created_at = comment.dataValues.Comments_created_at;
    this.Boards_id = comment.dataValues.Boards_id;
    this.Users_uid = comment.dataValues.Users_uid;
    this.UserNickname = comment.dataValues.UserNickname;
    this.UserProfile = comment.dataValues.UserProfile;

    if (
      comment.dataValues.Replies &&
      Array.isArray(comment.dataValues.Replies)
    ) {
      this.Replies = comment.dataValues.Replies.map((reply) => {
        return {
          Comments_uid: reply.dataValues.Comments_uid,
          Comments_content: reply.dataValues.Comments_content,
          Comments_created_at: reply.dataValues.Comments_created_at,
          UserNickname: reply.dataValues.User.nickname,
          UserProfile: reply.dataValues.User.profile,
        };
      });
    }

    this.validate(this);
  }
}

module.exports = {
  CommentViewResponseDTO,
};
