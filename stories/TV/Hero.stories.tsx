import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Hero, HeroProps } from '../../src/components/TV/Hero';
import { IconButton } from '../../src/components/TV/IconButton'; 
import { theme } from '../../src/styles/theme';

const PlusIcon = (
  <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
  </svg>
);

const mockSlides = [
  {
    id: "1",
    image:
      "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg"
  },
  {
    id: "2",
    image:
      "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/s16H6tpK2utvwDtzZ8Qy4qm5Emw.jpg"
  },
  {
    id: "3",
    image:
      "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/wSILunFEbvw00Ql2aaMHCSZf3cI.jpg"
  },
  {
    id: "4",
    image:
      "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/cRdA9xjHBbobw4LJFsQ3j1CgpVq.jpg"
  }
];

const meta: Meta = {
  title: 'TV/Hero',
  component: Hero,
  argTypes: {
    title: {
      description: 'Content title',
      control: { type: 'text' },
      defaultValue: 'Content Title',
    },
    subtitle: {
      description: 'Content subtitle',
      control: { type: 'text' },
      defaultValue: 'Content Subtitle',
    },
    slideDelay: {
      description: 'Time for the slides do auto scroll. Use the number 0 for them to stay still',
      control: { type: 'number' },
      defaultValue: 2000,
    },
    slides: {
      description: 'Images for the Slider',
      control: { type: 'array' },
      defaultValue: mockSlides,
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Default Hero component',
      },
    },
  },
};

export default meta;

const Default = (args: HeroProps) => (
  <ThemeProvider theme={theme}>
    <Hero {...args}>
      <IconButton >
        {PlusIcon} First Button
      </IconButton>
      <IconButton>
        {PlusIcon} Second Button
      </IconButton>
    </Hero>
  </ThemeProvider>
);

export const DefaultHero = Default.bind({});

