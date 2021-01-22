import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Grid from './components/Grid';
import Board from './classes/Board';
import { hardPuzzle } from './data/puzzles';

const MainTitle = styled.h1`
  color: #683aea;
  font-size: 3rem;
  text-align: center;
  width: 90%;
  display: block;
  margin: 0 auto;
`;

const StyledGrid = styled(Grid)`
  width: 700px;
  height: 700px;
  max-width: 90%;
  max-height: 90vw;
  background: white;
  margin-top: 1.5em;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  align-items: center;
  justify-content: center;
  grid-gap: 1px;
`;

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
    </div>
  );
};

export default App;
