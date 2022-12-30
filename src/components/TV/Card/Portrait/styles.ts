import styled from 'styled-components';

export interface ICard {
  imgSrc: string;
}

export const ImageContainer = styled.div<ICard>`
  cursor: pointer;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
  background-size: contain;
  background-repeat: no-repeat;
  border: ${({ theme }) => theme.spacing.quarck} solid transparent;

  width: 290px;
  height: 435px;
  aspect-ratio: 2 / 3;
`;

export const Card = styled.div`
  &:hover,
  &:focus {
    > h3 {
      font-weight: 700;
    }

    > p {
      color: ${({ theme }) => theme.pallete.neutral.White};
    }

    > ${ImageContainer} {
      filter: drop-shadow(0px 30px 35px rgba(0, 0, 0, 0.3));
      border-color: ${({ theme }) => `${theme.pallete.neutral.White}`};
    }
  }
`;

export const Title = styled.h3`
  margin: ${({ theme }) => `${theme.spacing.xs} 0 0`};
  color: ${({ theme }) => theme.pallete.neutral.White};
  font-family: ${({ theme }) => theme.font.family.brand};
  line-height: ${({ theme }) => theme.font.lineHeight.tight};
  font-size: ${({ theme }) =>theme.font.size[7]};
  font-weight: 400;
`;
