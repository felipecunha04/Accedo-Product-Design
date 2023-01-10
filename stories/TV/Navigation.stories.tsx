import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import {
  Navigation,
  NavigationProps,
} from '../../src/components/TV/Navigation';
import { theme } from '../../src/styles/theme';

const SearchIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17.3933 10.2492C16.4422 9.29219 15.1528 8.75485 13.8086 8.75485C12.4637 8.75485 11.1743 9.29221 10.2232 10.2492C9.27288 11.2053 8.73806 12.5027 8.73806 13.8559C8.73806 15.2091 9.27288 16.5065 10.2232 17.4627C11.1743 18.4196 12.4637 18.957 13.8086 18.957C15.1528 18.957 16.4422 18.4196 17.3933 17.4627C18.3437 16.5065 18.8777 15.2091 18.8777 13.8559C18.8777 12.5027 18.3436 11.2054 17.3933 10.2492ZM7.94144 9.30413C9.34415 7.47402 11.5111 6.40083 13.8086 6.40007L13.8087 6.40001C14.7995 6.39775 15.7806 6.59776 16.6934 6.98643C19.1208 8.03167 20.8114 10.2964 21.1332 12.9327C21.3605 14.7958 20.8802 16.6449 19.837 18.1359L25.5999 23.9344L23.9445 25.6L18.2034 19.8236C16.1062 21.395 13.3392 21.7392 10.923 20.725C8.8077 19.8239 7.22662 17.9869 6.64305 15.7516C6.05948 13.5162 6.53953 11.1351 7.94144 9.30413Z"
    />
  </svg>
);

const buttons = [
  {
    text: 'Item 1',
    action: () => {},
  },
  {
    text: 'Item 2',
    action: () => {},
  },
  {
    text: 'Item 3',
    action: () => {},
  },
];

const iconButtons = [
  {
    icon: SearchIcon,
    action: () => {},
  },
];

const meta: Meta = {
  title: 'TV/Navigation',
  component: Navigation,
  argTypes: {
    logo: {
      description: 'Logo object to construct the image logo',
      control: { type: 'object' },
      defaultValue: {
        src: 'https://www.accedo.tv/wp-content/uploads/2022/05/Accedo-One-Icon.png',
        alt: 'Accedo One',
      },
    },
    navigationItems: {
      description: 'Navigation items to be rendered on the navbar',
      control: { type: 'array' },
      defaultValue: buttons,
    },
    position: {
      description: 'Position to render the navigation items',
      optios: ['center', 'left'],
      control: { type: 'radio' },
      defaultValue: 'center',
    },
    iconButtons: {
      description: 'Icon Buttons to render on the right side of the header',
      control: { type: 'array' },
      defaultValue: iconButtons,
    },
    avatar: {
      description: 'Avatar object for the User Avatar',
      control: { type: 'object' },
      defaultValue: {
        image: '',
        variant: 'text',
        text: 'A',
      },
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

const Template = (args: NavigationProps) => (
  <ThemeProvider theme={theme}>
    <Navigation {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({});
