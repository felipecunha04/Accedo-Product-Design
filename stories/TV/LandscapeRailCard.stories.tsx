import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { LandscapeRailCard, LandscapeRailCardProps } from '../../src/components/TV/RailCard/LandscapeRailCard';
import { theme } from '../../src/styles/theme';

const meta: Meta = {
  title: 'TV/RailCard',
  component: LandscapeRailCard,
  argTypes: {
    variant: {
      options: ['image', 'text', 'icon'],
      description: 'Variant type of the Navigation Component',
      control: { type: 'select' },
      defaultValue: 'image'
    },
    status: {
      options: ['active', 'deactivated'],
      description: 'The status sets the border as active or not',
      control: { type: 'select' },
      defaultValue: 'primary'
    },
    size: {
      options: ['small', 'medium', 'big'],
      description: 'Sets the size of the Navigation',
      control: { type: 'select' },
      defaultValue: 'medium'
    }
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


const Template = (args: LandscapeRailCardProps) => (
  <ThemeProvider theme={theme}>
    <LandscapeRailCard {...args}>

    </LandscapeRailCard>
  </ThemeProvider>
);

export const LandscapeRail = Template.bind({});

