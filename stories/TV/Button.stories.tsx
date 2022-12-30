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
      options: ['default', 'text'],
      description: 'Variant type of the Component',
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
        component: 'Default Button Component',
      },
    },
  },
};

export default meta;

const Template = (args: ButtonProps) => (
  <ThemeProvider theme={theme}>
    <Button {...args}>
      Click Me
    </Button>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  variant: 'default',
  leftIcon: 'PlusIcon',
  rightIcon: 'PlusIcon',
};

export const Text = Template.bind({});

Text.args = {
  disabled: false,
  variant: 'text',
  leftIcon: 'PlusIcon',
  rightIcon: 'PlusIcon',
};