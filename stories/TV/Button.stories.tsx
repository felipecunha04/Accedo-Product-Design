import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Button, ButtonProps } from '../../src/components/TV/Button';
import { theme } from '../../src/styles/theme';

const Icon = () => (
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
      options: ['default', 'text', 'iconbutton'],
      description: 'Variant type of the Button Component',
      control: { type: 'select' },
    },
    startIcon: {
      description: 'Icon Element to be added in the start of the button',
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
    <Button {...args}>Click me</Button>
  </ThemeProvider>
);

export const DefaultButton = Default.bind({});

DefaultButton.args = {
  disabled: false,
  variant: 'default',
};

const StartIcon = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>Click me</Button>
  </ThemeProvider>
);

export const StartIconButton = StartIcon.bind({});

StartIconButton.args = {
  disabled: false,
  variant: 'default',
  startIcon: <Icon />,
};

StartIconButton.parameters = {
  docs: {
    description: {
      component: 'Button with a Start Icon',
    },
  },
};
