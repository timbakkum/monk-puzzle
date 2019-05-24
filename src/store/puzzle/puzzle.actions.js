export const shufflePieces = () => {
  return {
    type: "SHUFFLE_PIECES"
  };
};

export const startPuzzle = () => {
  return {
    type: "START_PUZZLE"
  };
};

export const startEasyMode = () => {
  return {
    type: "START_EASY_MODE"
  };
};

export const resetPuzzle = () => {
  return {
    type: "RESET_PUZZLE"
  };
};

export const movePiece = pieceIndex => {
  return {
    type: "MOVE_PIECE",
    payload: {
      pieceIndex
    }
  };
};

export const swapPiece = (pieceIndex, emptyIndex) => {
  return {
    type: "SWAP_PIECE",
    payload: {
      pieceIndex,
      emptyIndex
    }
  };
};

export const winPuzzle = () => {
  return {
    type: "WIN_PUZZLE"
  };
};
