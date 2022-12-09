import 'styled-components';

interface IPalette {
  main: string;
  contrastText: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: {
        brand: string;
        android: string;
        ios: string;
      };
      'line-height': {
        tight: string;
        regular: string;
        distant: string;
      };
      size: {
        '0': string;
        '1': string;
        '2': string;
        '3': string;
        '4': string;
        '5': string;
        '6': string;
        '7': string;
        '8': string;
        '9': string;
        '10': string;
        '11': string;
        '12': string;
        '13': string;
        '14': string;
        '15': string;
      };
    };
    spacing: {
      quarck: string;
      nano: string;
      '3xs': string;
      '2xs': string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
    };
    pallete: {
      neutral: {
        black: string;
        'grey-10': string;
        'grey-30': string;
        'grey-60': string;
        'grey-80': string;
        white: string;
      };
      primary: {
        darkest: string;
        dark: string;
        medium: string;
        light: string;
        lightest: string;
      };
    };
  }
}
