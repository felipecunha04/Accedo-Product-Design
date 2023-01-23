import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
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
    <ThemeProvider theme={theme}>
      <Styles.Button variant={variant} {...props}>
        {children}
      </Styles.Button>
    </ThemeProvider>
  );
}
