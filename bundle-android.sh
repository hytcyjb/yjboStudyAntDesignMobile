#!/bin/sh
react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res/
mv ./android/app/src/main/res/drawable-mdpi/node_modules_nativeecharts_src_components_echarts_tpl.html ./android/app/src/main/assets/
