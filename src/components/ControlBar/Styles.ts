import styled from 'styled-components';
import ControlBarComponent from './ControlBar';

export const ControlBar = styled(ControlBarComponent)`
  width: 600px;
  max-width: 90%;
  margin: 1em 0 1em 0;
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 2rem;
`;

export default {
  ControlBar,
};
