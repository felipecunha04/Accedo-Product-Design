import styled, { css } from 'styled-components';

export interface ICard {
  variant: 'portrait' | 'landscape';
  size?: 'small' | 'medium' | 'large';
  imgSrc: string;
  progress?: number;
}

const sizeMap = {
  landscape: {
    small: css`
      width: 464px;
      height: 261px;
    `,
    medium: css`
      width: 640px;
      height: 360px;
    `,
    large: css`
      width: 1200px;
      height: 675px;
    `,
  },
  portrait: {
    small: css`
      width: 290px;
      height: 435px;
    `,
    medium: css`
      width: 350px;
      height: 525px;
    `,
    large: css`
      width: 450px;
      height: 675px;
    `,
  },
};

export const ImageContainer = styled.div<ICard>`
  cursor: pointer;
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.card};
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
  background-size: contain;
  background-repeat: no-repeat;
  border: ${({ theme }) => theme.spacing.quarck} solid transparent;

  ${({ variant, size = 'small' }) => {
    switch (variant) {
      case 'landscape':
        return `
        ${sizeMap.landscape[size]}
        aspect-ratio: 16 / 9;
       `;
      default:
        return `
          ${sizeMap.portrait[size]}
          aspect-ratio: 2 / 3;
       `;
    }
  }}
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

export const ProgressBar = styled.progress`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 16px;
  border-bottom-left-radius: ${({ theme }) => theme.borderRadius.card};
  border-bottom-right-radius: ${({ theme }) => theme.borderRadius.card};

  &::-webkit-progress-bar {
    background-color: rgba(255, 255, 255, 0.5);
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.card};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.card};
  }

  &::-webkit-progress-value {
    background-color: ${({ theme }) => theme.pallete.accent.Default};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.card};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.card};
  }
`;

export const Title = styled.h3<Pick<ICard, 'variant' | 'size'>>`
  margin: ${({ theme, variant }) =>
    `${variant === 'portrait' ? theme.spacing.xs : theme.spacing.sm} 0 0`};
  color: ${({ theme }) => theme.pallete.neutral.White};
  font-family: ${({ theme }) => theme.font.family.brand};
  line-height: ${({ size, theme }) =>
    size === 'large'
      ? theme.font.lineHeight.regular
      : theme.font.lineHeight.tight};
  font-size: ${({ size, theme }) =>
    size === 'large' ? theme.font.size[10] : theme.font.size[7]};
  font-weight: ${({ size }) => (size === 'large' ? 500 : 400)};
`;

export const SubTitle = styled.p<Pick<ICard, 'size'>>`
  margin: ${({ theme }) => `${theme.spacing.nano} 0 0`};
  color: ${({ theme }) => theme.pallete.neutral.Grey80};
  font-family: ${({ theme }) => theme.font.family.brand};
  line-height: ${({ size, theme }) =>
    size === 'large'
      ? theme.font.lineHeight.tight
      : theme.font.lineHeight.regular};
  font-size: ${({ size, theme }) =>
    size === 'large' ? theme.font.size[7] : theme.font.size[4]};
  font-weight: 400;
`;
