import React, { ReactNode } from 'react';

import * as Styles from './styles';
import { Button } from '../Button';
import { Avatar } from '../Avatar';

export interface NavigationProps extends Styles.INavigation {
  children: ReactNode | string;
  NavigationImage: string;
  status: 'active' | 'deactivated';
  logo: string;
}

export function Navigation({
  // children,
  // NavigationImage,
  status = 'active',
  variant = 'image',
  position = 'center',
  logo = '',
}: NavigationProps) {
  return (
    <Styles.Navigation
      status={status}
      position={position}
      variant={variant}
    >
      {logo ? (
        <img className='logo' src={logo} />
      ) : (
        <p>Insert Logo Prop</p>
      )}
      <nav>
        <ul className='middle-links'>
          <li>
            <Button variant='text'>
              Button 1
            </Button>
            <Button variant='text'>
              Button 2
            </Button>
            <Button variant='text'>
              Button 3
            </Button>
          </li>
        </ul>
      </nav>
      <div className='right-links'>
        <Avatar variant='text' status='deactivated' size='small'>
          A
        </Avatar>
      </div>
    </Styles.Navigation>
  );
}
