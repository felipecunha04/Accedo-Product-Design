import { ReactNode } from 'react';

import * as Styles from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  variant?: 'default' | 'text' | 'iconbutton';
}

export function Button({
  children,
  startIcon,
  endIcon,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <Styles.Button variant={variant} {...props}>
      {startIcon}
      
      <span>{children}</span>

      {endIcon}
    </Styles.Button>
  );
}
