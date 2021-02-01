import React from 'react';
import PropTypes from 'prop-types';
import Board from '../../classes/Board';
import Styled from '../Cell/Styles';

interface Props {
  className?: string,
  board?: Board | null,
  setPuzzle: React.Dispatch<React.SetStateAction<number[][]>>
}

const Grid: React.FC<Props> = ({ className, board, setPuzzle }) => (
  <div className={className}>
    {board && board.cells.map((cell) => (
      <Styled.Cell
        key={`${cell.x},${cell.y}`}
        cell={cell}
        setPuzzle={setPuzzle}
      />
    ))}
  </div>
);

Grid.propTypes = {
  className: PropTypes.string.isRequired,
  board: PropTypes.instanceOf(Board),
  setPuzzle: PropTypes.func.isRequired,
};

Grid.defaultProps = {
  board: null,
};

export default Grid;
