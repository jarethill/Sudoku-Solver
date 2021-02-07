import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../Button/Styles';
import { ErrorMessage } from './Styles';
import { Button as GlobalButton } from '../../styled-components/Global';

interface Props {
  className?: string,
  solvePuzzle: () => void,
  errorMessage?: string,
}

const ControlBar: React.FC<Props> = ({ className, solvePuzzle, errorMessage }) => (
  <div className={className}>
    <ErrorMessage>{errorMessage}</ErrorMessage>
    <Styled.Button as={GlobalButton} handleClick={solvePuzzle}>Solve</Styled.Button>
  </div>
);

ControlBar.propTypes = {
  className: PropTypes.string,
  solvePuzzle: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

ControlBar.defaultProps = {
  className: '',
  errorMessage: '',
};

export default ControlBar;
