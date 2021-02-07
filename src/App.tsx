import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Board from './classes/Board';
import { hardPuzzle, emptyPuzzle } from './data/puzzles';
import { ControlBar as StyledControlBar } from './components/ControlBar/Styles';
import { StyledGrid } from './components/Grid/Styles';
import { cloneBoard } from './utilities/utility-functions';

const MainTitle = styled.h1`
  color: #683aea;
  font-size: 3rem;
  text-align: center;
  width: 90%;
  display: block;
  margin-bottom: .5em;
`;

const App: React.FC = () => {
  const [puzzle, setPuzzle] = useState(emptyPuzzle);
  const [board, setBoard] = useState<Board | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const solvePuzzle = () => {
    try {
      const parsedBoard = Board.parse(puzzle);
      parsedBoard.solve();

      setBoard(parsedBoard);
      setPuzzle(parsedBoard!.convert());

      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
      const clonedPuzzle = cloneBoard(puzzle);

      error.invalidCellCoordinates.forEach((tuple: [number, number]) => {
        const [x, y] = tuple;

        clonedPuzzle[x][y] = 0;
      });

      setPuzzle(clonedPuzzle);

      const parsedBoard = Board.parse(clonedPuzzle);
      parsedBoard.setAllMutable();

      console.log(error.invalidCellCoordinates);

      error.invalidCellCoordinates.forEach((tuple: [number, number]) => {
        const [x, y] = tuple;
        parsedBoard.board![x][y].showError = true;
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
      <StyledControlBar solvePuzzle={solvePuzzle} errorMessage={errorMessage} />
    </div>
  );
};

export default App;
