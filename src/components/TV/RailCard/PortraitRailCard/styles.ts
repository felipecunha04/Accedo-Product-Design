import styled from 'styled-components';

export interface IPortraitRailCard {
  variant?: 'image' | 'text' | 'icon';
  position?: 'center' | 'left';
  status?: 'active' | 'deactivated';
}

export const PortraitRailCard = styled.header<IPortraitRailCard>`
  /* border-radius: ${({ theme }) => theme.borderRadius.circle};
  background: rgba(255, 255, 255, 0.15);
  font-family: ${({ theme }) => theme.font.family.brand};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  color: ${({ theme }) => theme.pallete.neutral.White}; */
  /* display: flex;
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
    width: 80px;
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
  }; */
`;
