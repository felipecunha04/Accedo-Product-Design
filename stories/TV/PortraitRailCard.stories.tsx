import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { PortraitRailCard, PortraitRailCardProps } from '../../src/components/TV/RailCard/PortraitRailCard';
import { theme } from '../../src/styles/theme';

const FakeData = {
  title: 'Primary text',
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-portrait-2x.png?alt=media',
}

const cardsData = [FakeData, FakeData, FakeData, FakeData, FakeData];

const meta: Meta = {
  title: 'TV/Rail Card',
  component: PortraitRailCard,
  argTypes: {
    zoomFactor: {
      description: 'Set how much zoom on selection or hover',
      defaultValue: 1,
      control: { type: 'number' },
    },
    slideMargin: {
      description: 'Set the space between cards',
      defaultValue: 10,
      control: { type: 'number' },
    },
    maxVisibleSlides: {
      description: 'Set how many slides are visible at once',
      defaultValue: 5,
      control: { type: 'number' },
    },
    pageTransition: {
      description: 'Set the transition when flipping pages',
      defaultValue: 500,
      control: { type: 'number' },
    },
    cardsArray: {
      description: 'Cards for the Rails',
      control: { type: 'array' },
      defaultValue: cardsData,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Navigation component',
      },
    },
  },
};

export default meta;


const Template = (args: PortraitRailCardProps) => (
  <ThemeProvider theme={theme}>
    <PortraitRailCard {...args} />
  </ThemeProvider>
);

export const PortraitRail = Template.bind({});