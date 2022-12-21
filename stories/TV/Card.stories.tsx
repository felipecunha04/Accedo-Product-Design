import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Card, CardProps } from '../../src/components/TV/Card';
import { theme } from '../../src/styles/theme';

const PlusIcon = (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
  </svg>
);

const meta: Meta = {
  title: 'TV/Card',
  component: Card,
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    variant: {
      options: ['default', 'text', 'iconCard'],
      description: 'Variant type of the Card Component',
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
        component: 'Default Card component',
      },
    },
  },
};

export default meta;

const Default = (args: CardProps) => (
  <ThemeProvider theme={theme}>
    <Card {...args}>
    </Card>
  </ThemeProvider>
);

export const DefaultCard = Default.bind({});