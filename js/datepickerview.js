/* tslint:disable:no-console */
import Flex, { DatePickerView } from 'antd-mobile';
import React from 'react';
import { Text, View,StyleSheet} from 'react-native';
/*
 * 日期选择
 * 
 */
export default class DatePickerViewExample extends React.Component {
  state = {
    value: null,
  };
  onChange = (value) => {
    console.log("onChange===="+value);
    this.setState({ value });
  }
  onValueChange = (...args) => {
    console.log("onValueChange===="+args);
  }
  render() {
      console.log("render====当前时间"+this.state.value)
    return (
      <View style={styles.container}>
        <Text style={{ margin: 16 }}>Start DateTime</Text>
        <DatePickerView
          value={this.state.value}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
        />
        <Text style={{ margin: 16 }}>End DateTime</Text>
        <DatePickerView
          mode={"month"}
          value={this.state.value}
          onChange={this.onChange}
          onValueChange={this.onValueChange}
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
      marginBottom:20
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    inputItemStyle: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
      backgroundColor:"white",
      textAlign:"center",
      justifyContent:"space-between"
    },
  });