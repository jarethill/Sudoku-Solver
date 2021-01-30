import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CellClass from '../../classes/Cell';
import Styled from './Styles';

interface Props {
  cell: CellClass,
  className?: string,
}

const Cell: React.FC<Props> = ({ className, cell }) => {
  const [value, setValue] = useState(cell.value);
  const [styling, setStyling] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Grabs the last character in input string before converting to number. This allows the value
    // to be changed even when another value is in place
    const targetValue = +e.target.value[e.target.value.length - 1];

    if ((targetValue >= 0 && targetValue <= 9) || !targetValue) {
      setValue(targetValue);
    }
  };

  // Set cross borders to mark subgrids on board
  useEffect(() => {
    const crossStyling = {
      borderTop: [3, 6].includes(cell.x) ? '1px solid #000' : '',
      borderRight: [2, 5].includes(cell.y) ? '1px solid #000' : '',
      borderBottom: [2, 5].includes(cell.x) ? '1px solid #000' : '',
      borderLeft: [3, 6].includes(cell.y) ? '1px solid #000' : '',
    };

    setStyling(crossStyling);
  }, [cell]);

  return (
    <div className={className}>
      {cell.isMutable ? (
        <Styled.MutableCell
          type="text"
          value={value > 0 ? value : ''}
          style={styling}
          onChange={handleChange}
        />
      ) : (
        <Styled.ImmutableCell style={styling} onChange={handleChange}>
          {value > 0 && value}
        </Styled.ImmutableCell>
      )}
    </div>
  );
};

Cell.propTypes = {
  cell: PropTypes.instanceOf(CellClass).isRequired,
  className: PropTypes.string.isRequired,
};

export default Cell;
