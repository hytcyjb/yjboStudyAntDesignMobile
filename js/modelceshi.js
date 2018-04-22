import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Modal,
    FlatList,
    Dimensions,
    Alert,
    View, Platform
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import moment from "moment";

const { width, height } = Dimensions.get("window");

// //单个item的高度
// let itemHeight = 32;
// //你想在model中显示几个item
// let n = 3;

//model的高度
// let modelHeight = itemHeight * n;
let modelHeight = 360 + 40;
//这里可以做平台判断,一般来讲,ios不需要减去23,原因是状态栏:ios和android机制不一样
let modalMarTop = 0;
let markedDatesSelected = {};
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowReceiveRedEnvelope: false,
            markedDatesSelected: markedDatesSelected,
            startEndTime: [],
        };
        // this.showRedEnvelopeArray = [{ key: 0, value: '中国银行' }, { key: 1, value: '农业银行' },
        // { key: 2, value: '工商银行' }, { key: 3, value: '建设银行' }]
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={() => { this.setState({ isShowReceiveRedEnvelope: true, }) }}>
                    弹出Model
        </Text>
                {this.state.isShowReceiveRedEnvelope ? <Modal
                    visible={this.state.isShowReceiveRedEnvelope}
                    //显示是的动画默认none
                    //从下面向上滑动slide
                    //慢慢显示fade
                    animationType={'none'}
                    //是否透明默认是不透明 false
                    transparent={true}
                    //关闭时调用
                    onRequestClose={() => this.onRequestClose()}
                >{this._isShowReceiveRedEnvel()}</Modal> : null}
            </View>
        );
    }
    //弹出框
    onRequestClose() {
        this.setState({
            isShowReceiveRedEnvelope: false,
        })
    }
    queryWeeksDate() {
        alert("时间已经确认");
        // this.setState({
        //     isShowReceiveRedEnvelope: false,
        // })
    }
    _isShowReceiveRedEnvel() {
        if (Platform.OS === 'android') {
            modalMarTop = height - modelHeight - 23;
        } else if (Platform.OS === 'ios') {
            modalMarTop = height - modelHeight - 23 + 23;
        }
        console.log("ztf   modalMarTop: " + modalMarTop);

        return (
            // onPress={() => this.onRequestClose()}
            <TouchableOpacity activeOpacity={1} style={{ flex: 1 }} >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.2)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: width, height: (modelHeight > height) ? height : modelHeight, marginTop: modalMarTop < 0 ? 0 : modalMarTop, backgroundColor: '#f3f3f3' }}>
                        {/* <FlatList
                            automaticallyAdjustContentInsets={false}
                            alwaysBounceHorizontal={false}
                            data={this.showRedEnvelopeArray}
                            renderItem={item => this._renderXuanDataItemView(item)}
                        /> */}
                        <View style={{
                            height: 40, backgroundColor: "#ffffff", flex: 1,
                            flexDirection: "row", justifyContent: "space-between",
                            alignItems: 'center',
                        }}>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.onRequestClose()} >
                                <Text style={{ color: "#11B2F5", fontSize: 20, marginLeft: 16 }}>取消</Text>
                            </TouchableOpacity>
                            <Text style={{ color: "#999999", fontSize: 14, marginLeft: 16 }}>
                                {(this.state.startEndTime && this.state.startEndTime.length > 0) ?
                                     (this.state.startEndTime[0] +" 至 "+this.state.startEndTime[1]) : "选择周范围"}
                            </Text>
                            <TouchableOpacity activeOpacity={1} onPress={() => this.queryWeeksDate()} >
                                <Text style={{ color: "#11B2F5", fontSize: 20, marginRight: 16 }}>确定</Text>
                            </TouchableOpacity>
                        </View>
                        <Calendar
                            onDayPress={(day) => { this.dealCalendar(day) }}
                            // current={'2012-05-16'}
                            maxDate={'2018-04-18'}
                            style={styles.calendar}
                            firstDay={1}//1显示周一作为第一天，7，显示周日作为第一天
                            markingType={'period'}
                            markedDates={
                                this.state.markedDatesSelected
                            }
                            monthFormat={'yyyy - MM'}//设置头部日期显示样式
                            hideArrows={false}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    // _renderXuanDataItemView(item) {
    //     return (
    //         <TouchableOpacity activeOpacity={1} style={{
    //             width: width, height: itemHeight > height ? height : itemHeight,
    //             marginVertical: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'
    //         }}
    //             onPress={() => this._onAcitveClickData(item)} >
    //             <Text style={{ fontSize: 15, fontWeight: "400", textAlign: 'center' }}>
    //                 {item.item.value}
    //             </Text>
    //         </TouchableOpacity>
    //     );
    // }
    dealCalendar = (day) => {
        console.log('selected day', day);
        this.dealWeekDays(day.dateString);
    }
    dealWeekDays = (day) => {//周
        // let day = "2018-05-06";
        // let momentNow = moment().format("YYYY-MM-DD");//当前时间
        let agoSunday = moment(day).day("Sunday").format("YYYY-MM-DD");//上周日
        let Monday = moment(day).day("Monday").format("YYYY-MM-DD");
        let Tuesday = moment(day).day("Tuesday").format("YYYY-MM-DD");
        let Wednesday = moment(day).day("Wednesday").format("YYYY-MM-DD");
        let Thursday = moment(day).day("Thursday").format("YYYY-MM-DD");
        let Friday = moment(day).day("Friday").format("YYYY-MM-DD");
        let Saturday = moment(day).day("Saturday").format("YYYY-MM-DD");
        let nowSunday = moment(day).day("Sunday").day(7).format("YYYY-MM-DD");//本周日
        let markedWeekDay = {
            [Monday]: { startingDay: true, color: '#1E90FF' },
            [Tuesday]: { color: '#1E90FF' },
            [Wednesday]: { color: '#1E90FF' },
            [Thursday]: { color: '#1E90FF' },
            [Friday]: { color: '#1E90FF' },
            [Saturday]: { color: '#1E90FF' },
            [nowSunday]: { endingDay: true, color: '#1E90FF' },
        };
        markedDatesSelected = markedWeekDay;
        this.setState({ markedDatesSelected: markedWeekDay, startEndTime: [[Monday], [nowSunday]] });
        // alert("==="+momentNow+"==="+agoSunday+"==="+Monday+"==="+Tuesday+"==="+Wednesday
        // +"==="+Thursday+"==="+Friday+"==="+Saturday+"==="+nowSunday);
    }
    // _onAcitveClickData(item) {
    //     if (item.index == 0) {

    //     } else if (item.index == 1) {

    //     } else if (item.index == 2) {

    //     } else if (item.index == 3) {


    //     }
    //     Alert.alert(item.item.value)
    //     this.setState({
    //         isShowReceiveRedEnvelope: false,
    //     })
    // }

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
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
    }, 
    calendar: {
        borderTopWidth: 1,
        // paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
    },
});