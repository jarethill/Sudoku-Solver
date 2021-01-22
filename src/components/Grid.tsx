import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from './Cell';
import Board from '../classes/Board';

interface Props {
  className?: string,
  board?: Board | null,
}

const StyledCell = styled(Cell)`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  box-sizing: content-box;
`;

const Grid: React.FC<Props> = ({ className, board }) => (
  <div className={className}>
    {board && board.cells.map((cell) => (
      <StyledCell
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
