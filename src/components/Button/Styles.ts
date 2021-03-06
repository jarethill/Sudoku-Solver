import styled from 'styled-components';
import StyledButtonComponent from './Button';

export const Button = styled(StyledButtonComponent)`
  color: white;
  background: #683aea;
  margin-left: auto;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  @media screen and (min-width: 500px) {
    font-size: 1.25rem;
  }

  &:hover {
    opacity: .8;
  }
`;

export const ResetButton = styled(Button)`
  background: #a911ff;
`;

export default {
  Button,
  ResetButton,
};
