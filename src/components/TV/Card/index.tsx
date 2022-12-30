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
      <Styles.ImageContainer variant={variant} imgSrc={imgSrc} size={size}/>
      {title && (
        <Styles.Title variant={variant} size={size}>
          {title}
        </Styles.Title>
      )}
    </Styles.Card>
  );
}
