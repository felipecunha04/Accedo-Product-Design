import { DefaultTheme } from 'styled-components';
import '@fontsource/metropolis';
// @ts-ignore
import * as Token from './tokens.js';

const font = {
  family: {
    brand: Token.FontFamilyBrand,
    android: 'Roboto',
    ios: 'SF Pro',
  },
  'line-height': {
    tight: '100%',
    regular: '150%',
    distant: '180%',
  },
  size: {
    '0': '12px',
    '1': '14px',
    '2': '16px',
    '3': '18px',
    '4': '20px',
    '5': '25px',
    '6': '28px',
    '7': '32px',
    '8': '36px',
    '9': '40px',
    '10': '45px',
    '11': '51px',
    '12': '58px',
    '13': '65px',
    '14': '73px',
    '15': '82px',
  },
};

const pallete = {
  neutral: {
    black: '#000000',
    'grey-10': '#171a1c',
    'grey-30': '#454d54',
    'grey-60': '#9299a0',
    'grey-80': '#c7cdd1',
    white: '#ffffff',
  },
  primary: {
    darkest: '#051b2e',
    dark: '#0a6cc2',
    medium: '#3c92dd',
    light: '#75b7f0',
    lightest: '#d1e7fa',
  },
};

const spacing = {
  quarck: '4px',
  nano: '8px',
  '3xs': '12px',
  '2xs': Token.Spacing2xs,
  xs: '24px',
  sm: '40px',
  md: '56px',
  lg: '80px',
  xl: '104px',
  '2xl': '128px',
  '3xl': '160px',
  '4xl': '192px',
  '5xl': '256px',
};

export const theme: DefaultTheme = {
  font,
  spacing,
  pallete,
};
