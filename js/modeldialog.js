import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    Modal,
    TextInput,
    StyleSheet,
    Dimensions,
    TouchableHighlight,
    Button
} from 'react-native';
const { width, height, scale } = Dimensions.get('window');
// 类  
const show = true;
export default class modeldialog extends React.Component {
    // 构造函数  
    constructor(props) {
        super(props);
        this.state = {
            // show: false,
            showState: false
        };
    }

    // rightButtonClick() {
    //     //  
    //     console.log('右侧按钮点击了');
    //     this.setModalVisible();
    // }

    // 显示/隐藏 modal  
    setModalVisible() {
        // let isShow = this.state.show;
        // this.setState({
        //     show: !isShow,
        // });
        let isShowState = true;
        this.setState({
            showState: isShowState
        });
    }

    // 绘制View  
    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.setModalVisible}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
                {/* <Button onPress={this._rightButtonClick()} title={"你好啊"}></Button> */}
                <Modal
                    // animationType='slide'
                    // transparent={true}
                    visible={this.state.showState}
                    // onShow={() => { }}
                    // onRequestClose={() => { }}
                     >
                    <View style={styles.modalStyle}>
                        <View style={styles.subView}>
                            <Text style={styles.titleText}>
                                提示
                            </Text>
                            <Text style={styles.contentText}>
                                Modal显示的View 多行了超出一行了会怎么显示，就像这样显示了很多内容该怎么显示，看看效果
                            </Text>
                            <View style={styles.horizontalLine} />


                            <View style={styles.buttonView}>
                                <TouchableHighlight underlayColor='transparent'
                                    style={styles.buttonStyle}
                                    // onPress={this.setModalVisible()}
                                    >
                                    <Text style={styles.buttonText}>
                                        取消
                                    </Text>
                                </TouchableHighlight>
                                <View style={styles.verticalLine} />
                                <TouchableHighlight underlayColor='transparent'
                                    style={styles.buttonStyle}
                                    // onPress={this.setModalVisible()}
                                    >
                                    <Text style={styles.buttonText}>
                                        确定
                                    </Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

}
// Modal属性  
// 1.animationType bool  控制是否带有动画效果  
// 2.onRequestClose  Platform.OS==='android'? PropTypes.func.isRequired : PropTypes.func  
// 3.onShow function方法  
// 4.transparent bool  控制是否带有透明效果  
// 5.visible  bool 控制是否显示  

// css样式  
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ECECF0',
    },
    // modal的样式  
    modalStyle: {
        // backgroundColor:'#ccc',  
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    // modal上子View的样式  
    subView: {
        marginLeft: 60,
        marginRight: 60,
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: '#ccc',
    },
    // 标题  
    titleText: {
        marginTop: 10,
        marginBottom: 5,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    // 内容  
    contentText: {
        margin: 8,
        fontSize: 14,
        textAlign: 'center',
    },
    // 水平的分割线  
    horizontalLine: {
        marginTop: 5,
        height: 0.5,
        backgroundColor: '#ccc',
    },
    // 按钮  
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonStyle: {
        flex: 1,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // 竖直的分割线  
    verticalLine: {
        width: 0.5,
        height: 44,
        backgroundColor: '#ccc',
    },
    buttonText: {
        fontSize: 16,
        color: '#3393F2',
        textAlign: 'center',
    },
});  