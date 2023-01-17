import styled from 'styled-components';

export const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroList = styled.ul`
  display: flex;
  padding: 0;
  list-style-type: none;

  & > * {
    margin-right: 32px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export const HeroDotControls = styled.div`
  display: block;
  text-align: center;
`;

export const HeroImg = styled.img`
  min-width: 100vw;
  max-height: 100vh;
`;

export const HeroContent = styled.div`
  position: relative;
  bottom: 400px;
  right: 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
`;