const db = require("../lib/db.js"); // 여기서 경로는 실제 db.js 파일의 위치에 맞게 조정해야 함
const Board = db.Boards; // db 객체에서 Boards 모델을 가져옴

const getBoardList = async () => {
  return await Board.findAll();
};

const createBoard = async (boardData) => {
  return await Board.create(boardData);
};

const getBoardById = async (id) => {
  // const returnData = await Board.findByPk(id);
  // console.log("board.repository getBoardById : ", returnData);
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
