package com.nativemodule_helloworld;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext; import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule; import com.facebook.react.bridge.ReactMethod;
import android.util.Log;

public class HelloWorld extends ReactContextBaseJavaModule {

  public HelloWorld(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "HelloWorld";
  }

  @ReactMethod
  public void greeting(String name, Promise promise) {
    Log.i("HelloWorld", "Hello, " + name);
      try {
        String s = "HelloWorld , hello, " + name;
        promise.resolve(s);
      } catch (Exception e) {
        promise.reject(e.getMessage());
      }
  }
}
