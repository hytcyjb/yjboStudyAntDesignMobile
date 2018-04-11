import React, { Component } from 'react';
import { ImagePicker, WingBlank, SegmentedControl } from 'antd-mobile';
import {
  Platform,
  StyleSheet,
  View,Alert
} from 'react-native';

var ImagePicker2 = require('react-native-image-picker');

const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];
var options = {
  title: '选择照片',
  customButtons: [
      { name: 'fb', title: 'Choose Photo from Facebook' },
  ],
  storageOptions: {
      skipBackup: true,
      path: 'images'
  }
};
export default class imagepicker extends React.Component {
  state = {
    files: data,
  };

  onChange = (files, type, index) => {
    console.log("yjbo--输出所有改变的结果：" + files, type, index);
    this.setState({
      files,
      multiple: false,
    });
  };
  clickPhoto = () => {
    Alert.alert(
        '选择照片',
        null,
        // 'My Alert Msg',
        [
            { text: '取消', onPress: () => console.log('Ask me later pressed') },
            {
                text: '相机', onPress: () => {
                    // Launch Camera:
                    ImagePicker2.launchCamera(options, (response) => {
                        // Same code as in above section!
                        console.log('Response = ', response);
                         this.setState({
                              files: this.state.files.concat({
                                url: response.uri,
                                id: '3',
                              }),
                            });
                    });
                    // ImagePicker.openCamera({
                    //     width: 300,
                    //     height: 400,
                    //     cropping: true
                    //   }).then(image => {
                    //     console.log(image);
                    //   });
                }, style: 'cancel'
            },
            {
                text: '相册', onPress: () => {
                    // Open Image Library:
                    ImagePicker2.launchImageLibrary(options, (response) => {
                        // Same code as in above section!
                        console.log('Response = ', response);
                        this.setState({
                          files: this.state.files.concat({
                            url: "data:image/png;base64,"+response.data,
                            id: '3',
                          }),
                        });
                    });
                    // ImagePicker.openPicker({
                    //     multiple: true
                    //   }).then(images => {
                    //     console.log(images);
                    //   });
                },
            }
        ],
        { cancelable: false }
    )
}
  onAddImageClick = () => {
    this.clickPhoto;
    // e.preventDefault();
    // this.setState({
    //   files: this.state.files.concat({
    //     url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    //     id: '3',
    //   }),
    // });
  };
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }
  onTabChange = (key) => {
    console.log(key);
  };
  render() {
    console.log("您运行几次了啊===render（）=")
    const { files } = this.state;
    return (
      <WingBlank>
        <SegmentedControl
          values={['切换到单选', '切换到多选']}
          selectedIndex={this.state.multiple ? 1 : 0}
          onChange={this.onSegChange}
        />
        <ImagePicker
          files={files}
          onChange={this.onChange}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 9}
          onAddImageClick={this.clickPhoto}
          // accept="image/*"
          // accept="image/gif,image/jpeg,image/jpg,image/png"
          // multiple={this.state.multiple}
        />
      </WingBlank>
    );
  }
}