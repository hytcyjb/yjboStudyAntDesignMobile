import moment from "moment";

export default class TimeUtil {

    static timetrans = (date) => {
        if (!date || 0 == date) {
            return "";
        }
        var date = new Date(date);//如果date为13位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M + D;
    };

    static monthtrans = (date) => {
        if (!date || 0 == date) {
            return "";
        }
        var date = new Date(date);//如果date为13位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
        return Y + M ;
    };

    static timetransAll = (date) => {
        if (!date || 0 == date) {
            return "";
        }
        var date = new Date(date);//如果date为13位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
        var s = ':' + (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M + D+h+m;
    };
    static timeObjtrans = (date) => {
        if (!date || 0 == date) {
            return "";
        }
        var date = new Date(date.time);//如果date为13位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y + M;
    };

    static timeObjtransRuleTime = (date) => {
        if (!date || 0 == date) {
            return "";
        }
        var date = new Date(date.time);//如果date为13位不需要乘1000
        var sendTime = date.valueOf();
        //当前时间
        var nowTime = (new Date()).valueOf();
        //差值
        var date3 = nowTime - sendTime;
        //天
        var days=Math.floor(date3/(24*3600*1000))
        //时
        var leave1=date3%(24*3600*1000)
        var hours=Math.floor(leave1/(3600*1000))
        //分
        var leave2=leave1%(3600*1000)
        var minutes=Math.floor(leave2/(60*1000))

        //秒
        var leave3=leave2%(60*1000)
        var seconds=Math.round(leave3/1000)

        var disAndTimeText;

        if(days>0){
            // var myText = '600m  '+days+'天前'
            //disAndTimeText=<Text style={styles.disAndTimeText}>{myText}</Text>

            var Y = date.getFullYear() + '-';
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
            var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
            disAndTimeText = Y+M+D;
        }

        if(days==0&&hours>0){
            var myText = hours+'小时前'
            disAndTimeText = myText;
        }

        if(days==0&&hours==0&&minutes>0){
            var myText = minutes+'分钟前'
            disAndTimeText = myText;
        }

        if(days==0&&hours==0&&minutes==0&&seconds>0){
            var myText = '刚刚'
            disAndTimeText = myText;
        }
        return disAndTimeText;
    };


    static parseDate=(date)=>{
        var isoExp, parts;
        isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/;
        try {
            parts = isoExp.exec(date);
        } catch(e) {
            return null;
        }
        if (parts) {
            date = new Date(parts[1], parts[2] - 1, parts[3], '00', '00', '00');
        } else {
            return null;
        }
        return date;
    }

    static parseDateMonth=(date)=>{
        var isoExp, parts;
        isoExp = /^\s*(\d{4})-(\d\d)-(\d\d)\s*$/;
        try {
            parts = isoExp.exec(date);
        } catch(e) {
            return null;
        }
        if (parts) {
            date = new Date(parts[1], parts[2] - 1);
        } else {
            return null;
        }
        return date;
    }

    static convertDateFromString=(dateString,dateFormate='yyyy-MM-dd')=>{
        if (dateString) {
            if(dateFormate == 'yyyy-MM-dd'){
                var date = new Date(dateString.replace(/-/,"/"))
                return date;
            } else if(dateFormate == 'yyyy-MM-dd hh:mm:ss'){
                var arr1 = dateString.split(" ");
                var sdate = arr1[0].split('-');
                var date = new Date(sdate[0], sdate[1]-1, sdate[2]);
                return date;
            }
        }
        return new Date();
    }

    static currentWeekStr =()=>{
        var day = new Date();
        return TimeUtil.getWeekStartDate(day)+"至"+TimeUtil.getWeekEndDate(day);
    }


    //获得本周的开始日期
    static getWeekStartDate=(date)=>{

        var now = new Date(); //当前日期
        if (date) now = date;

        var nowDayOfWeek = now.getDay()-1; //今天本周的第几天
        var nowDay = now.getDate(); //当前日
        var nowMonth = now.getMonth(); //当前月
        var nowYear = now.getYear(); //当前年
        nowYear += (nowYear < 2000) ? 1900 : 0; //

        var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
        return TimeUtil.formatDate(weekStartDate);
    }

    //获得本周的结束日期
    static getWeekEndDate=(date)=>{
        var now = new Date(); //当前日期
        if (date) now = date;

        var nowDayOfWeek = now.getDay()-1; //今天本周的第几天
        var nowDay = now.getDate(); //当前日
        var nowMonth = now.getMonth(); //当前月
        var nowYear = now.getYear(); //当前年
        nowYear += (nowYear < 2000) ? 1900 : 0; //
        var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
        return TimeUtil.formatDate(weekEndDate);
    }

    static getWeekDates = (date)=>{
        var now = new Date(); //当前日期
        if (date){
            if(typeof date === 'String'){
                now = TimeUtil.convertDateFromString(date);
            } else if(typeof date === 'string'){//字符类型
                now = TimeUtil.convertDateFromString(date);
            } else if(date.timestamp){
                now = new Date(date.timestamp);
            } else {
                now = date;
            }

        }

        var nowDayOfWeek = now.getDay()-1; //今天本周的第几天
        var nowDay = now.getDate(); //当前日
        var nowMonth = now.getMonth(); //当前月
        var nowYear = now.getYear(); //当前年
        nowYear += (nowYear < 2000) ? 1900 : 0;

        var weekEndDate = new Date(nowYear, nowMonth, nowDay + (0 - nowDayOfWeek));
        var Monday = TimeUtil.formatDate(weekEndDate);

        weekEndDate = new Date(nowYear, nowMonth, nowDay + (1 - nowDayOfWeek));
        var Tuesday = TimeUtil.formatDate(weekEndDate);

        weekEndDate = new Date(nowYear, nowMonth, nowDay + (2 - nowDayOfWeek));
        var Wednesday = TimeUtil.formatDate(weekEndDate);

        weekEndDate = new Date(nowYear, nowMonth, nowDay + (3 - nowDayOfWeek));
        var Thursday = TimeUtil.formatDate(weekEndDate);

        weekEndDate = new Date(nowYear, nowMonth, nowDay + (4 - nowDayOfWeek));
        var Friday = TimeUtil.formatDate(weekEndDate);

        weekEndDate = new Date(nowYear, nowMonth, nowDay + (5 - nowDayOfWeek));
        var Saturday = TimeUtil.formatDate(weekEndDate);

        weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek));
        var nowSunday = TimeUtil.formatDate(weekEndDate);

        return [Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,nowSunday];
    }

     //获取当月第一天
     static getCurrentMonthFirst=(date)=>{
        var now = new Date();
        if (date) now = date;
        now.setDate(1);
        return TimeUtil.formatDate(now);
    }

    //获取当月后一天
    static getCurrentMonthLast=(date)=>{
        var now = new Date();
        if (date) now = date;
        var currentMonth=now.getMonth();
        var nextMonth=++currentMonth;
        var nextMonthFirstDay=new Date(now.getFullYear(),nextMonth,1);
        var oneDay=1000*60*60*24;
        return TimeUtil.formatDate(new Date(nextMonthFirstDay-oneDay));
    }

    static currentMonthStr =()=>{
        var date = new Date();
        var myyear = date.getFullYear();
        var mymonth = date.getMonth() + 1;
        var myweekday = date.getDate();
        if (mymonth < 10) {
            mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
            myweekday = "0" + myweekday;
        }
        return (myyear + "-" + mymonth);
    }

    static getCurrentJiduFirst = (date)=>{
        var now = new Date();
        if (date) now = date;
        var currentMonth=now.getMonth()+1;
        let startTime = "";
        let endTime = "";
        var year = now.getYear(); //当前年
        year += (year < 2000) ? 1900 : 0; //
        if(currentMonth >0 && currentMonth <4){
            // jiduStr = "一季度";
            startTime = year + "-01-01";
            endTime = year + "-03-31";
        } else  if(currentMonth >3 && currentMonth <7){
            // jiduStr = "二季度";
            startTime = year + "-04-01";
            endTime = year + "-06-30";
        } else  if(currentMonth >6 && currentMonth <10){
            // jiduStr = "三季度";
            startTime = year + "-07-01";
            endTime = year + "-09-30";
        } else  if(currentMonth >9 && currentMonth <13){
            // jiduStr = "四季度";
            startTime = year + "-10-01";
            endTime = year + "-12-31";
        } 
        return startTime;
    }
    static getCurrentJiduLast = (date)=>{
        var now = new Date();
        if (date) now = date;
        var currentMonth=now.getMonth()+1;
        let startTime = "";
        let endTime = "";
        var year = now.getYear(); //当前年
        year += (year < 2000) ? 1900 : 0; //
        if(currentMonth >0 && currentMonth <4){
            // jiduStr = "一季度";
            startTime = year + "-01-01";
            endTime = year + "-03-31";
        } else  if(currentMonth >3 && currentMonth <7){
            // jiduStr = "二季度";
            startTime = year + "-04-01";
            endTime = year + "-06-30";
        } else  if(currentMonth >6 && currentMonth <10){
            // jiduStr = "三季度";
            startTime = year + "-07-01";
            endTime = year + "-09-30";
        } else  if(currentMonth >9 && currentMonth <13){
            // jiduStr = "四季度";
            startTime = year + "-10-01";
            endTime = year + "-12-31";
        } 
        return endTime;
    }
    static getCurrentJiduArray = (date)=>{
        var now = new Date();
        if (date) now = date;
        var currentMonth=now.getMonth()+1;
        var year = now.getYear(); //当前年
        year += (year < 2000) ? 1900 : 0; //
        let jijieValue = [];
        if(currentMonth >0 && currentMonth <4){
            jijieValue = [
                {label: '一季度',
                    value: '一季度',},
            ];
        } else  if(currentMonth >3 && currentMonth <7){
            jijieValue = [
                {label: '一季度',
                    value: '一季度',},
                {label: '二季度',
                    value: '二季度', },
            ];
        } else  if(currentMonth >6 && currentMonth <10){
            jijieValue = [
                {label: '一季度',
                    value: '一季度',},
                {label: '二季度',
                    value: '二季度', },
                { label: '三季度',
                    value: '三季度',},
            ];
        } else  if(currentMonth >9 && currentMonth <13){
            jijieValue = [
                {label: '一季度',
                    value: '一季度',},
                {label: '二季度',
                    value: '二季度', },
                { label: '三季度',
                    value: '三季度',},
                { label: '四季度',
                    value: '四季度',},
            ];
        } 
        return jijieValue;
    }
    //处理时间，列表和详情时间处理
    static dealDiffShowValue = (timeStr,type) =>{
        //2018 一季度
        if(timeStr){
            let index = timeStr.indexOf("-");
            if(index != -1){
                let timeArr = timeStr.split("-");
                if(type == 1){
                    return timeStr;
                }else if(type == 2){//周
                    
                }else if(type == 3){
                    let valueYearString = timeArr[0];//moment(timeStr).format("YYYY");
                    let valueMonthString = timeArr[1];//moment(timeStr).format("MM");
                    return  [valueYearString] + "-" + [valueMonthString];
                }else if(type == 4){
                    let jiduStr = "";
                    if(parseInt(timeArr[1]) == 1){
                        jiduStr = "一季度";
                    } else  if(parseInt(timeArr[1]) == 4){
                        jiduStr = "二季度";
                    } else  if(parseInt(timeArr[1]) == 7){
                        jiduStr = "三季度";
                    } else  if(parseInt(timeArr[1]) == 10){
                        jiduStr = "四季度";
                    } 
                    return timeArr[0] +","+ jiduStr;
                }
            }else if(timeStr.indexOf("季度") != -1){
                return timeStr;
            }
        }else{
            return timeStr;
        }
    }

    //获取该月之前的12个月
    static currentMonthOfOneYear =()=>{
        let monthArr = [];
        var date = new Date();
        var myyear = date.getFullYear();
        var mymonth = date.getMonth() + 1;
        let monthStr = "";
        let yearStr = "";
        let monthInt = mymonth;
        let yearInt = myyear;
        for(let i = 0;i<12;i++){
            monthInt = mymonth;
            yearInt = myyear;
            yearStr = yearInt+"";
            monthInt = mymonth - i;
            if(monthInt < 12 && monthInt > 0){
                if(monthInt <10){
                    monthStr = "0"+monthInt;
                }else{
                    monthStr = ""+monthInt;
                }
            } else if(monthInt <= 0){//越过1年
                monthInt = monthInt + 12;
                yearStr = yearInt -1;
                if(monthInt <10){
                    monthStr = "0"+monthInt;
                }else{
                    monthStr = ""+monthInt;
                }
            }
            //供显示使用
            let name = "";
            if(i == 0){
                name = "本月";
            }else if(i == 1){
                name = "上月";
            }else{
                name = yearStr + "-" + monthStr;
            }
            monthArr.push({"id": yearStr + "-" + monthStr, "value": name});
        }
        
        return monthArr;
    }

    static formatDate=(date)=>{
        var myyear = date.getFullYear();
        var mymonth = date.getMonth() + 1;
        var myweekday = date.getDate();
        if (mymonth < 10) {
            mymonth = "0" + mymonth;
        }
        if (myweekday < 10) {
            myweekday = "0" + myweekday;
        }
        return (myyear + "-" + mymonth + "-" + myweekday);
    }

}