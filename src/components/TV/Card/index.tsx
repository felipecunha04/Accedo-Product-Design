import React, { ReactNode } from 'react';

import * as Styles from './styles';

export interface CardProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: 'default' | 'text' | 'iconButton';
}

export function Card({
  children,
  leftIcon,
  rightIcon,
  variant = 'default',
  ...props
}: CardProps) {
  return (
    <Styles.Card variant={variant} {...props}>
      {variant !== 'iconButton' && leftIcon}

      {children}

      {variant !== 'iconButton' && rightIcon}
    </Styles.Card>
  );
}
