// tslint:disable:jsx-no-multiline-js
/* tslint:disable:no-console */
import { DatePicker, List } from 'antd-mobile';
import React from 'react';
import { View,StyleSheet } from 'react-native';

const now = new Date();

export default class PopupExample extends React.Component {
//   date1MinDate:null;
//   date1MaxDate: null;

  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
      date1MinDate:null,
      date1MaxDate: null,
    };
  }

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <View style={styles.container}>
        <List>
          <DatePicker
            defaultDate={now}
            value={this.state.value}
            mode="date"
            // minDate={
            //   this.state.date1MinDate || (this.state.date1MinDate = new Date(2015, 7, 6))
            // }
            // maxDate={
            //   this.state.date1MaxDate || (this.state.date1MaxDate = new Date(2016, 11, 3))
            // }
            onChange={this.onChange}
            format="YYYY-MM-DD"
          >
            <List.Item arrow="horizontal">Select Date</List.Item>
          </DatePicker>
        </List>
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
      marginBottom:20
    }
});