import styled from 'styled-components';

type IAvatar = {
  variant: string;
  size: string;
  borderHighlight: Boolean;
  backgroundColor: string;
  avatarImage: any;
};

export const Avatar = styled.div<IAvatar>`
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
      case 'icon':
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

  ${({ backgroundColor, theme }) => {
    switch (backgroundColor) {
      case 'secondary':
        return `
          background: rgba(255, 255, 255, 0.15);
       `;
      default:
        return `
          background: ${theme.pallete.primary.Medium};
          box-shadow: ${theme.shadow.high};
         }
       `;
    }
  }};

  ${({ borderHighlight, theme }) => {
    switch (borderHighlight) {
      case false:
        return `
          border: ${theme.borderWidth.none} solid ${theme.pallete.primary.Medium};
       `;
      default:
        return `
          border: ${theme.borderWidth.tvAvatar} solid ${theme.pallete.primary.Medium};
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
         }
       `;
    }
  }};
`;
