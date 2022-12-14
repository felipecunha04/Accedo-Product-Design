import React, {ReactNode} from 'react'

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
    <button {...props}>
      {leftIcon}
      
      <span>{children}</span>

      {rightIcon}
    </button>
  );
}
