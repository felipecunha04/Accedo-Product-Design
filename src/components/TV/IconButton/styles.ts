import styled, { css } from 'styled-components';

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'text';
}

export const Button = styled.button<IButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['2xs']};
  border-radius: ${({ theme }) => theme.borderRadius.pill};
  outline: 0;
  border: ${({ theme }) => theme.borderWidth.none};
  color: ${({ theme }) => theme.pallete.neutral.White};
  background-color: rgba(255, 255, 255, 0.15);

  svg {
    fill: ${({ theme }) => theme.pallete.neutral.White};
    width: ${({ theme }) => theme.font.size[7]};
    height: ${({ theme }) => theme.font.size[7]};
  }

  &:enabled {
    cursor: pointer;

    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.pallete.primary.Medium};
      box-shadow: 0px 30px 35px rgba(0, 0, 0, 0.3);
    }
  }

  &:disabled svg {
    fill: ${({ theme }) => theme.pallete.neutral.Grey60};
  }

  ${({ variant, theme }) => {
    switch (variant) {
      case 'text':
        return css`
          background-color: transparent;

          &:enabled {
            &:hover,
            &:focus {
              box-shadow: none;
            }
          }

          &:disabled svg {
            fill: ${theme.pallete.neutral.Grey30};
          }
        `;
      default:
        return css`
          &:disabled {
            background-color: ${theme.pallete.neutral.Grey30};
          }
        `;
    }
  }}
`;
