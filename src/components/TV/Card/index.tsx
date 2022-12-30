import React from 'react';

import * as Styles from './styles';

export interface CardProps extends Styles.ICard {
  title?: string;
  subtitle?: string;
}

export function Card({
  variant,
  imgSrc,
  title,
  subtitle,
  progress,
  size = 'small',
  ...props
}: CardProps) {
  return (
    <Styles.Card {...props}>
      <Styles.ImageContainer variant={variant} imgSrc={imgSrc} size={size}>
        {progress && <Styles.ProgressBar value={progress} max="100" />}
      </Styles.ImageContainer>
      {title && (
        <Styles.Title variant={variant} size={size}>
          {title}
        </Styles.Title>
      )}
      {subtitle && <Styles.SubTitle size={size}>{subtitle}</Styles.SubTitle>}
    </Styles.Card>
  );
}
