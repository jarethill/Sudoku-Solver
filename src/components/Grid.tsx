import React from 'react';
import PropTypes from 'prop-types';
import { hardPuzzle } from '../data/puzzles';
import Board from '../classes/Board';

interface Props {
  className?: string
}

const Grid: React.FC<Props> = ({ className }) => {
  const board = Board.parse(hardPuzzle);

  board.solve();

  console.log(board.print());

  // console.log(board);
  // if (typeof board === 'error') {
  //   console.log('ERROR!');
  // }
  // board.solve();
  // console.log('\n', '\n');
  // console.log(board.convert());
  // board.print();
  return (<div className={className}> </div>);
};

Grid.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Grid;
