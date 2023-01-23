import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';

import * as Styles from './styles';

export interface ButtonProps extends Styles.IButton {
  children: ReactNode | string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}

export function Button({
  children,
  leftIcon,
  rightIcon,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <ThemeProvider theme={theme}>
      <Styles.Button variant={variant} {...props}>
        {leftIcon && leftIcon}

        {children}

        {rightIcon && rightIcon}
      </Styles.Button>
    </ThemeProvider>
  );
}
