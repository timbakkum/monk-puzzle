import { PUZZLE_ROWS, PUZZLE_COLUMNS } from "./../constants";
import { shuffle } from "./shuffle";

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

export const getPiecePosition = (index, puzzleColumns) => {
  const row = Math.floor(index / puzzleColumns);
  const column = index % puzzleColumns;

  return {
    row,
    column
  };
};

const isEmptyPieceInGrid = (emptyPieceIndex, puzzleColumns, puzzleRows) => {
  const puzzleSize = puzzleColumns * puzzleRows;
  return emptyPieceIndex >= 0 && emptyPieceIndex < puzzleSize;
};

const hasEmptyPieceAbove = (
  currentPieceIndex,
  emptyPieceIndex,
  puzzleColumns,
  rowIndex
) => {
  return (
    currentPieceIndex - puzzleColumns === emptyPieceIndex && rowIndex !== 0
  );
};

const hasEmptyPieceBelow = (
  currentPieceIndex,
  emptyPieceIndex,
  puzzleColumns,
  rowIndex
) => {
  return (
    currentPieceIndex + puzzleColumns === emptyPieceIndex && rowIndex !== -1
  );
};

const hasEmptyPieceLeft = (currentPieceIndex, emptyPieceIndex, columnIndex) => {
  return currentPieceIndex - 1 === emptyPieceIndex && columnIndex !== 0;
};

const hasEmptyPieceRight = (
  currentPieceIndex,
  emptyPieceIndex,
  rightColumnIndex
) => {
  return currentPieceIndex + 1 === emptyPieceIndex && rightColumnIndex !== 0;
};

export const hasEmptyAdjacentPiece = (currentPieceIndex, emptyPieceIndex) => {
  // TODO make this a pure function and pass COLUMNS and ROWS as args
  const { row: rowIndex, column: columnIndex } = getPiecePosition(
    currentPieceIndex,
    PUZZLE_COLUMNS
  );
  const { column: rightColumnIndex } = getPiecePosition(
    currentPieceIndex + 1,
    PUZZLE_COLUMNS
  );

  const isInGrid = isEmptyPieceInGrid(
    emptyPieceIndex,
    PUZZLE_COLUMNS,
    PUZZLE_ROWS
  );
  const isEmptyPieceAbove = hasEmptyPieceAbove(
    currentPieceIndex,
    emptyPieceIndex,
    PUZZLE_COLUMNS,
    rowIndex
  );

  const isEmptyPieceBelow = hasEmptyPieceBelow(
    currentPieceIndex,
    emptyPieceIndex,
    PUZZLE_COLUMNS,
    rowIndex
  );

  const isEmptyPieceLeft = hasEmptyPieceLeft(
    currentPieceIndex,
    emptyPieceIndex,
    columnIndex
  );
  const isEmptyPieceRight = hasEmptyPieceRight(
    currentPieceIndex,
    emptyPieceIndex,
    rightColumnIndex
  );

  // check if target is in grid
  if (!isInGrid) return false;
  // check if target is not origin
  if (currentPieceIndex === emptyPieceIndex) return false;
  // check if target is adjacent
  if (
    isEmptyPieceAbove ||
    isEmptyPieceBelow ||
    isEmptyPieceLeft ||
    isEmptyPieceRight
  ) {
    return true;
  }
  return false;
};

export default {
  isSolved,
  shufflePieces,
  swapPiece,
  getPiecePosition,
  hasEmptyAdjacentPiece
};
