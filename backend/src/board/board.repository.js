const Board = require("./board.entity");

const getBoardList = async () => {
  return await Board.findAll();
};

const createBoard = async (boardData) => {
  return await Board.create(boardData);
};

const getBoardById = async (id) => {
  return await Board.findByPk(id);
};

const updateBoard = async (id, boardData) => {
  return await Board.update(boardData, { where: { Boards_id: id } });
};

const deleteBoard = async (id) => {
  return await Board.destroy({ where: { Boards_id: id } });
};

module.exports = {
  createBoard,
  getBoardList,
  getBoardById,
  updateBoard,
  deleteBoard,
};
