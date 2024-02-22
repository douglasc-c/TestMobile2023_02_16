#import "PlatformInfoModule.h"
#import <React/RCTLog.h>
#import <UIKit/UIKit.h>

@implementation PlatformInfoModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getSystemVersion:(RCTResponseSenderBlock)callback) {
  NSString *systemVersion = [[UIDevice currentDevice] systemVersion];
  RCTLogInfo(@"System Version: %@", systemVersion);
  callback(@[systemVersion]);
}

RCT_EXPORT_METHOD(getDeviceModel:(RCTResponseSenderBlock)callback) {
  NSString *deviceModel = [UIDevice currentDevice].model;
  RCTLogInfo(@"Device Model: %@", deviceModel);
  callback(@[deviceModel]);
}

@end
