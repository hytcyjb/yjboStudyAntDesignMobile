import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    Platform,
    Modal,
} from 'react-native';

import TimeUtil from "./../js/util/timeUtil";

// 获取屏幕宽度  
var Dimensions = require('Dimensions');
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;
const { width, height } = Dimensions.get("window");
// 一些常量设置  
var cols = 4;
var cellW = 73;
var cellH = 32;
var vMargin = (screenW - cellW * cols) / (cols + 1);
var hMargin = 16;
//model的高度
let modelHeight = 360 + 40;
//这里可以做平台判断,一般来讲,ios不需要减去23,原因是状态栏:ios和android机制不一样
let modalMarTop = 0;
/**
 * 月份网格选择
 * 2018年04月28日11:21:15
 * @author yjbo
 */
export default class Monthchoose extends Component {
    constructor(props) {
        super(props);
        var datas = [];
        datas = TimeUtil.currentMonthOfOneYear();
        const dataReceiverInit = new ListView.DataSource({
            rowHasChanged: (r1, r2) => (r1 !== r2)
        })
        this.state = {
            isShow: this.props.show,
            dataReceiverVal: dataReceiverInit.cloneWithRows(datas),//选择的发送人,网格显示的
        }
    }

    componentWillReceiveProps(nextProps) {//上个页面状态改变，此处可以进行状态监听并改变
        this.setState({ isShow: nextProps.show  });
    }

    render() {
        if (Platform.OS === 'android') {
            modalMarTop = height - modelHeight - 23;
        } else if (Platform.OS === 'ios') {
            modalMarTop = height - modelHeight - 23 + 23;
        }
        let receiverList = this.state.dataReceiverVal;
        return (
            <View style={[{
                flexDirection: "column",
            }]}>
                <TouchableOpacity activeOpacity={0.8} onPress={
                    () => {
                        this.setState({ isShow: true });
                    }
                } >
                    <Text style={[{ fontSize: 24 }, { color: "#333333" }]}>{"点击弹出月份弹框"}</Text>
                </TouchableOpacity>
                {this.state.isShow ? <Modal
                    visible={this.state.isShow}
                    //显示是的动画默认none //从下面向上滑动slide //慢慢显示fade
                    animationType={'fade'}
                    //是否透明默认是不透明 false
                    transparent={true}
                    // transparent={false}
                    //关闭时调用
                    onRequestClose={() => this.onRequestClose()}
                >
                    <TouchableOpacity onPress={this.onRequestClose} activeOpacity={1} style={{ flex: 1 }}>
                        <View style={[{
                            flexDirection: "column",
                            flex: 1,
                            paddingBottom: 16,
                            backgroundColor: 'rgba(0,0,0,0.2)',
                        }, styles.menuView]}>
                        <View style={{backgroundColor:"#ffffff",height:160}}>
                            <ListView
                                dataSource={receiverList}
                                renderRow={this.renderRow.bind(this)}
                                contentContainerStyle={styles.listViewStyle}
                                initialListSize={12}
                            />
                        </View>
                        </View>
                    </TouchableOpacity>
                </Modal> : null}
            </View>)
    }
    //弹出框
    onRequestClose = () => {
        this.setState({ isShow: false, });
        this.props.closeMenu ? this.props.closeMenu(false) : null;
    }
    // 返回cell  
    renderRow(rowData) {
        let selecteddata = this.props.selecteddata || undefined;
        //比对的是id，根据传入的id值进行判断是否选中；
        if (rowData && rowData.value && rowData.id) {//rowData.id  ：2018-04; rowData.value :本月
            let name = rowData.value;
            let id = rowData.id;
            let isClicked = false;
            if (selecteddata === id) {
                isClicked = true;
            }
            return (
                <View style={[styles.innerViewStyle, isClicked && { backgroundColor: "#ffffff", borderColor: "#E4615C", borderWidth: 0.5 }, !isClicked && { backgroundColor: "#f2f2f2" }]}>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => { this.selectedMontn(rowData) }} >
                        <Text style={[{ fontSize: 14 },
                        !isClicked && { color: "#333333" },
                        isClicked && { color: "#E4615C" }]}>{name}</Text>
                    </TouchableOpacity>
                </View>
            );
        } else {
            return <View style={{ height: 16, backgroundColor: "#f9f9f9" }} />;
        }
    }
    selectedMontn = (rowData) => {
        this.setState({ isShow: false, });
        this.props.closeMenu ? this.props.closeMenu(false, rowData) : null;
    }
}
const styles = StyleSheet.create({
    listViewStyle: {
        // // 主轴方向  
        flexDirection: 'row',
        // // 一行显示不下,换一行  
        flexWrap: 'wrap',
    }, innerViewStyle: {
        width: cellW,
        height: cellH,
        marginLeft: vMargin,
        marginTop: hMargin,
        justifyContent: "center",
        // 文字内容居中对齐  
        alignItems: 'center'
    }, menuView: {
        ...Platform.select({
            ios: {
                marginTop: height === 812 ? 128 : 104
            },
            android: {
                marginTop: 50
            }
        })
    },
});