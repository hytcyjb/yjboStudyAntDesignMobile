//不同的时间选择器
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React from 'react';
import { View, StyleSheet, ScrollView,TouchableOpacity,Text,Modal } from 'react-native';
import moment from "moment";
import { DatePicker, List, PickerView, Picker, Button } from 'antd-mobile';
const now = new Date();
let markedDatesSelected = {};
let jijieValue = [
    {
        label: '一季度',
        value: '一季度',
    },
    {
        label: '二季度',
        value: '二季度',
    },
    {
        label: '三季度',
        value: '三季度',
    },
    {
        label: '四季度',
        value: '四季度',
    },
];
let years = [];
const seasons = [];
export default class diffDataCalendar extends React.Component {

    constructor(props) {
        super(props);
        this.dealWeekDays();
        this.initJidu();
        this.state = {
            markedDatesSelected: markedDatesSelected,
            valueMonth: undefined,
            valueJidu: "",
            startEndTime:[],//startEndTime:[2018-01-01,2018-04-08]格式
            showState:false,
        };
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
        this.setState({ markedDatesSelected: markedWeekDay,startEndTime:[[Monday],[nowSunday]] });
        // alert("==="+momentNow+"==="+agoSunday+"==="+Monday+"==="+Tuesday+"==="+Wednesday
        // +"==="+Thursday+"==="+Friday+"==="+Saturday+"==="+nowSunday);
    }
    initJidu = () => {//初始化季度数据
        // let nowYear = 1990;
        let nowYear = moment().format("YYYY");
        for (let i = -20; i < 50; i++) {
            years.push({ label: ([parseInt(nowYear) + i]), value: ([parseInt(nowYear) + i]) });
        }
        seasons.push(years, jijieValue)
    }
    dealCalendar = (day) => {
        console.log('selected day', day);
        this.dealWeekDays(day.dateString);
    }
    onChangeMonth = (value) => {//月份
        let valueString = moment(value).format("YYYY-MM-DD");//解析时这样处理,获取指定格式的日期，日
        let valueYearString = moment(value).format("YYYY");
        let valueMonthString = moment(value).format("MM");
        let months = moment(value).months();
        let month = moment(value).month();

        //获取该月的第一天和最后一天,month([month])注意一定得是当前的月份-1；月
        let startTime = [valueYearString] + "-" + [valueMonthString] + "-01";
        let lastDayOfMonth = moment([[valueYearString], [month], 31]).month([month]).format("YYYY-MM-DD");
        this.setState({ valueMonth: value,startEndTime:[[startTime],[lastDayOfMonth]], });
    }
    onChangeJidu = (value) => {//季度显示的日期
        let startTime = "";
        let endTime = "";
        let year =  value[0];
        if(value[1] == "一季度"){
            startTime = year +"-01-01";
            endTime = year +"-03-31";
        } else if(value[1] == "二季度"){
            startTime = year +"-04-01";
            endTime = year +"-06-30";
        } else if(value[1] == "三季度"){
            startTime = year +"-07-01";
            endTime = year +"-09-30";
        } else if(value[1] == "四季度"){
            startTime = year +"-10-01";
            endTime = year +"-12-31";
        }
         
        this.setState({
            startEndTime:[[startTime],[endTime]],
        });
    }
    setModalVisible =()=>{
        // alert("你好");
        let isShowState = !this.state.showState;
        this.setState({
            showState : isShowState,
        });
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <Calendar
                    onDayPress={(day) => { this.dealCalendar(day) }}
                    style={styles.calendar}
                    firstDay={1}//1显示周一作为第一天，7，显示周日作为第一天
                    markingType={'period'}
                    markedDates={
                        this.state.markedDatesSelected
                    }
                    hideArrows={false}
                />
                {/* 日期选择的类型, 可以是日期date,时间time,日期+时间datetime,年year,月month
                    format="YYYY-MM-DD" 也得相应的改变 */}
                <DatePicker
                    defaultDate={now}
                    // value={this.state.value}
                    mode="month"
                    onChange={this.onChangeMonth}
                    format="YYYY-MM-DD"
                    extra={this.state.startEndTime[0]+"-"+this.state.startEndTime[1]}
                >
                    <List.Item arrow="horizontal">Select Date</List.Item>
                </DatePicker>
                <List>
                    <Picker
                        data={seasons}
                        title="选择季节"
                        cascade={false}
                        extra={this.state.startEndTime[0]+"-"+this.state.startEndTime[1]}
                        // value={this.state.sValue}
                        // onChange={v => this.setState({ sValue: v })}
                        onOk={v => this.onChangeJidu(v)}
                    >
                        <List.Item arrow="horizontal">Multiple</List.Item>
                    </Picker>
                </List>
                <TouchableOpacity 
                    style={{width:300,height:30}}
                    onPress={()=>{this.setState({isShowState:true,})}}>
                    <Text>点我 点我 </Text>
                </TouchableOpacity>
                {this.state.isShowState ? <Modal
                    // animationType='slide'
                    transparent={true}
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
                                <TouchableOpacity underlayColor='transparent'
                                    style={styles.buttonStyle}
                                    onPress={this.setModalVisible()}
                                    >
                                    <Text style={styles.buttonText}>
                                        取消
                                    </Text>
                                </TouchableOpacity>
                                <View style={styles.verticalLine} />
                                <TouchableOpacity underlayColor='transparent'
                                    style={styles.buttonStyle}
                                    onPress={this.setModalVisible()}
                                    >
                                    <Text style={styles.buttonText}>
                                        确定
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal> : null}
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'gray'
    }, container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginBottom: 20
    }, calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
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