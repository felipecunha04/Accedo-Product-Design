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
  margin-top: 0;
  background: linear-gradient(90deg, #090D11 0%, #090D1180 35.5%, #090D1100 89.25%), linear-gradient(180deg, #090D1100 0%, #090D11b3 64.06%, #090D11 88.54%);

  & > * {
    margin-right: 32px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export const HeroDotControls = styled.div`
  display: block;
  text-align: left;
`;

export const HeroImg = styled.img`
  min-width: 100vw;
  max-height: 100vh;
  opacity: .5;
`;

export const HeroContent = styled.div`
  position: relative;
  bottom: 550px;
  right: 0px;
  margin-left: 2rem;
`;

export const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.family.brand};
  font-style: normal;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size[13]};
  line-height: ${({ theme }) => theme.font.lineHeight.regular};
  color: ${({ theme }) => theme.pallete.neutral.White};
  margin-bottom: 0;
`;

export const HeroSubtitle = styled.span`
  font-family: ${({ theme }) => theme.font.family.brand};
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.font.size[5]};
  line-height: ${({ theme }) => theme.font.lineHeight.distant};
  color: ${({ theme }) => theme.pallete.neutral.Grey80};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 1rem;

  button:first-child {
    margin-right: 10px;
  }
`;