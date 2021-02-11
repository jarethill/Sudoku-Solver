import React from 'react';
import PropTypes from 'prop-types';
import Board from '../../classes/Board';
import Styled from '../Cell/Styles';

interface Props {
  className?: string,
  board?: Board | null,
  setPuzzle: React.Dispatch<React.SetStateAction<number[][]>>,
  isSolved: boolean,
  setIsSolved: React.Dispatch<React.SetStateAction<boolean>>,
}

const Grid: React.FC<Props> = ({
  className, board, setPuzzle, setIsSolved, isSolved,
}) => (
  <div className={className}>
    {board && board.cells.map((cell) => (
      <Styled.Cell
        key={`${cell.x},${cell.y}`}
        cell={cell}
        setPuzzle={setPuzzle}
        isSolved={isSolved}
        setIsSolved={setIsSolved}
      />
    ))}
  </div>
);

Grid.propTypes = {
  className: PropTypes.string.isRequired,
  board: PropTypes.instanceOf(Board),
  setPuzzle: PropTypes.func.isRequired,
  isSolved: PropTypes.bool.isRequired,
  setIsSolved: PropTypes.func.isRequired,
};

Grid.defaultProps = {
  board: null,
};

export default Grid;
