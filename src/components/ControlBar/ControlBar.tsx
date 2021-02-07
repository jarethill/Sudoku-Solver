import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../Button/Styles';
import { ErrorMessage } from './Styles';
import { Button as GlobalButton } from '../../styled-components/Global';

interface Props {
  className?: string,
  solvePuzzle: () => void,
  resetPuzzle: () => void,
  errorMessage?: string,
  isSolved: boolean,
}

const ControlBar: React.FC<Props> = (
  {
    className,
    solvePuzzle,
    errorMessage,
    isSolved,
    resetPuzzle,
  },
) => (
  <div className={className}>
    <ErrorMessage>{errorMessage}</ErrorMessage>

    {isSolved ? (
      <Styled.ResetButton as={GlobalButton} handleClick={resetPuzzle}>Reset</Styled.ResetButton>
    ) : (
      <Styled.Button as={GlobalButton} handleClick={solvePuzzle}>Solve</Styled.Button>
    )}
  </div>
);

ControlBar.propTypes = {
  className: PropTypes.string,
  solvePuzzle: PropTypes.func.isRequired,
  resetPuzzle: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isSolved: PropTypes.bool.isRequired,
};

ControlBar.defaultProps = {
  className: '',
  errorMessage: '',
};

export default ControlBar;
