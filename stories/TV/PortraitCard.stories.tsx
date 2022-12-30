import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import PortraitCard, {
  PortraitCardProps,
} from '../../src/components/TV/Card/Portrait';
import { theme } from '../../src/styles/theme';

const meta: Meta = {
  title: 'TV/Card',
  component: PortraitCard,
  argTypes: {
    title: {
      description: 'Content title',
      control: { type: 'text' },
      defaultValue: 'Content Title',
    },
    imgSrc: {
      description: 'Content image source (URL)',
      control: { type: 'text' },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Default Portrait Card component',
      },
    },
  },
};

export default meta;

const Template = (args: PortraitCardProps) => (
  <ThemeProvider theme={theme}>
    <PortraitCard {...args}></PortraitCard>
  </ThemeProvider>
);

export const Portrait = Template.bind({});

Portrait.args = {
  imgSrc:
    'https://firebasestorage.googleapis.com/v0/b/accedo-ds.appspot.com/o/black-panther-portrait-2x.png?alt=media',
};
