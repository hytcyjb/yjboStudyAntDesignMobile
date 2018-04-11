package com.yjbostudyantdesignmobile;

import android.view.KeyEvent;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "yjboStudyAntDesignMobile";
    }

    @Override
    public boolean onKeyUp(int keyCode, KeyEvent event) {
//        if (!BuildConfig.DEBUG) {
            if ((keyCode == KeyEvent.KEYCODE_MENU || keyCode == KeyEvent.KEYCODE_VOLUME_DOWN)
                    && getReactInstanceManager() != null) {
                getReactInstanceManager().showDevOptionsDialog();
                return true;
            }
//        }
        return super.onKeyUp(keyCode, event);
    }
}
