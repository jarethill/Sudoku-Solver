import React from 'react';
import PropTypes from 'prop-types';
import { simplePuzzle, easyPuzzle, hardPuzzle } from '../data/puzzles';
import Board from '../classes/Board';

interface Props {
  className?: string
}

const Grid: React.FC<Props> = ({ className }) => {
  const board = Board.parse(hardPuzzle);
  // board.print();
  board.solve();
  // console.log('\n', '\n');
  // console.log(board.convert());
  board.print();
  return (<div className={className}> </div>);
};

Grid.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Grid;
