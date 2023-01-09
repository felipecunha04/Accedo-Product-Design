
//
// StyleDictionaryColor.m
//

// Do not edit directly
// Generated on Mon, 09 Jan 2023 16:54:32 GMT


#import "StyleDictionaryColor.h"

@implementation StyleDictionaryColor

+ (UIColor *)color:(StyleDictionaryColorName)colorEnum{
  return [[self values] objectAtIndex:colorEnum];
}

+ (NSArray *)values {
  static NSArray* colorArray;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    colorArray = @[
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.020f green:0.106f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:0.039f green:0.424f blue:0.761f alpha:1.000f],
[UIColor colorWithRed:0.235f green:0.573f blue:0.867f alpha:1.000f],
[UIColor colorWithRed:0.459f green:0.718f blue:0.941f alpha:1.000f],
[UIColor colorWithRed:0.820f green:0.906f blue:0.980f alpha:1.000f],
[UIColor colorWithRed:0.071f green:0.106f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.106f green:0.157f blue:0.196f alpha:1.000f],
[UIColor colorWithRed:0.035f green:0.051f blue:0.067f alpha:1.000f],
[UIColor colorWithRed:0.000f green:0.000f blue:0.000f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.102f blue:0.110f alpha:1.000f],
[UIColor colorWithRed:0.271f green:0.302f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:0.573f green:0.600f blue:0.627f alpha:1.000f],
[UIColor colorWithRed:0.780f green:0.804f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.075f green:0.224f blue:0.149f alpha:1.000f],
[UIColor colorWithRed:0.149f green:0.451f blue:0.298f alpha:1.000f],
[UIColor colorWithRed:0.251f green:0.749f blue:0.498f alpha:1.000f],
[UIColor colorWithRed:0.549f green:0.851f blue:0.698f alpha:1.000f],
[UIColor colorWithRed:0.847f green:0.949f blue:0.898f alpha:1.000f],
[UIColor colorWithRed:0.286f green:0.204f blue:0.016f alpha:1.000f],
[UIColor colorWithRed:0.569f green:0.408f blue:0.031f alpha:1.000f],
[UIColor colorWithRed:0.949f green:0.678f blue:0.051f alpha:1.000f],
[UIColor colorWithRed:0.969f green:0.808f blue:0.431f alpha:1.000f],
[UIColor colorWithRed:0.988f green:0.937f blue:0.812f alpha:1.000f],
[UIColor colorWithRed:0.239f green:0.082f blue:0.059f alpha:1.000f],
[UIColor colorWithRed:0.478f green:0.169f blue:0.122f alpha:1.000f],
[UIColor colorWithRed:0.902f green:0.380f blue:0.298f alpha:1.000f],
[UIColor colorWithRed:0.878f green:0.569f blue:0.522f alpha:1.000f],
[UIColor colorWithRed:0.961f green:0.855f blue:0.839f alpha:1.000f],
[UIColor colorWithRed:0.035f green:0.051f blue:0.067f alpha:1.000f],
[UIColor colorWithRed:0.071f green:0.106f blue:0.129f alpha:1.000f],
[UIColor colorWithRed:0.106f green:0.157f blue:0.196f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:0.145f],
[UIColor colorWithRed:0.235f green:0.573f blue:0.867f alpha:1.000f],
[UIColor colorWithRed:0.271f green:0.302f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.780f green:0.804f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:0.235f green:0.573f blue:0.867f alpha:1.000f],
[UIColor colorWithRed:0.271f green:0.302f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.573f green:0.600f blue:0.627f alpha:1.000f],
[UIColor colorWithRed:0.573f green:0.600f blue:0.627f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.459f green:0.718f blue:0.941f alpha:1.000f],
[UIColor colorWithRed:0.878f green:0.569f blue:0.522f alpha:1.000f],
[UIColor colorWithRed:0.251f green:0.749f blue:0.498f alpha:1.000f],
[UIColor colorWithRed:0.090f green:0.102f blue:0.110f alpha:1.000f],
[UIColor colorWithRed:0.271f green:0.302f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:0.780f green:0.804f blue:0.820f alpha:1.000f],
[UIColor colorWithRed:0.235f green:0.573f blue:0.867f alpha:1.000f],
[UIColor colorWithRed:1.000f green:1.000f blue:1.000f alpha:1.000f],
[UIColor colorWithRed:0.020f green:0.106f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:0.271f green:0.302f blue:0.329f alpha:1.000f],
[UIColor colorWithRed:0.573f green:0.600f blue:0.627f alpha:1.000f],
[UIColor colorWithRed:0.459f green:0.718f blue:0.941f alpha:1.000f],
[UIColor colorWithRed:0.878f green:0.569f blue:0.522f alpha:1.000f],
[UIColor colorWithRed:0.251f green:0.749f blue:0.498f alpha:1.000f],
[UIColor colorWithRed:0.235f green:0.573f blue:0.867f alpha:1.000f],
[UIColor colorWithRed:0.039f green:0.424f blue:0.761f alpha:1.000f],
[UIColor colorWithRed:0.020f green:0.106f blue:0.180f alpha:1.000f],
[UIColor colorWithRed:0.271f green:0.302f blue:0.329f alpha:1.000f]
    ];
  });

  return colorArray;
}

@end
