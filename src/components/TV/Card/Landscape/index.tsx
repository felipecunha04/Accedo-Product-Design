import React from 'react';

import * as Styles from './styles';

export interface LandscapeCardProps extends Styles.ICard {
  title?: string;
  subtitle?: string;
}

function LandscapeCard({
  imgSrc,
  title,
  subtitle,
  progress,
  size = 'small',
  ...props
}: LandscapeCardProps) {
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

export default LandscapeCard;
