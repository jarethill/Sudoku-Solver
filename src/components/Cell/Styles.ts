import styled from 'styled-components';
import CellComponent from './Cell';

const baseCellStyling = `
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  border: 0;
`;

export const Cell = styled(CellComponent)`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  box-sizing: content-box;
`;

export const ImmutableCell = styled.p`
  ${baseCellStyling}
  background: #683aea;
  color: white;
`;

export const MutableCell = styled.input`
  ${baseCellStyling}
  text-align: center;
`;

export default {
  Cell,
  ImmutableCell,
  MutableCell,
};
