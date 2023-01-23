import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import * as Styles from './styles';

export interface AvatarProps extends Styles.IAvatar {
  children: ReactNode | string;
  avatarImage?: string;
  status: 'active' | 'deactivated';
}

export function Avatar({
  children,
  avatarImage,
  status = 'active',
  variant = 'image',
  size = 'medium',
}: AvatarProps) {
  return (
    <ThemeProvider theme={theme}>
      <Styles.Avatar
        status={status}
        size={size}
        variant={variant}
      >
        {variant === 'image' && <img src={avatarImage} alt="User Avatar" />}
        {children}
      </Styles.Avatar>
    </ThemeProvider>
  );
}
