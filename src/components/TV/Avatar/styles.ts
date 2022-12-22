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
  border: 1px solid red;
  border-radius: 1000px;
  background: rgba(255, 255, 255, 0.15);

  ${({ avatarImage, variant }) => {
    switch (variant) {
      case 'text':
        return `
          svg {
            display: none;
          }
       `;
      case 'icon':
        return `
          background: url(${avatarImage}) !important;
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

  background: #3C92DD;
  box-shadow: 0px 50px 35px rgba(0, 0, 0, 0.5);

  ${({ backgroundColor }) => {
    switch (backgroundColor) {
      case 'secondary':
        return `
          background: rgba(255, 255, 255, 0.15);
       `;
      default:
        return `
          background: #3C92DD;
          box-shadow: 0px 50px 35px rgba(0, 0, 0, 0.5);
         }
       `;
    }
  }};

  ${({ borderHighlight }) => {
    switch (borderHighlight) {
      case false:
        return `
          border: 0px solid #3C92DD;
       `;
      default:
        return `
          border: 4px solid #3C92DD;
         }
       `;
    }
  }};

  ${({ size }) => {
    switch (size) {
      case 'small':
        return `
          width: 64px;
          height: 64px;
       `;
      case 'big':
        return `
          width: 264px;
          height: 264px;
       `;
      default:
        return `
          width: 120px;
          height: 120px;
         }
       `;
    }
  }};
`;
