
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 13 Dec 2022 13:41:30 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorOvGradientDefault,
ColorOvGradientHeroBanner,
ColorOvGradientPlayer,
ColorOvGradient23Featured,
ColorOvGradient23,
ColorOvGradient169Featured,
ColorOvGradient169,
ColorPrimaryDarkest,
ColorPrimaryDark,
ColorPrimaryMedium,
ColorPrimaryLight,
ColorPrimaryLightest,
ColorDuskyDark,
ColorDuskyMedium,
ColorDuskyDarkest,
ColorNeutralBlack,
ColorNeutralGrey10,
ColorNeutralGrey30,
ColorNeutralGrey60,
ColorNeutralGrey80,
ColorNeutralWhite,
ColorFbSuccessDarkest,
ColorFbSuccessDark,
ColorFbSuccessMedium,
ColorFbSuccessLight,
ColorFbSuccessLightest,
ColorFbWarningDarkest,
ColorFbWarningDark,
ColorFbWarningMedium,
ColorFbWarningLight,
ColorFbWarningLightest,
ColorFbErrorDarkest,
ColorFbErrorDark,
ColorFbErrorMedium,
ColorFbErrorLight,
ColorFbErrorLightest,
ColorBgDefault,
ColorBgAlt,
ColorBgEmphasis,
ColorBgInverse,
ColorBgTvButtonEnabled,
ColorBgTvButtonFocus,
ColorBgTvButtonDisabled,
ColorTextDefault,
ColorTextSubtle,
ColorTextBrand,
ColorTextDisabled,
ColorTextOnAccent,
ColorTextOnDisabled,
ColorTextInputDefault,
ColorTextInputFilled,
ColorTextInputEmphasis,
ColorTextInputError,
ColorTextOnInverseDefault,
ColorTextOnInverseSubtle,
ColorTextOnInverseDisabled,
ColorBorderDefault,
ColorBorderAlt,
ColorBorderSubtle,
ColorBorderDisabled,
ColorBorderInputDefault,
ColorBorderInputEmphasis,
ColorBorderInputError,
ColorAccentDefault,
ColorAccentEmphasis,
ColorAccentSubtle,
ColorAccentDisabled
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
