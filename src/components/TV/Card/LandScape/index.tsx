import React from 'react';

import * as Styles from './styles';

export interface LandScapeCardProps extends Styles.ICard {
  title?: string;
  subtitle?: string;
}

export function LandScapeCard({
  imgSrc,
  title,
  subtitle,
  progress,
  size = 'small',
  ...props
}: LandScapeCardProps) {
  return (
    <Styles.Card {...props}>
      <Styles.ImageContainer imgSrc={imgSrc} size={size}>
        {progress && <Styles.ProgressBar value={progress} max="100" />}
      </Styles.ImageContainer>
      {title && <Styles.Title size={size}>{title}</Styles.Title>}
      {subtitle && <Styles.SubTitle size={size}>{subtitle}</Styles.SubTitle>}
    </Styles.Card>
  );
}
