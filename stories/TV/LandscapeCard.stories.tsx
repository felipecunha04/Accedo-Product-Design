import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import LandscapeCard, {
  LandscapeCardProps,
} from '../../src/components/TV/Card/Landscape';
import { theme } from '../../src/styles/theme';

const meta: Meta = {
  title: 'TV/Card',
  component: LandscapeCard,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      description: 'Size of the component',
      control: { type: 'select' },
      defaultValue: 'small',
    },
    title: {
      description: 'Content title',
      control: { type: 'text' },
      defaultValue: 'Content Title',
    },
    subtitle: {
      description: 'Content subtitle',
      control: { type: 'text' },
    },
    imgSrc: {
      description: 'Content image source (URL)',
      control: { type: 'text' },
    },
    progress: {
      description: 'Progress amount percentage (number between 0-100)',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Default Landscape Card Component',
      },
    },
  },
};

export default meta;

const Template = (args: LandscapeCardProps) => (
  <ThemeProvider theme={theme}>
    <LandscapeCard {...args}></LandscapeCard>
  </ThemeProvider>
);

export const Landscape = Template.bind({});

Landscape.args = {
  subtitle: 'Secondary text',
  progress: '43',
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-landscape.png?alt=media',
};
