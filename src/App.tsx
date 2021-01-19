import React from 'react';
import './App.css';
import styled from 'styled-components';
import Grid from './components/Grid';

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
`;

const App: React.FC = () => (
  <div id="app">
    <MainTitle>Sudoku Solver</MainTitle>
    <StyledGrid />
  </div>
);

export default App;
