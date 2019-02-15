
package com.chenzhe.inputtext;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class RNCzInputtextModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public RNCzInputtextModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "RNCzInputtext";
  }
}