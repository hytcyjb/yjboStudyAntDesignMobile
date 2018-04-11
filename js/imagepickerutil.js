import React from 'react';
import { View, StyleSheet,Alert,NativeModules } from 'react-native';
import { Button } from 'antd-mobile';

var ImagePicker = require('react-native-image-picker');
// import ImagePicker from 'react-native-image-crop-picker';
// var ImagePicker = NativeModules.ImageCropPicker;
// More info on all the options is below in the README...just some common use cases shown here
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
export default class imagepickerutil extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avatarSource: undefined,
        };
    }

    render() {
        return (
            <Button onClick={this.clickPhoto}> {"点我"}</Button>
        );
    }

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
                        ImagePicker.launchCamera(options, (response) => {
                            // Same code as in above section!
                            console.log('Response = ', response);
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
                        ImagePicker.launchImageLibrary(options, (response) => {
                            // Same code as in above section!
                            console.log('Response = ', response);
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
    // photo = () => {
    //     /**
    //      * The first arg is the options object for customization (it can also be null or omitted for default options),
    //      * The second arg is the callback which sends object: response (more info below in README)
    //      */
    //     ImagePicker.showImagePicker(options, (response) => {
    //         console.log('Response = ', response);

    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         }
    //         else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         }
    //         else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         }
    //         else {
    //             let source = { uri: response.uri };

    //             // You can also display the image using data:
    //             // let source = { uri: 'data:image/jpeg;base64,' + response.data };

    //             this.setState({
    //                 avatarSource: source
    //             });
    //         }
    //     });
    // }
}

