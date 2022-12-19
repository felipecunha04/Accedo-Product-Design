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
      lineHeight: {
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
    pallete: {
      neutral: {
        [otherOptions: string]: unknown
      };
      primary: {
        [otherOptions: string]: unknown
      };
      ovGradient: {
        [otherOptions: string]: unknown
      };
      fb: {
        [otherOptions: string]: unknown
      };
      dusky: {
        [otherOptions: string]: unknown
      };
      bg: {
        [otherOptions: string]: unknown
      };
      text: {
        [otherOptions: string]: unknown
      };
      border: {
        [otherOptions: string]: unknown
      };
      accent: {
        [otherOptions: string]: unknown
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
    shadow: {
      none: string;
      high: string;
      medium: string;
      low: string;
    };
    borderRadius: {
      none: string;
      small: string;
      medium: string;
      large: string;
      circle: string;
      pill: string;
      button: string;
      card: string;
      input: string;
      avatar: string;
    };
    borderWidth: {
      none: string;
      thin: string;
      thick: string;
      heavy: string;
      outlinedButton: string;
      tvCard: string;
      tvAvatar: string;
    };
    opacity: {
      full: string;
      intense: string;
      medium: string;
      light: string;
      transparent: string;
    };
    iconSize: {
      default: string;
      small: string;
      medium: string;
      large: string;
      xl: string;
      '2xl': string;
    };
  }
}
