import styled from 'styled-components';

export interface IDots {
  active?: number;
}

export const DotList = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 10px 0;
  list-style-type: none;
`;

export const Dots = styled.li<IDots>`
  display: inline-block;
  width: 4px;
  max-width: 4px;
  height: 4px;
  max-height: 4px;
  margin-right: 3px;
  border-radius: 50%;
  background-color: ${(props) => props.active ? '#e73439' : '#d2d2d2'};
  transition: all 0.25s;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    width: 5px;
    max-width: 5px;
    height: 5px;
    max-height: 5px;
    margin-right: 8px;
  }
`;