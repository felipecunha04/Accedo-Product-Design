import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { LandscapeRailCard, LandscapeRailCardProps } from '../../src/components/TV/RailCard/LandscapeRailCard';
import { theme } from '../../src/styles/theme';


const FakeData = {
  title: 'Primary text',
  subtitle: 'Secondary text',
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-landscape.png?alt=media',
}

const cardsData = [FakeData, FakeData, FakeData, FakeData, FakeData];

const meta: Meta = {
  title: 'TV/Rail Card',
  component: LandscapeRailCard,
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
        component: 'Landscape Rail Card component',
      },
    },
  },
};

export default meta;

const Template = (args: LandscapeRailCardProps) => (
  <ThemeProvider theme={theme}>
    <LandscapeRailCard {...args} />
  </ThemeProvider>
);

export const LandscapeRail = Template.bind({});

