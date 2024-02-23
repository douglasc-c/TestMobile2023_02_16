package com.testmobile2023_02_16

import android.os.Build
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class PlatformInfoModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "PlatformInfo"
    }

    @ReactMethod
    fun getSystemVersion(): String {
        return Build.VERSION.RELEASE
    }

    @ReactMethod
    fun getDeviceModel(): String {
        return Build.MODEL
    }
}
