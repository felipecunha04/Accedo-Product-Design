import React, { ReactNode } from 'react';

import * as Styles from './styles';

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
}

export function IconButton({ children, ...props }: IconButtonProps) {
  return <Styles.Button {...props}>{children}</Styles.Button>;
}
