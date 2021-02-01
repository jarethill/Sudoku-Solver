import styled from 'styled-components';
import Grid from './Grid';

export const StyledGrid = styled(Grid)`
  width: 600px;
  height: 600px;
  max-width: 90%;
  max-height: 90vw;
  background: white;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  align-items: center;
  justify-content: center;
  grid-gap: 1px;
`;

export default {
  StyledGrid,
};
