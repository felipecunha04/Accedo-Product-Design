import React from 'react';

import * as Styles from './styles';

export interface PortraitCardProps extends Styles.ICard {
  title?: string;
}

export function PortraitCard({ imgSrc, title, ...props }: PortraitCardProps) {
  return (
    <Styles.Card {...props}>
      <Styles.ImageContainer imgSrc={imgSrc} />
      {title && <Styles.Title>{title}</Styles.Title>}
    </Styles.Card>
  );
}
