/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  // Text,
  View
} from 'react-native';
import {List, Button,Text,Popover,InputItem } from 'antd-mobile';
import Yjbopopover from './js/yjbopopover';
import Page1 from './js/page1';
// import AppCopy from './js/AppCopy';
// import Yjbopopover from './js/yjbopopover';
// import InputItemDemo from './js/inputitemDemo'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Button>你哈</Button>
      <InputItem style={styles.inputItemStyle}
        placeholder={"请输入"}
        size='small'>标题*</InputItem>
        {/* <Page1/> */}
        <Yjbopopover/>
        {/* <InputItemDemo/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  inputItemStyle: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    backgroundColor:"white",
    textAlign:"right",
  },
});
