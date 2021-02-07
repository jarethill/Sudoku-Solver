import styled from 'styled-components';
import ControlBarComponent from './ControlBar';

export const ControlBar = styled(ControlBarComponent)`
  max-width: 70vw;
  max-height: 70vw;
  width: 300px;
  margin: 1em 0 1em 0;
  display: flex;
  justify-content: space-between;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1.5rem;
`;

export default {
  ControlBar,
};
