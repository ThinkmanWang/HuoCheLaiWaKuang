package com.thinkman;

import android.util.Log;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class ThinkPlugin extends CordovaPlugin {
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext)
            throws JSONException {

        switch (action) {
            case "sayHello":
                Log.i("THINKMAN", "Hello World");
                callbackContext.success("Hello World");
                break;
            default:
                return false;
        }

        return true;
    }
}
