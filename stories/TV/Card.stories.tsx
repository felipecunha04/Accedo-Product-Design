import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Card, CardProps } from '../../src/components/TV/Card';
import { theme } from '../../src/styles/theme';

const meta: Meta = {
  title: 'TV/Card',
  component: Card,
  argTypes: {
    variant: {
      options: ['portrait', 'landscape'],
      description: 'Variant type of the component',
      control: { type: 'select' },
    },
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
        component: 'Default Card component',
      },
    },
  },
};

export default meta;

const Portrait = (args: CardProps) => (
  <ThemeProvider theme={theme}>
    <Card {...args}></Card>
  </ThemeProvider>
);

export const PortraitCard = Portrait.bind({});
export const LandScapeCard = Portrait.bind({});

PortraitCard.args = {
  variant: 'portrait',
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-portrait-2x.png?alt=media',
};

LandScapeCard.args = {
  variant: 'landscape',
  subtitle: 'Secondary text',
  progress: '43',
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-landscape.png?alt=media',
};
