import * as constants from "./puzzle.constants";

export const shufflePieces = () => ({
  type: constants.SHUFFLE_PIECES
});

export const startPuzzle = () => ({
  type: constants.START_PUZZLE
});

export const startEasyMode = () => ({
  type: constants.START_EASY_MODE
});

export const resetPuzzle = () => ({
  type: constants.RESET_PUZZLE
});

export const movePiece = pieceIndex => ({
  type: constants.MOVE_PIECE,
  payload: {
    pieceIndex
  }
});

export const swapPiece = (pieceIndex, emptyIndex) => ({
  type: constants.SWAP_PIECE,
  payload: {
    pieceIndex,
    emptyIndex
  }
});

export const winPuzzle = () => ({
  type: constants.WIN_PUZZLE
});
