import React from 'react';

import * as Styles from './styles';
import { Button } from '../Button';
import { Avatar, AvatarProps } from '../Avatar';
import { IconButton } from '../IconButton';

export interface NavigationProps extends Styles.INavigation {
  logo?: {
    src: string;
    alt: string;
  };
  navigationItems: {
    text: string;
    action: () => void;
  }[];
  iconButtons: {
    icon: JSX.Element;
    action: () => void;
  }[];
  avatar?: {
    image?: string;
    text?: string;
  } & Pick<AvatarProps, 'variant'>;
}

export function Navigation({
  position = 'center',
  logo,
  navigationItems,
  iconButtons,
  avatar,
}: NavigationProps) {
  return (
    <Styles.Navigation>
      {logo && <Styles.Logo src={logo.src} alt={logo?.alt} />}

      <Styles.NavigationLinks position={position}>
        {navigationItems.map((item) => (
          <Button variant="text" onClick={item.action} key={item.text}>
            {item.text}
          </Button>
        ))}
      </Styles.NavigationLinks>

      <Styles.IconButtonsContainer>
        {iconButtons.map((button, index) => (
          <IconButton variant="text" onClick={() => button.action} key={index}>
            {button.icon}
          </IconButton>
        ))}
        {avatar && (
          <Avatar
            variant={avatar.variant}
            avatarImage={avatar.image}
            status="deactivated"
            size="small"
          >
            {avatar.text}
          </Avatar>
        )}
      </Styles.IconButtonsContainer>
    </Styles.Navigation>
  );
}
