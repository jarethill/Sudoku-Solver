import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Board from './classes/Board';
import { emptyPuzzle } from './data/puzzles';
import { ControlBar as StyledControlBar } from './components/ControlBar/Styles';
import { StyledGrid } from './components/Grid/Styles';
import { cloneBoard } from './utilities/utility-functions';

const MainTitle = styled.h1`
  color: #683aea;
  font-size: 2rem;
  text-align: center;
  display: block;
  margin-bottom: .5em;
  margin-top: 1em;
`;

const App: React.FC = () => {
  const [puzzle, setPuzzle] = useState(emptyPuzzle);
  const [board, setBoard] = useState<Board | null>(null);
  const [isSolved, setIsSolved] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const resetPuzzle = () => {
    setBoard(Board.parse(emptyPuzzle));
    setPuzzle(emptyPuzzle);
    setIsSolved(false);
  };

  const solvePuzzle = () => {
    try {
      const parsedBoard = Board.parse(puzzle);
      parsedBoard.solve();
      setBoard(parsedBoard);
      setPuzzle(parsedBoard!.convert());

      // In cases where board is parsed completely and left with unsolveable cells
      // notify user & allow cells to be editable again
      const isImpossibleBoard = parsedBoard.cells.find((cell) => cell.value === 0);

      if (isImpossibleBoard) {
        setErrorMessage('Impossible board.');
        parsedBoard.setAllMutable();
      } else {
        setErrorMessage('');
        setIsSolved(true);
        parsedBoard.setAllImmutable();
      }
    } catch (error) {
      setErrorMessage(error.message);
      const clonedPuzzle = cloneBoard(puzzle);

      // Set invalid cells to 0 in puzzle, used to prevent error
      // when board is parsed
      error.invalidCellCoordinates.forEach(([x, y]: [number, number]) => {
        clonedPuzzle[x][y] = 0;
      });

      setPuzzle(clonedPuzzle);

      const parsedBoard = Board.parse(clonedPuzzle);
      parsedBoard.setAllMutable();

      // Show error on same errored cells on the UI after parse is complete
      error.invalidCellCoordinates.forEach(([x, y]: [number, number]) => {
        parsedBoard.getCell(x, y).showError = true;
      });

      setBoard(parsedBoard);
    }
  };

  useEffect(() => {
    if (!board) {
      const parsedBoard = Board.parse(puzzle);

      setBoard(parsedBoard);
    }
  }, [board, puzzle]);

  return (
    <div id="app">
      <MainTitle>Sudoku Solver</MainTitle>
      <StyledGrid board={board} setPuzzle={setPuzzle} />
      <StyledControlBar
        solvePuzzle={solvePuzzle}
        errorMessage={errorMessage}
        resetPuzzle={resetPuzzle}
        isSolved={isSolved}
      />
    </div>
  );
};

export default App;
