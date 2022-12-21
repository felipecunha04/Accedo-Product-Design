import React, { ReactNode } from 'react';

import * as Styles from './styles';

export interface AvatarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  variant?: 'default' | 'text' | 'iconButton';
}

export function Avatar({
  children,
  leftIcon,
  rightIcon,
  variant = 'default',
  ...props
}: AvatarProps) {
  return (
    <Styles.Avatar variant={variant} {...props}>
      {variant !== 'iconButton' && leftIcon}

      {children}

      {variant !== 'iconButton' && rightIcon}
    </Styles.Avatar>
  );
}
