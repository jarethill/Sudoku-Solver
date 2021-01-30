import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  className?: string,
  children?: React.ReactNode,
  handleClick: (event: React.MouseEvent) => void
}

const Button: React.FC<Props> = ({ className, children, handleClick }) => (
  <button className={className} type="button" onClick={(e) => handleClick(e)}>{children}</button>
);

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: '',
  className: '',
};

export default Button;
