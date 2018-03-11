import  React,{Component} from 'react';
import { connect,dispatch } from 'react-redux' // 引入connect

import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import style from './Container.css';

export default class yjbopopover1 extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillMount() {
    document.body.style.margin = "0px";
    //// 这是防止页面被拖拽
    //document.body.addEventListener('touchmove', (ev) => {
    //  ev.preventDefault();
    //});
  }

  render() {
    let {animateCls,pageNavTitle}=this.props.AppMd.AppMd;

    return (
      <ReactCSSTransitionGroup
        transitionName={animateCls}
        component="div"
        transitionEnterTimeout={400}
        transitionLeaveTimeout={400}>
        <div key={this.props.location.pathname}
             style={{position:"absolute", width: "100%"}}>
         <div style={{marginTop:".89rem"}}>
           {
             this.props.children
           }
         </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
// // 利用connect将组件与Redux绑定起来
// export default connect((AppMd) => ({AppMd}))(App)