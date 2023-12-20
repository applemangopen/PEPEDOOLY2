const boardRepository = require("./board.repository");

const getBoardList = async () => {
  return await boardRepository.getBoardList();
};

const createBoard = async (boardData) => {
  // 여기에서 필요한 데이터 검증이나 변환 로직을 추가할 수 있습니다.
  return await boardRepository.createBoard(boardData);
};

const getBoardById = async (id) => {
  const board = await boardRepository.getBoardById(id);
  if (!board) return null;

  // 조회수 증가
  board.Board_views++;
  await board.save();

  return {
    title: board.Boards_title,
    content: board.Boards_content,
    createdAt: board.Boards_created_at,
    views: board.Board_views,
  };
};

const updateBoard = async (id, boardData) => {
  // 데이터 검증이나 추가 로직을 여기에 구현할 수 있습니다.
  return await boardRepository.updateBoard(id, boardData);
};

const deleteBoard = async (id) => {
  return await boardRepository.deleteBoard(id);
};

module.exports = {
  createBoard,
  getBoardList,
  getBoardById,
  updateBoard,
  deleteBoard,
};
