const { CommentViewResponseDTO } = require("./dto/comment.view.response.dto");
const db = require("../lib/db");
const { CommentResponseDTO } = require("./dto/comment.response.dto");

class CommentService {
    constructor(Comment) {
        this.commentRepository = Comment;
    }

    async createComment(requestDTO) {
        try {
            const comment = await this.commentRepository.create({
                Comments_content: requestDTO.Comments_content,
                Users_uid: requestDTO.Users_uid,
                Boards_id: requestDTO.Boards_id,
                ParentCommentId: requestDTO.ParentCommentId,
            });

            const foundComment = await this.commentRepository.findOne({
                where: { Comments_uid: createdComment.Comments_uid },
                include: [
                    {
                        model: db.User,
                        attributes: ["nickname", "profile"],
                    },
                ],
            });

            return new CommentResponseDTO(comment);
        } catch (e) {
            throw e;
        }
    }

    async getComments(boardId) {
        try {
            const comments = await this.commentRepository.findAll({
                include: [
                    {
                        model: db.User,
                        attributes: ["nickname", "profile"],
                    },
                    {
                        model: this.commentRepository,
                        as: "Replies",
                        include: [
                            {
                                model: db.User,
                                attributes: ["nickname", "profile"],
                            },
                        ],
                    },
                ],
                where: {
                    Boards_id: boardId,
                    // ParentCommentId: null,
                    // 대댓글도 지금은 같이 조회하는데 위의 조건 넣으면 대댓글은 일단 조회를 안하고 따로 불러올 수 있음
                },
                order: [["Comments_created_at", "DESC"]],
            });

            return comments.map((comment) => new CommentViewResponseDTO(comment));
        } catch (e) {
            throw e;
        }
    }
}

module.exports = CommentService;
