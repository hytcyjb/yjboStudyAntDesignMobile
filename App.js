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
  View,Alert
} from 'react-native';
import {List, Button,Text,Popover,InputItem, } from 'antd-mobile';
// import Yjbopopover from './js/yjbopopover';
// import Page1 from './js/page1';
// import Util from './js/Alter.js';
import Imagepicker from './js/imagepicker';
// import Datepicker from './js/datepicker';
// import Photopage from './js/photopage';
// import AppCopy from './js/AppCopy';
// import Yjbopopover from './js/yjbopopover';
// import InputItemDemo from './js/inputitemDemo'
// import Calentar from "./js/calendardemo/calendars"
// import PhotoUtil from './js/imagepickerutil';
import Calend from './js/diffDataCalendar'
// import Dialog from './js/dialogDemo';
// import Calend from './js/calendardemo/calendars_yjbo'
// import Modeldialog from './js/modeldialog';
import Model from './js/modelceshi'
import Monthchoose from "./js/monthchoose";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import codePush from 'react-native-code-push' 

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        center: { id: "2018-04", value: "本月" },
        isShowReceiveRedEnvelope: false,
    }
}
componentDidMount (){
  codePush.sync();
//   AppState.addEventListener("change", (newState) => {
//     newState === "active" && codePush.sync();
// });
}
  render() {
    let center = this.state.center;
    return (
      <View style={styles.container}>
      <Button>你哈----2018年05月02日22:54:12 热更新</Button>
      <InputItem style={styles.inputItemStyle}
        placeholder={"请输入"}
        textAlign="right"
        type="digit"
        size='small'>标题6668888*</InputItem>
        {/* <Page1/> */}
      
        <Imagepicker/>
        {/* <PhotoUtil/> */}
        {/* <Modeldialog/> */}
        {/* <Dialog/> */}
        <Calend/>
        <Model/>
        {/* <InputItemDemo/> */}
        {/* {alterFF()} */}
        <Monthchoose
          show={this.state.isShowReceiveRedEnvelope}
          selecteddata = {center.id}
          closeMenu={ (isShow,rowData) => {
              let selectedMonth = center;
              if(rowData && rowData.id && rowData.value){
                  selectedMonth={ id : rowData.id+"", value : rowData.value+"" };
              }
              this.setState({
                  isShowReceiveRedEnvelope: isShow,
                  center:selectedMonth,
              });
              }}
      />
      
      </View>
    );
  }
}

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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
  },
  inputItemStyle: {
    color: '#333333',
    marginBottom: 5,
    backgroundColor:"white",
    textAlign:"center",
    justifyContent:"space-between"
  },
});
