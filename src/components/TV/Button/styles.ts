import styled from 'styled-components';

type IButton = {
  variant: string;
}

export const Button = styled.button<IButton>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: ${({ theme }) => `${theme.spacing['2xs']} ${theme.spacing['xs']}`};
  gap: ${({ theme }) => theme.spacing.nano};
  color: ${({ theme }) => theme.pallete.neutral.White};
  ${({ variant, theme }) => {
    switch(variant) {
      case 'text':
        return `
          color: black;
          padding: 0;
          border-radius: ${theme.borderRadius.none};
          background-color: ${theme.pallete.neutral.White};
          &:enabled {
            cursor: pointer;
        
            &:hover,
            &:focus {
              background-color: ${theme.pallete.neutral.White};
            }
          }
        `
      case 'iconButton':
        return `
          background-color: rgba(255, 255, 255, 0.15);
          &:enabled {
            cursor: pointer;
        
            &:hover,
            &:focus {
              background-color: ${theme.pallete.primary.Medium};
            }
          }
        `
      default:
        return `
          background-color: rgba(255, 255, 255, 0.15);
          &:enabled {
            cursor: pointer;
        
            &:hover,
            &:focus {
              background-color: ${theme.pallete.primary.Medium};
            }
          }
        `
    }
  }}
  border-radius: ${({ theme }) => theme.borderRadius.pill};

  font-family: ${({ theme }) => theme.font.family.brand};
  font-weight: 700;
  line-height: ${({ theme }) => theme.font.lineHeight.tight};

  outline: 0;
  border: ${({ theme }) => theme.borderWidth.none};

  svg {
    fill: ${({ theme }) => theme.pallete.neutral.White};
    width: ${({ theme }) => theme.font.size[4]};
    height: ${({ theme }) => theme.font.size[4]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.pallete.neutral.Grey30};
    color: ${({ theme }) => theme.pallete.neutral.Grey60};

    svg {
      fill: ${({ theme }) => theme.pallete.neutral.Grey60};
    }
  }
`;
