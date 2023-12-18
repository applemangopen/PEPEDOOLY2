const express = require("express");
const router = express.Router();
const boardController = require("./board.controller");

router.get("/", boardController.getBoardList);
router.post("/", boardController.createBoard);
router.get("/:id", boardController.getBoard);
router.put("/:id", boardController.updateBoard);
router.delete("/:id", boardController.deleteBoard);
// router.get("/:id/likes", boardController.getLikes);
// router.post("/:id/like", boardController.addLike);
// router.delete("/:id/like", boardController.removeLike);

module.exports = router;
