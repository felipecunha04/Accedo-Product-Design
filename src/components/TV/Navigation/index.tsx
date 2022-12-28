import React, { ReactNode } from 'react';

import * as Styles from './styles';

export interface NavigationProps extends Styles.INavigation {
  children: ReactNode | string;
  NavigationImage: string;
  status: 'active' | 'deactivated';
}

export function Navigation({
  children,
  NavigationImage,
  status = 'active',
  variant = 'image',
  size = 'medium',
}: NavigationProps) {
  return (
    <Styles.Navigation
      status={status}
      size={size}
      variant={variant}
    >
      {variant === 'image' && <img src={NavigationImage} alt="User Navigation" />}
      {children}
    </Styles.Navigation>
  );
}
