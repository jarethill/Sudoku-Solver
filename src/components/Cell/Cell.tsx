import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CellClass from '../../classes/Cell';
import Styled from './Styles';
import { cloneBoard } from '../../utilities/utility-functions';

interface Props {
  cell: CellClass,
  className?: string,
  setPuzzle: React.Dispatch<React.SetStateAction<number[][]>>,
  isSolved: boolean,
  setIsSolved: React.Dispatch<React.SetStateAction<boolean>>,
}

const Cell: React.FC<Props> = ({
  className, cell, setPuzzle, isSolved, setIsSolved,
}) => {
  const [value, setValue] = useState(cell.value);
  const [styling, setStyling] = useState({});

  // Sets cursor to end of input field, needed to correctly
  // overwrite prior value
  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement> |
    React.MouseEvent<HTMLInputElement, MouseEvent>,
  ) => {
    const target = e.target as HTMLInputElement;

    target.scrollLeft = target.scrollWidth;
    target.setSelectionRange(target.value.length, target.value.length);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Grabs the last character in input string before converting to number. This allows the value
    // to be changed even when another value is in place
    const targetValue = +e.target.value[e.target.value.length - 1];

    if ((targetValue >= 0 && targetValue <= 9) || !targetValue) {
      setValue(() => targetValue || 0);

      setPuzzle((oldBoard) => {
        const newBoard = cloneBoard(oldBoard);
        newBoard[cell.x][cell.y] = targetValue || 0;

        return newBoard;
      });

      if (isSolved) {
        setIsSolved(false);
      }
    }
  };

  // Set cross borders to mark subgrids on board & update cell values. Set error background
  // if cell is invalid.
  useEffect(() => {
    const crossStyling = {
      borderTop: [3, 6].includes(cell.x) ? '1px solid #000' : '',
      borderRight: [2, 5].includes(cell.y) ? '1px solid #000' : '',
      borderBottom: [2, 5].includes(cell.x) ? '1px solid #000' : '',
      borderLeft: [3, 6].includes(cell.y) ? '1px solid #000' : '',
      background: cell.showError ? 'red' : '',
      color: cell.showError ? 'white' : '',
    };

    setStyling(crossStyling);
    setValue(cell.value);
  }, [cell, cell.showError]);

  return (
    <div className={className}>
      {cell.isMutable ? (
        <Styled.MutableCell
          type="text"
          value={value > 0 ? value : ''}
          style={styling}
          onChange={handleChange}
          onClick={handleFocus}
          onFocus={handleFocus}
        />
      ) : (
        <Styled.ImmutableCell style={styling}>
          {value > 0 && value}
        </Styled.ImmutableCell>
      )}
    </div>
  );
};

Cell.propTypes = {
  cell: PropTypes.instanceOf(CellClass).isRequired,
  className: PropTypes.string.isRequired,
  setPuzzle: PropTypes.func.isRequired,
  isSolved: PropTypes.bool.isRequired,
  setIsSolved: PropTypes.func.isRequired,
};

export default Cell;
