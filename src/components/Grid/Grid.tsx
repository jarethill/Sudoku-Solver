import React from 'react';
import PropTypes from 'prop-types';
import Board from '../../classes/Board';
import Styled from '../Cell/Styles';

interface Props {
  className?: string,
  board?: Board | null,
}

const Grid: React.FC<Props> = ({ className, board }) => (
  <div className={className}>
    {board && board.cells.map((cell) => (
      <Styled.Cell
        key={`${cell.x},${cell.y}`}
        cell={cell}
      />
    ))}
  </div>
);

Grid.propTypes = {
  className: PropTypes.string.isRequired,
  board: PropTypes.instanceOf(Board),
};

Grid.defaultProps = {
  board: null,
};

export default Grid;
