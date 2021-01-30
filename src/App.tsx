import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Board from './classes/Board';
import { hardPuzzle } from './data/puzzles';
import { ControlBar as StyledControlBar } from './components/ControlBar/Styles';
import { StyledGrid } from './components/Grid/Styles';

const MainTitle = styled.h1`
  color: #683aea;
  font-size: 3rem;
  text-align: center;
  width: 90%;
  display: block;
  margin: 0 auto;
`;

const solvePuzzle = (e: React.MouseEvent) => {
  const target = e.target as HTMLButtonElement;

  console.log(target);
};

const App: React.FC = () => {
  const [puzzle] = useState(hardPuzzle);
  const [board, setBoard] = useState<Board | null>(null);

  useEffect(() => {
    if (!board) {
      const parsedBoard = Board.parse(puzzle);
      parsedBoard!.solve();

      setBoard(parsedBoard);
    }
  }, [board, puzzle]);

  return (
    <div id="app">
      <MainTitle>Sudoku Solver</MainTitle>
      <StyledGrid board={board} />
      <StyledControlBar solvePuzzle={solvePuzzle} />
    </div>
  );
};

export default App;
