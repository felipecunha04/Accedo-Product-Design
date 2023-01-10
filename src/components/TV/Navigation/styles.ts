import styled from 'styled-components';

export interface INavigation {
  position?: 'center' | 'left';
}

export const Navigation = styled.header`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.pallete.bg.Default};
  gap: 29px;
  min-width: max-content;

  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing['md']} ${theme.spacing['lg']}`};
`;

export const NavigationLinks = styled.div<INavigation>`
  display: flex;
  align-items: center;
  justify-content: ${({ position }) =>
    position === 'center' ? 'center' : 'flex-start'};
  width: 100%;
  gap: 64px;
`;

export const IconButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Logo = styled.img`
  max-height: 64px;
`;
