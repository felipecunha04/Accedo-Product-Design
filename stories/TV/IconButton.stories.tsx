import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import {
  IconButton,
  IconButtonProps,
} from '../../src/components/TV/IconButton';
import { theme } from '../../src/styles/theme';

const PlusIcon = (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
  </svg>
);

const meta: Meta = {
  title: 'TV/Icon Button',
  component: IconButton,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['default', 'text'],
      defaultValue: 'default',
      description: 'Variant type of the Component',
      control: { type: 'select' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Default Icon Button Component',
      },
    },
  },
};

export default meta;

const Template = (args: IconButtonProps) => (
  <ThemeProvider theme={theme}>
    <IconButton {...args}>{PlusIcon}</IconButton>
  </ThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
};

export const Text = Template.bind({});

Text.args = {
  disabled: false,
  variant: 'text',
};
