import { PUZZLE_ROWS, PUZZLE_COLUMNS } from "./../constants";
import shuffle from "./shuffle";

export const isSolved = pieces => {
  // solved array values equal 0, 1, 2, 3 and so forth
  // so we can easily compare for equality to the index of the loop
  for (let index = 0; index < pieces.length; index++) {
    const currentPiece = pieces[index];
    if (currentPiece !== index) return false;
  }
  return true;
};

export const shufflePieces = pieces => {
  let shuffledPieces;
  do {
    shuffledPieces = shuffle(pieces.slice());
  } while (isSolved(shufflePieces));

  return shuffledPieces;
};

export const swapPiece = (pieces, originIndex, targetIndex) => {
  // assign the pieces to be swapped to the index of the other piece
  const newPieces = [...pieces];
  [newPieces[targetIndex], newPieces[originIndex]] = [
    newPieces[originIndex],
    newPieces[targetIndex]
  ];

  return newPieces;
};

export const getPiecePosition = index => {
  const row = Math.floor(index / PUZZLE_COLUMNS);
  const column = index % PUZZLE_COLUMNS;

  return {
    row,
    column
  };
};

export const hasEmptyAdjacentPiece = (currentPieceIndex, emptyPieceIndex) => {
  // TODO refactor reused logic using helper function defined above!!
  const isInGrid =
    emptyPieceIndex >= 0 && emptyPieceIndex < PUZZLE_COLUMNS * PUZZLE_ROWS;
  const hasEmptyPieceAbove =
    currentPieceIndex - PUZZLE_COLUMNS === emptyPieceIndex &&
    Math.floor(currentPieceIndex / PUZZLE_COLUMNS) !== 0;
  const hasEmptyPieceBelow =
    currentPieceIndex + PUZZLE_COLUMNS === emptyPieceIndex &&
    Math.floor(currentPieceIndex / PUZZLE_COLUMNS) !== PUZZLE_ROWS - 1;
  const hasEmptyPieceLeft =
    currentPieceIndex - 1 === emptyPieceIndex &&
    currentPieceIndex % PUZZLE_COLUMNS !== 0;
  const hasEmptyPieceRight =
    currentPieceIndex + 1 === emptyPieceIndex &&
    (currentPieceIndex + 1) % PUZZLE_COLUMNS !== 0;
  if (!isInGrid) return false;
  if (currentPieceIndex === emptyPieceIndex) return false;
  if (
    hasEmptyPieceAbove ||
    hasEmptyPieceBelow ||
    hasEmptyPieceLeft ||
    hasEmptyPieceRight
  ) {
    return true;
  }
  return false;
};
