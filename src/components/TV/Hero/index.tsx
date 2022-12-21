import React, { ReactNode } from 'react';

import * as Styles from './styles';

export interface HeroProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: 'default' | 'text' | 'iconButton';
}

export function Hero({
  children,
  leftIcon,
  rightIcon,
  variant = 'default',
  ...props
}: HeroProps) {
  return (
    <Styles.Hero variant={variant} {...props}>
      {variant !== 'iconButton' && leftIcon}

      {children}

      {variant !== 'iconButton' && rightIcon}
    </Styles.Hero>
  );
}
