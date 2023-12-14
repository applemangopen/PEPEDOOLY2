const express = require("express");
const commentRouter = express.Router();

const { commentController } = require("./comment.module");
const getComments = commentController.getComments.bind(commentController);
const postComment = commentController.postComment.bind(commentController);

// router.put("/:commentId", commentController.updateComment);
// router.delete("/:commentId", commentController.deleteComment);

commentRouter.get("/");
module.exports = router;
