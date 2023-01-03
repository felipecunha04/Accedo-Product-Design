
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Tue, 03 Jan 2023 13:35:52 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorOvGradientDefault,
ColorOvGradientHeroBanner,
ColorOvGradientPlayer,
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
