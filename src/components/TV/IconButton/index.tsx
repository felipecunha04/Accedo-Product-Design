import React, { ReactNode } from 'react';

import * as Styles from './styles';

export interface IconButtonProps extends Styles.IButton {
  children: ReactNode | string;
}

export function IconButton({
  children,
  variant = 'default',
  ...props
}: IconButtonProps) {
  return (
    <Styles.Button variant={variant} {...props}>
      {children}
    </Styles.Button>
  );
}
