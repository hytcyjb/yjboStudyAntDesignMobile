package com.yjbostudyantdesignmobile;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.microsoft.codepush.react.CodePush;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected String getJSBundleFile() {
            return CodePush.getJSBundleFile();
        }

        @Override
        protected List<ReactPackage> getPackages() {
//            String key = getResources().getString(R.string.reactNativeCodePush_androidStagingKey);
//            return Arrays.<ReactPackage>asList(
//                    new MainReactPackage(), new CodePush(key,MainApplication.this,BuildConfig.DEBUG)
//            );
            String key = getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey);
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(), new CodePush(key,MainApplication.this,BuildConfig.DEBUG)
            );
//      return Arrays.<ReactPackage>asList(
//      new MainReactPackage()
//      );
//      return Arrays.<ReactPackage>asList(
//              new MainReactPackage()
//      ,new CodePush(BuildConfig.CODEPUSH_KEY,//"Wfq8sN4eqBk6oatEAF9lIssTkF679a1e454f-553a-45d4-9690-12b0b6cce3ef",//BuildConfig.CODEPUSH_KEY,
//                      MainApplication.this,
//                      BuildConfig.DEBUG)// Add/change this line.,
//        );
        }


        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
