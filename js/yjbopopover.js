import React, { Component } from 'react';
import { Popover, NavBar, Icon, Button } from 'antd-mobile';
import {
  Platform,
  StyleSheet,
  // Text,
  View
} from 'react-native';
// import { connect,dispatch } from 'react-redux' // 引入connect
const Item = Popover.Item;

// const myImg = src => <img src={`https://gw.alipayobjects.com/zos/rmsportal/${src}.svg`} className="am-icon am-icon-xs" alt="" />;

export default class yjbopropver extends Component {
  state = {
    visible: true,
    selected: '',
  };
  onSelect = (opt) => {
    this.setState({
      visible: true,
      selected: opt.props.value,
    });
  };
  handleVisibleChange = (visible) => {
    this.setState({
      visible,
    });
  };
  render() {
    return (
      <View>
        {/* <Button>你哈</Button> */}
        <NavBar leftContent="返回"
                mode="light"
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
        // <Icon key="1" type="ellipsis" />,
      ]}
        >个人维度</NavBar>
      </View>
    );
  }
}

// ReactDOM.render(<App />, mountNode);

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width:300,
    height:300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    margin:50,
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
});