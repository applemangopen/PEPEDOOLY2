const express = require("express");
const router = express.Router();
const commentController = require("./comment.controller");

router.post("/", commentController.postComments);
router.get("/", commentController.getComments);
router.put("/:commentId", commentController.updateComment);
router.delete("/:commentId", commentController.deleteComment);

module.exports = router;
