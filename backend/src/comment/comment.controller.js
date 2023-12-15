const { CommentCreateRequestDTO } = require("./dto/comment.create.request.dto");

class CommentController {
    constructor(service) {
        this.service = service;
    }

    async postComment(req, res, next) {
        try {
            const commentCreateRequestDTO = new CommentCreateRequestDTO(req);
            const result = await this.service.createComment(commentCreateRequestDTO);
            return res.status(201).json(result);
        } catch (e) {
            next(e);
        }
    }

    async getComments(req, res, next) {
        try {
            const { boardId, page } = req.query; // boardId와 page를 쿼리 파라미터에서 추출하는데 page는 혹시 필요할 수도 있으니 넣어봄.
            const comments = await this.service.getComments(boardId, page);
            return res.status(200).json(comments);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = CommentController;
