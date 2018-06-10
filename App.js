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
  View,Alert,Image
} from 'react-native';
import {List, Button,Text,Popover,InputItem,Toast,Progress } from 'antd-mobile';
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
        percent:5,
    }
}
componentDidMount (){
  // codePush.sync();
//   AppState.addEventListener("change", (newState) => {
//     newState === "active" && codePush.sync();
// });
//Production │ Wfq8sN4eqBk6oatEAF9lIssTkF679a1e454f-553a-45d4-9690-12b0b6cce3ef
//Staging    │ qd8_6lumogjjuYcZKDM_ANLyCwCd9a1e454f-553a-45d4-9690-12b0b6cce3ef
// var CODE_PUSH_PRODUCTION_KEY = "Wfq8sN4eqBk6oatEAF9lIssTkF679a1e454f-553a-45d4-9690-12b0b6cce3ef";
// codePush.sync({
//   updateDialog: {
//     appendReleaseDescription: true,
//     descriptionPrefix:'\n\n更新内容：\n',
//     title:'更新',
//     mandatoryUpdateMessage:'',
//     mandatoryContinueButtonLabel:'更新',
//   },
//   mandatoryInstallMode:codePush.InstallMode.IMMEDIATE,
//   deploymentKey: CODE_PUSH_PRODUCTION_KEY,
// })

var deploymentKey = "Wfq8sN4eqBk6oatEAF9lIssTkF679a1e454f-553a-45d4-9690-12b0b6cce3ef";
codePush.checkForUpdate(deploymentKey).then((update) => {
  if (!update) {
      Alert.alert("提示", "已是最新版本--", [
          {
              text: "Ok", onPress: () => {
              console.log("yjbo-点了OK");
              Toast.info("点了OK");
          }
          }
      ]);
  } else {
      codePush.sync({
              deploymentKey: deploymentKey,
              updateDialog: {
                  optionalIgnoreButtonLabel: '稍后',
                  optionalInstallButtonLabel: '立即更新',
                  optionalUpdateMessage: '有新版本了，是否更新？',
                  title: '更新提示'
              },
              installMode: codePush.InstallMode.IMMEDIATE,

          },
          (status) => {
              switch (status) {
                  case codePush.SyncStatus.DOWNLOADING_PACKAGE:
                      console.log("yjbo-DOWNLOADING_PACKAGE");
                      Toast.info("DOWNLOADING_PACKAGE");
                      break;
                  case codePush.SyncStatus.INSTALLING_UPDATE:
                      console.log("yjbo-INSTALLING_UPDATE");
                      Toast.info("INSTALLING_UPDATE");
                      break;
              }
          },
          (progress) => {//275412
           var p = (progress.receivedBytes / progress.totalBytes ) * 100;
           console.log("yjbo-"+progress.receivedBytes + " of " + progress.totalBytes + " received.");
            this.setState({ percent: p });
          }
      );
  }
})
}
  render() {
    let center = this.state.center;
    return (
      <View style={styles.container}>
      <Button>你哈----2018年06月10日18:05:06 热更新</Button>
      <Image source={ require('./img/ic_launcher.png')}/>
      <View style={{ marginRight: 10, height: 4, flex: 1 }}>
            <Progress percent={this.state.percent} />
          </View>
      <InputItem style={styles.inputItemStyle}
        placeholder={"请输入"}
        textAlign="right"
        type="digit"
        size='small'>标题6668888*
          我又修改了哦
        </InputItem>
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
