import React from 'react';
import PropTypes from 'prop-types';
import { simplePuzzle, easyPuzzle } from '../data/puzzles';
import Board from '../classes/Board';

interface Props {
  className?: string
}

const Grid: React.FC<Props> = ({ className }) => {
  const board = Board.parse(simplePuzzle);
  const cell = board.getCell(0, 1)!;
  // cell.solve();
  // board.solve(0, 0);
  console.log(cell);

  return (<div className={className}> </div>);
};

Grid.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Grid;
