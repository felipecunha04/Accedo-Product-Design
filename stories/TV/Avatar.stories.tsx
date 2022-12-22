import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { Avatar, AvatarProps } from '../../src/components/TV/Avatar';
import { theme } from '../../src/styles/theme';
import AvatarImage from '../../static/avatarImage.png';

const AvatarIcon = (
  <svg width="40" height="44" viewBox="0 0 40 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.3776 23.5585C27.7623 22.4678 31.8818 17.7893 31.8818 12.0964C31.8818 5.62539 26.5743 0.399994 20.0015 0.399994C13.4288 0.399994 8.12122 5.62539 8.12122 12.0201C8.12122 17.6343 12.1605 22.3915 17.6255 23.4822C7.80339 24.6518 0.200001 32.7607 0.200001 43.6H39.8C39.803 32.7607 32.1996 24.7278 22.3776 23.5585Z" fill="white"/>
  </svg>
);

const meta: Meta = {
  title: 'TV/Avatar',
  component: Avatar,
  argTypes: {
    variant: {
      options: ['default', 'text', 'icon'],
      description: 'Variant type of the Avatar Component',
      control: { type: 'select' },
      defaultValue: 'default'
    },
    backgroundColor: {
      options: ['primary', 'secondary'],
      description: 'Select the background color when the avatar does not have an image',
      control: { type: 'select' },
      defaultValue: 'primary'
    },
    size: {
      options: ['default', 'small', 'big'],
      description: 'Sets the size of the Avatar',
      control: { type: 'select' },
      defaultValue: 'default'
    },
    borderHighlight: {
      options: [true, false],
      control: { type: 'inline-radio' },
      defaultValue: true
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Avatar component',
      },
    },
  },
};

export default meta;


const Default = (args: AvatarProps) => (
  <ThemeProvider theme={theme}>
    <Avatar {...args} avatarImage={AvatarImage}>
      {args.variant === 'text' && 'A' || args.variant === 'default' && AvatarIcon}
    </Avatar>
  </ThemeProvider>
);

export const DefaultAvatar = Default.bind({});
