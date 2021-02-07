import styled from 'styled-components';
import StyledButtonComponent from './Button';

export const Button = styled(StyledButtonComponent)`
  color: white;
  background: #683aea;
  margin-left: auto;
`;

export const ResetButton = styled(Button)`
  background: #a911ff;
`;

export default {
  Button,
  ResetButton,
};
