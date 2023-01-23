import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import {
  LandScapeCard, LandScapeCardProps,
} from '../../src/components/TV/Card/LandScape';
import { theme } from '../../src/styles/theme';

const meta: Meta = {
  title: 'TV/Card',
  component: LandScapeCard,
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

const Template = (args: LandScapeCardProps) => (
  <ThemeProvider theme={theme}>
    <LandScapeCard {...args}></LandScapeCard>
  </ThemeProvider>
);

export const LandScape = Template.bind({});

LandScape.args = {
  subtitle: 'Secondary text',
  progress: '43',
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-landscape.png?alt=media',
};
