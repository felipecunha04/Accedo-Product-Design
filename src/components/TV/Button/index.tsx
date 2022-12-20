import React, { ReactNode } from 'react';

import * as Styles from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: 'default' | 'text' | 'iconButton';
}

export function Button({
  children,
  leftIcon,
  rightIcon,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <Styles.Button variant={variant} {...props}>
      {variant !== 'iconButton' && leftIcon}

      {children}

      {variant !== 'iconButton' && rightIcon}
    </Styles.Button>
  );
}
