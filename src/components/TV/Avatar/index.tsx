import React, { ReactNode } from 'react';

import * as Styles from './styles';

export interface AvatarProps extends Styles.IAvatar {
  children: ReactNode | string;
  avatarImage: string;
}

export function Avatar({
  children,
  avatarImage,
  borderHighlight = true,
  backgroundColor = 'primary',
  variant = 'default',
  size = 'default',
}: AvatarProps) {
  return (
    <Styles.Avatar
      borderHighlight={borderHighlight}
      backgroundColor={backgroundColor}
      size={size}
      variant={variant}
    >
      {variant === 'icon' && <img src={avatarImage} alt="" />}
      {children}
    </Styles.Avatar>
  );
}
