import { DefaultTheme } from 'styled-components';
import '@fontsource/metropolis';
// @ts-ignore
import * as Token from './tokens.js';

const font = {
  family: {
    brand: Token.FontFamilyBrand,
    android: Token.FontFamilyAndroid,
    ios: Token.FontFamilyIos,
  },
  'line-height': {
    tight: Token.FontLineHeightTight,
    regular: Token.FontLineHeightRegular,
    distant: Token.FontLineHeightDistant,
  },
  size: {
    '0': Token.FontSize0,
    '1': Token.FontSize1,
    '2': Token.FontSize2,
    '3': Token.FontSize3,
    '4': Token.FontSize4,
    '5': Token.FontSize5,
    '6': Token.FontSize6,
    '7': Token.FontSize7,
    '8': Token.FontSize8,
    '9': Token.FontSize9,
    '10': Token.FontSize10,
    '11': Token.FontSize11,
    '12': Token.FontSize12,
    '13': Token.FontSize13,
    '14': Token.FontSize14,
    '15': Token.FontSize15,
  },
  weight: {
    regular: Token.FontWeightRegular,
    medium: Token.FontWeightMedium,
    bold: Token.FontWeightBold,
  }
};

const pallete = {
  ovGradient: {
    Default: Token.ColorOvGradientDefault,
    HeroBanner: Token.ColorOvGradientHeroBanner,
    Player: Token.ColorOvGradientPlayer,
    '23Featured': Token.ColorOvGradient23Featured,
    '23': Token.ColorOvGradient23,
    '169Featured': Token.ColorOvGradient169Featured,
    '169': Token.ColorOvGradient169,
  },
  primary: {
    Darkest: Token.ColorPrimaryDarkest,
    Dark: Token.ColorPrimaryDark,
    Medium: Token.ColorPrimaryMedium,
    Light: Token.ColorPrimaryLight,
    Lightest: Token.ColorPrimaryLightest,
  },
  dusky: {
    Dark: Token.ColorDuskyDark,
    Medium: Token.ColorDuskyMedium,
    Darkest: Token.ColorDuskyDarkest,
  },
  fb: {
    SuccessDarkest: Token.ColorFbSuccessDarkest,
    SuccessDark: Token.ColorFbSuccessDark,
    SuccessMedium: Token.ColorFbSuccessMedium,
    SuccessLight: Token.ColorFbSuccessLight,
    SuccessLightest: Token.ColorFbSuccessLightest,
    WarningDarkest: Token.ColorFbWarningDarkest,
    WarningDark: Token.ColorFbWarningDark,
    WarningMedium: Token.ColorFbWarningMedium,
    WarningLight: Token.ColorFbWarningLight,
    WarningLightest: Token.ColorFbWarningLightest,
    ErrorDarkest: Token.ColorFbErrorDarkest,
    ErrorDark: Token.ColorFbErrorDark,
    ErrorMedium: Token.ColorFbErrorMedium,
    ErrorLight: Token.ColorFbErrorLight,
    ErrorLightest: Token.ColorFbErrorLightest,
  },
  bg: {
    Default: Token.ColorBgDefault,
    Alt: Token.ColorBgAlt,
    Emphasis: Token.ColorBgEmphasis,
    Inverse: Token.ColorBgInverse,
    TvButtonEnabled: Token.ColorBgTvButtonEnabled,
    TvButtonFocus: Token.ColorBgTvButtonFocus,
    TvButtonDisabled: Token.ColorBgTvButtonDisabled,
  },
  text: {
    Default: Token.ColorTextDefault,
    Subtle: Token.ColorTextSubtle,
    Brand: Token.ColorTextBrand,
    Disabled: Token.ColorTextDisabled,
    OnAccent: Token.ColorTextOnAccent,
    OnDisabled: Token.ColorTextOnDisabled,
    InputDefault: Token.ColorTextInputDefault,
    InputFilled: Token.ColorTextInputFilled,
    InputEmphasis: Token.ColorTextInputEmphasis,
    InputError: Token.ColorTextInputError,
    OnInverseDefault: Token.ColorTextOnInverseDefault,
    OnInverseSubtle: Token.ColorTextOnInverseSubtle,
    OnInverseDisabled: Token.ColorTextOnInverseDisabled,
  },
  border: {
    Default: Token.ColorBorderDefault,
    Alt: Token.ColorBorderAlt,
    Subtle: Token.ColorBorderSubtle,
    Disabled: Token.ColorBorderDisabled,
    InputDefault: Token.ColorBorderInputDefault,
    InputEmphasis: Token.ColorBorderInputEmphasis,
    InputError: Token.ColorBorderInputError,
  },
  accent: {
    Default: Token.ColorAccentDefault,
    Emphasis: Token.ColorAccentEmphasis,
    Subtle: Token.ColorAccentSubtle,
    Disabled: Token.ColorAccentDisabled,
  },
  neutral: {
    Black: Token.ColorNeutralBlack,
    Grey10: Token.ColorNeutralGrey10,
    Grey30: Token.ColorNeutralGrey30,
    Grey60: Token.ColorNeutralGrey60,
    Grey80: Token.ColorNeutralGrey80,
    White: Token.ColorNeutralWhite,
  }
};

const shadow = {
  none: Token.ShadowNone,
  high: `${Token.ShadowHigh.x}px ${Token.ShadowHigh.y}px ${Token.ShadowHigh.blur}px ${Token.ShadowHigh.spread}px ${Token.ShadowHigh.color}`,
  medium: `${Token.ShadowMedium.x}px ${Token.ShadowMedium.y}px ${Token.ShadowMedium.blur}px ${Token.ShadowMedium.spread}px ${Token.ShadowMedium.color}`,
  low: `${Token.ShadowLow.x}px ${Token.ShadowLow.y}px ${Token.ShadowLow.blur}px ${Token.ShadowLow.spread}px ${Token.ShadowLow.color}`,
};

const spacing = {
  quarck: Token.SpacingQuarck,
  nano: Token.SpacingNano,
  '3xs': Token.Spacing3xs,
  '2xs': Token.Spacing2xs,
  xs: Token.SpacingXs,
  sm: Token.SpacingSm,
  md: Token.SpacingMd,
  lg: Token.SpacingLg,
  xl: Token.SpacingXl,
  '2xl': Token.Spacing2xl,
  '3xl': Token.Spacing3xl,
  '4xl': Token.Spacing4xl,
  '5xl': Token.Spacing5xl,
};

const borderRadius = {
  none: Token.BorderRadiusNone,
  small: Token.BorderRadiusSmall,
  medium: Token.BorderRadiusMedium,
  large: Token.BorderRadiusLarge,
  circle: Token.BorderRadiusCircle,
  pill: Token.BorderRadiusPill,
  button: Token.BorderRadiusButton,
  card: Token.BorderRadiusCard,
  input: Token.BorderRadiusInput,
  avatar: Token.BorderRadiusAvatar,
}

const borderWidth = {
  none: Token.BorderWidthNone,
  thin: Token.BorderWidthThin,
  thick: Token.BorderWidthThick,
  heavy: Token.BorderWidthHeavy,
  outlinedButton: Token.BorderWidthButtonOutlinedDefault,
  tvCard: Token.BorderWidthTvCard,
  tvAvatar: Token.BorderWidthTvAvatar,
}

const opacity = {
  full: Token.OpacityFull,
  intense: Token.OpacityIntense,
  medium: Token.OpacityMedium,
  light: Token.OpacityLight,
  transparent: Token.OpacityTransparent,
}

const iconSize = {
  default: Token.SizeDefault,
  small: Token.SizeIconSmall,
  medium: Token.SizeIconMedium,
  large: Token.SizeIconLarge,
  xl: Token.SizeIconXl,
  '2xl': Token.SizeIcon2xl,
}

export const theme: DefaultTheme = {
  font,
  spacing,
  pallete,
  borderRadius,
  borderWidth,
  opacity,
  iconSize,
  shadow
};
