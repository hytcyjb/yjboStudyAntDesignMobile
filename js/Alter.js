'use strict';

var React = require('react');
var ReactNative = require('react-native');
var {
    Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = ReactNative;


function alterFF (){
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      // { cancelable=false }
    )
  };
