import React, {HTMLAttributes, ReactNode} from 'react'

import '../../styles/index.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  endIcon?: JSX.Element;
  variant?: 'default' | 'text' | 'iconButton';
}

export function Button({
  children,
  leftIcon,
  rightIcon,
  variant = 'default',
  ...props
}: ButtonProps) {
  return (
    <button className='sassButton' {...props}>
      {leftIcon}
      
      <span>{children}</span>

      {rightIcon}
    </button>
  );
}
