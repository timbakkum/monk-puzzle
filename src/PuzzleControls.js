import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { startPuzzle, startEasyMode } from "./store/puzzle/puzzle.actions";

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  background: limegreen;
  box-shadow: none;
  border: none;
  border-radius: 5px;
  line-height: 1.6em;
  padding: 0.4em 1em;
  font-size: 20px;
  margin: 20px;
`;

const ReshuffleButton = styled.button`
  background: white;
  box-shadow: none;
  border: 1px solid orangered;
  border-radius: 5px;
  line-height: 1.6em;
  padding: 0.4em 1em;
  font-size: 20px;
  margin: 20px;
`;

const Moves = styled.p`
  font-size: 20px;
  line-height: 1.6em;
`;

export function PuzzleControls({
  moves,
  isSolved,
  isStarted,
  handleStartEasyMode,
  handleStartClick
}) {
  return (
    <Controls>
      {!isStarted && (
        <StartButton onClick={handleStartClick}>Start the Puzzle! </StartButton>
      )}
      {isStarted && !isSolved && (
        <>
          <ReshuffleButton onClick={handleStartClick}>
            Reshuffle & restart the Puzzle!
          </ReshuffleButton>
          <ReshuffleButton onClick={handleStartEasyMode}>
            Restart in easy mode!
          </ReshuffleButton>
        </>
      )}
      <Moves>Moves: {moves}</Moves>
    </Controls>
  );
}

const mapStateToProps = state => {
  const { moves, isStarted, isSolved } = state.puzzle;
  return {
    moves,
    isStarted,
    isSolved
  };
};

const mapDispatchToProps = dispatch => ({
  handleStartClick: () => {
    dispatch(startPuzzle());
  },
  handleStartEasyMode: () => {
    dispatch(startEasyMode());
  }
});

const ConnectedPuzzleControls = connect(
  mapStateToProps,
  mapDispatchToProps
)(PuzzleControls);

export default ConnectedPuzzleControls;
