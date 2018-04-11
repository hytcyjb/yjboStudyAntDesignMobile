import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import moment from "moment";
const now = new Date();
let markedDatesSelected = {};
export default class Calend extends React.Component {

    constructor(props) {
        super(props);
        
        this.dealWeekDays();
        this.state = {
            markedDatesSelected:markedDatesSelected,
        };
    }
    dealWeekDays=(day)=>{
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
    //    let markedWeekDay =  Object.assign([], this.state.markedDatesSelected);
    // const s1 = JSON.stringify(Monday);
    // const  s2 =JSON.stringify(Tuesday);
    // const   s3 = JSON.stringify(Wednesday);
    // const s4 = JSON.stringify(Thursday);
    // const   s5 = JSON.stringify( Friday);
    // const   s6 = JSON.stringify(Saturday);
    //  const  s7 = JSON.stringify(nowSunday);
        let markedWeekDay = {
            [Monday] : { startingDay: true, color: '#1E90FF' },
            [Tuesday] : { color: '#1E90FF' },
            [Wednesday] : { color: '#1E90FF' },
            [Thursday] : { color: '#1E90FF' },
            [Friday] : { color: '#1E90FF' },
            [Saturday]  : { color: '#1E90FF' },
            [nowSunday] : { endingDay: true,color: '#1E90FF' },
                            };
        markedDatesSelected = markedWeekDay;
        this.setState({markedDatesSelected:markedWeekDay});
        // alert("==="+momentNow+"==="+agoSunday+"==="+Monday+"==="+Tuesday+"==="+Wednesday
        // +"==="+Thursday+"==="+Friday+"==="+Saturday+"==="+nowSunday);
    }
    dealCalendar = (day) => {
        console.log('selected day', day);
        // alert("==="+day.dateString);
        this.dealWeekDays(day.dateString);
        // let momentUtil = moment();//当前时间
        // momentUtil.format("d");

        // let momentUtil2 = moment(day); 
        // momentUtil2.format("d");

        //先看看该日期是否在该年的某个日期内，

        //循环取出该日期的一周内的每一天，
        // for()
    }
    render() {
        return (
            <View style={styles.container}>
                <Calendar

                    onDayPress={(day) => { this.dealCalendar(day)}}
                    style={styles.calendar}
                    // current={'2012-05-16'}
                    // minDate={'2012-05-10'}
                    // maxDate={'2012-05-29'}
                    firstDay={1}//1显示周一作为第一天，7，显示周日作为第一天
                    // theme={{
                    //     calendarBackground: '#333248',
                    //     textSectionTitleColor: 'white',
                    //     dayTextColor: 'red',
                    //     todayTextColor: 'white',
                    //     selectedDayTextColor: 'white',
                    //     monthTextColor: 'white',
                    //     selectedDayBackgroundColor: '#333248',
                    //     arrowColor: 'white',
                    //     // textDisabledColor: 'red',
                    //     'stylesheet.calendar.header': {
                    //       week: {
                    //         marginTop: 5,
                    //         flexDirection: 'row',
                    //         justifyContent: 'space-between'
                    //       }
                    //     }
                    // }}
                     markingType={'period'}
                    markedDates={
                        this.state.markedDatesSelected
                        // {
                        // '2018-04-09': { selected: true },
                        // '2018-04-10': { selected: true },
                        // '2018-04-11': { selected: true },
                        // '2018-04-12': { selected: true },
                        // '2018-04-13': { selected: true },
                        // '2018-04-14': { selected: true },
                        // '2018-04-15': { selected: true },
                        // '2018-04-15': { selected: true, marked: true },
                        // '2012-05-24': { selected: true, marked: true, dotColor: 'green' },
                        // '2012-05-25': { marked: true, dotColor: 'red' },
                        // '2012-05-26': { marked: true },
                        // '2012-05-27': { disabled: true, activeOpacity: 0 }
                        // }
                    }
                    // disabledByDefault={true}
                    hideArrows={false}
                />
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
        marginBottom: 20
    },calendar: {
        borderTopWidth: 1,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#eee',
        height: 350
      },
});