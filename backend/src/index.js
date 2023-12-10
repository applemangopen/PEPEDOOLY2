const express = require("express");
const router = express.Router();
const userRouter = "./user/user.router";
const adminRouter = "./admin/admin.router";
const boardRouter = "./board/board.router";
const commentRouter = "./comment/comment.router";
const chatRouter = "./chat/chat.router";
// const
router.use("/admin", adminRouter);
router.use("/users", userRouter);
router.use("/boards", boardRouter);
router.use("/comments", commentRouter);
router.use("/chat", chatRouter);

module.exports = router;
