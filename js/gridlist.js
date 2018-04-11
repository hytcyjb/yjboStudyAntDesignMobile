import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableHighlight,
} from 'react-native'
const THUMB_URLS = [
    {uri:"http://www.qq745.com/uploads/allimg/150408/1-15040PJ142-50.jpg"},
    {uri:"http://ww2.sinaimg.cn/large/8989048bjw1dutawvaz66j.jpg"},
    {uri:"http://img.lenovomm.com/s3/img/app/app-img-lestore/1993-2015-07-14062642-1436869602788.jpg?isCompress=true&width=342&height=513&quantity=0.8&rotate=true&dk=2"},
    {uri:"http://c.hiphotos.baidu.com/exp/whcrop=160,120/sign=57e0ac939058d109c4b6fff0be28f18e/b8389b504fc2d5620f811f00e51190ef77c66c56.jpg"},
    {uri:"http://f.hiphotos.baidu.com/exp/whcrop=160,120/sign=c3918fdeba014a90816b10ffc6070423/34fae6cd7b899e51d2350a7841a7d933c8950d26.jpg"},
    {uri:"http://f.hiphotos.baidu.com/exp/whcrop=160,120/sign=2aba0e6674c6a7efb973fe64928a9260/902397dda144ad3494292c3ed2a20cf430ad85f1.jpg"},
    {uri:"http://v1.qzone.cc/avatar/201503/04/17/44/54f6d3f8ae76c662.jpg%21200x200.jpg"},
    {uri:"http://awb.img.xmtbang.com/img/uploadnew/201510/22/8d822cf398d1482fbe3d0ac6208050c4.jpg"},
    {uri:"http://awb.img1.xmtbang.com/wechatmsg2015/article201506/20150601/thumb/6abcaf1a9c69496b8d51ec13eabfb5dd.jpg"},
    {uri:"http://imgsrc.baidu.com/forum/w%3D580/sign=7eb05e9eddf9d72a17641015e428282a/3e87194c510fd9f9b3d66fc8212dd42a2a34a4c9.jpg"},
];
export default class Root extends Component{
    constructor(props){
        super(props)
        const dataSource = new ListView.DataSource({
            rowHasChanged:(r1,r2) => (r1!==r2)
        })
        var datas = [];
        for (var i = 0; i < 10; i++) {

            datas.push({"id":'Row ' + i ,"value":'value ' + i });
        }
        this.state={
            dataSource:dataSource.cloneWithRows(datas)
        }
    }
    render(){
        return (
            <View style={styles.container}>
                <ListView
                    contentContainerStyle={styles.listStyle}
                    dataSource={this.state.dataSource}//数据源
                    initialListSize={4}//指定组件在刚挂载时渲染的行数。
                    renderRow={this._renderRow.bind(this)}
                >
                </ListView>
            </View>
        )
    }
    _renderRow(rowData,sectionID,rowID){
        const imageSource = THUMB_URLS[rowID]
        return (
            <TouchableHighlight style={styles.touchBtn}>
                <View style={styles.itemStyle}>
                    <Image style={styles.thumb} source={imageSource} ></Image>
                    <Text style={styles.text}>{rowData.value}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    text:{
        fontSize:16,
    },
    touchBtn:{
        height:160,
    },
    itemStyle:{
        justifyContent:'center',
        padding:5,
        margin:3,
        width:150,
        height:150,
        backgroundColor:'#F6F6F6',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#cccccc',
        borderRadius:5,
    },
    thumb:{
        marginTop:5,
        width:110,
        height:120,
    },
    listStyle:{
        marginTop:5,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-around',
    },
})