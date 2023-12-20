const boardService = require("./board.service");

const getBoardList = async (req, res) => {
  try {
    const boards = await boardService.getBoardList();
    res.json(boards);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const createBoard = async (req, res) => {
  try {
    const board = await boardService.createBoard(req.body);
    res.status(201).json(board);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getBoard = async (req, res) => {
  try {
    const board = await boardService.getBoardById(req.params.id);
    if (!board) {
      return res.status(404).send("Board not found");
    }
    res.json(board);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateBoard = async (req, res) => {
  try {
    await boardService.updateBoard(req.params.id, req.body);
    res.send("Board updated successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteBoard = async (req, res) => {
  try {
    await boardService.deleteBoard(req.params.id);
    res.send("Board deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getBoardList,
  createBoard,
  getBoard,
  updateBoard,
  deleteBoard,
};
