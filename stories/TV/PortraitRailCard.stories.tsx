import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { PortraitRailCard, PortraitRailCardProps } from '../../src/components/TV/RailCard/PortraitRailCard';
import { theme } from '../../src/styles/theme';

const meta: Meta = {
  title: 'TV/RailCard',
  component: PortraitRailCard,
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


const Template = (args: PortraitRailCardProps) => (
  <ThemeProvider theme={theme}>
    <PortraitRailCard {...args}>
    </PortraitRailCard>
  </ThemeProvider>
);

export const PortraitRail = Template.bind({});

PortraitRail.args = {
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-portrait-2x.png?alt=media',
};