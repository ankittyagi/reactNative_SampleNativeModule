#import "HelloWorld.h"
#import <React/RCTLog.h>
@implementation HelloWorld RCT_EXPORT_MODULE();
RCT_EXPORT_METHOD(greeting:(NSString *)name
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject
                  )
{
  if(name){
    name = [NSString stringWithFormat:@"Hello - %@", name];
    resolve(name);
//    RCTLogInfo(@"Saluton, %@", name);
  }else{
    NSError *error;
    reject(@"no_events", @"There were no events", error);
  }
  
}
@end
