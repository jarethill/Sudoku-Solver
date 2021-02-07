import styled from 'styled-components';
import Grid from './Grid';

export const StyledGrid = styled(Grid)`
  max-width: 70vw;
  max-height: 70vw;
  width: 300px;
  height: 300px;
  background: white;
  display: grid;
  grid-template-columns: repeat(9, minmax(0, 1fr));
  grid-template-rows: repeat(9, minmax(0, 1fr));
  align-items: center;
  justify-content: center;
  grid-gap: 1px;
`;

export default {
  StyledGrid,
};
