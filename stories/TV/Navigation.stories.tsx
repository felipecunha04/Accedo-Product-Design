import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Navigation, NavigationProps } from '../../src/components/TV/Navigation';
import { theme } from '../../src/styles/theme';
import NavigationImage from '../../static/avatarImage.png';

const NavigationIcon = (
  <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.3776 23.5585C27.7623 22.4678 31.8818 17.7893 31.8818 12.0964C31.8818 5.62539 26.5743 0.399994 20.0015 0.399994C13.4288 0.399994 8.12122 5.62539 8.12122 12.0201C8.12122 17.6343 12.1605 22.3915 17.6255 23.4822C7.80339 24.6518 0.200001 32.7607 0.200001 43.6H39.8C39.803 32.7607 32.1996 24.7278 22.3776 23.5585Z" fill="white"/>
  </svg>
);

const meta: Meta = {
  title: 'TV/Navigation',
  component: Navigation,
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


const Default = (args: NavigationProps) => (
  <ThemeProvider theme={theme}>
    <Navigation {...args} NavigationImage={NavigationImage}>
      {args.variant === 'text' && 'A' || args.variant === 'icon' && NavigationIcon}
    </Navigation>
  </ThemeProvider>
);

export const DefaultNavigation = Default.bind({});
