import { PUZZLE_ROWS, PUZZLE_COLUMNS } from "./../constants";

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
