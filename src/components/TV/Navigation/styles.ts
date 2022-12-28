import styled from 'styled-components';

export interface INavigation {
  variant?: 'image' | 'text' | 'icon';
  size?: 'medium' | 'small' | 'big';
  status?: 'active' | 'deactivated';
}

export const Navigation = styled.div<INavigation>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.circle};
  background: rgba(255, 255, 255, 0.15);
  font-family: ${({ theme }) => theme.font.family.brand};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  color: ${({ theme }) => theme.pallete.neutral.White};

  ${({ variant }) => {
    switch (variant) {
      case 'text':
        return `
          svg {
            display: none;
          }
       `;
      case 'image':
        return `
          img {
            max-height: 100%;
            max-width: 100%;
          }
          svg {
            display: none;
          }
       `;
      default:
        return `
         }
       `;
    }
  }};

  ${({ status, theme }) => {
    switch (status) {
      case 'deactivated':
        return `
          background: rgba(255, 255, 255, 0.15);
          border: ${theme.borderWidth.none} solid ${theme.pallete.primary.Medium};
       `;
      default:
        return `
          background: ${theme.pallete.primary.Medium};
          box-shadow: ${theme.shadow.high};
          border: ${theme.borderWidth.tvNavigation} solid ${theme.pallete.primary.Medium};
         }
       `;
    }
  }};

  ${({ size, theme }) => {
    switch (size) {
      case 'small':
        return `
          width: 64px;
          height: 64px;
          font-size: ${theme.font.size['8']};

          svg {
            width: 17px;
          }
       `;
      case 'big':
        return `
          width: 264px;
          height: 264px;
          font-size: ${theme.font.size['15']};
       `;
      default:
        return `
          width: 120px;
          height: 120px;
          font-size: ${theme.font.size['11']};

          svg {
            width: 57px;
          }
         }
       `;
    }
  }};
`;
