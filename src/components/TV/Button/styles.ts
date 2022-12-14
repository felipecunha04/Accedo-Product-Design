import styled from 'styled-components';

interface IButton {
  variant?: 'default' | 'text' | 'iconButton';
}

export const Button = styled.button<IButton>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: ${({ theme }) => `${theme.spacing['2xs']}px ${theme.spacing['xs']}`};
  gap: ${({ theme }) => theme.spacing.nano};
  color: ${({ theme }) => theme.pallete.neutral.white};
  ${({ variant, theme }) => {
    switch(variant) {
      case 'text':
        return `
          color: black;
          padding: 0;
          border-radius: 0;
          background-color: white;
          &:enabled {
            cursor: pointer;
        
            &:hover,
            &:focus {
              background-color: white;
            }
          }
        `
      case 'iconButton':
        return `
          background-color: white;
        `
      default:
        return `
          background-color: #3d4851;
          &:enabled {
            cursor: pointer;
        
            &:hover,
            &:focus {
              background-color: ${theme.pallete.primary.medium};
            }
          }
        `
    }
  }}
  border-radius: 1000px;

  font-family: ${({ theme }) => theme.font.family};
  font-weight: 700;
  line-height: 100%;

  outline: 0;
  border: 0;

  svg {
    fill: ${({ theme }) => theme.pallete.neutral.white};
    width: ${({ theme }) => theme.font.size[4]};
    height: ${({ theme }) => theme.font.size[4]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.pallete.neutral['grey-30']};
    color: ${({ theme }) => theme.pallete.neutral['grey-60']};

    svg {
      fill: ${({ theme }) => theme.pallete.neutral['grey-60']};
    }
  }
`;
