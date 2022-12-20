import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Button, ButtonProps } from '../../src/components/TV/Button';
import { theme } from '../../src/styles/theme';

const PlusIcon = (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
  </svg>
);

const meta: Meta = {
  title: 'TV/Button',
  component: Button,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['default', 'text', 'iconButton'],
      description: 'Variant type of the Button Component',
      control: { type: 'select' },
    },
    rightIcon: {
      options: ['PlusIcon', 'none'],
      mapping: {
        PlusIcon: PlusIcon,
        none: <></>,
      },
    },
    leftIcon: {
      options: ['PlusIcon', 'none'],
      mapping: {
        PlusIcon: PlusIcon,
        none: <></>,
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Default button component',
      },
    },
  },
};

export default meta;

const Default = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>
      {args.variant === 'iconButton' ? PlusIcon : 'Click me'}
    </Button>
  </ThemeProvider>
);

export const DefaultButton = Default.bind({});

DefaultButton.args = {
  disabled: false,
  variant: 'default',
  leftIcon: 'PlusIcon',
  rightIcon: 'PlusIcon',
};

export const TextButton = DefaultButton.bind({});

TextButton.args = {
  disabled: false,
  variant: 'text',
  leftIcon: 'PlusIcon',
  rightIcon: 'PlusIcon',
};

export const IconButton = DefaultButton.bind({});

IconButton.args = {
  disabled: false,
  variant: 'iconButton',
  leftIcon: 'none',
  rightIcon: 'none',
};
