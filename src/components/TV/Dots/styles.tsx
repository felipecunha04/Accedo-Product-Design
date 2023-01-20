import styled from 'styled-components';

export interface IDots {

}

export const DotList = styled.ul`
  display: inline-block;
  margin: 0;
  padding: 10px 0;
  margin-top: 5rem;
  list-style-type: none;

  .active-dot {
    opacity: ${({ theme }) => theme.opacity.full};
  }
`;

export const Dots = styled.li<IDots>`
  display: inline-block;
  width: 16px;
  max-width: 16px;
  height: 16px;
  max-height: 16px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.pallete.neutral.White};
  opacity: ${({ theme }) => theme.opacity.light};
  transition: all 0.25s;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    width: 20px;
    max-width: 18px;
    height: 18px;
    max-height: 18px;
    margin-right: 20px;
  }
`;