import React from 'react';
import PropTypes from 'prop-types';
import Styled from '../Button/Styles';
import { Button as GlobalButton } from '../../styled-components/Global';

interface Props {
  className?: string,
  solvePuzzle: (e: React.MouseEvent) => void,
}

const ControlBar: React.FC<Props> = ({ className, solvePuzzle }) => (
  <div className={className}>
    <Styled.Button as={GlobalButton} handleClick={solvePuzzle}>Solve</Styled.Button>
  </div>
);

ControlBar.propTypes = {
  className: PropTypes.string,
  solvePuzzle: PropTypes.func.isRequired,
};

ControlBar.defaultProps = {
  className: '',
};

export default ControlBar;
