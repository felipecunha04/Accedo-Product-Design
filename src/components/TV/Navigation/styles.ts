import styled from 'styled-components';

export interface INavigation {
  variant?: 'image' | 'text' | 'icon';
  position?: 'center' | 'left';
  status?: 'active' | 'deactivated';
}

export const Navigation = styled.header<INavigation>`
  /* border-radius: ${({ theme }) => theme.borderRadius.circle};
  background: rgba(255, 255, 255, 0.15);
  font-family: ${({ theme }) => theme.font.family.brand};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  color: ${({ theme }) => theme.pallete.neutral.White}; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 10%;

  ${({ position }) => {
    switch (position) {
      case 'left':
        return `
          .right-links {
            margin-left: auto;
          }
          justify-content: flex-start;
       `;
      default:
        return `
          justify-content: space-between;

       `;
    }
  }};
  

  .logo {
    cursor: pointer;
  };

  .nav-links {
    list-style: none;
  };

  .middle-links li {
    display: flex;
    padding: 0px 20px;
  };

  .middle-links li a {
    transition: all 0.3s ease 0s;
  };

  .middle-links li a:hover {
    color: #0088a9;
  };

  /* button {
    padding: 9px 25px;
    background-color: rgba(0, 136, 169, 1);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
  };

  button:hover {
    background-color: rgba(0, 136, 169, 0.8);
  } */

  /* ${({ status, theme }) => {
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
  }}; */
`;
