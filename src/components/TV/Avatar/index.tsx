import React, { ReactNode } from 'react';

import * as Styles from './styles';
export interface AvatarProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  borderHighlight?: Boolean;
  backgroundColor?: 'primary' | 'secondary';
  variant?: 'default' | 'text' | 'icon';
  size?: 'default' | 'small' | 'big';
}

export function Avatar({
  children,
  borderHighlight = true,
  backgroundColor = 'primary',
  variant = 'default',
  size = 'default',
  ...props
}: AvatarProps) {
  return (
    <Styles.Avatar avatarImage={children} borderHighlight={borderHighlight} backgroundColor={backgroundColor} size={size} variant={variant} {...props}>
      {children}
    </Styles.Avatar>
  );
}
