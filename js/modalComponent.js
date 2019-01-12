import React, { Component } from "react";
import { Text, View, StyleSheet, Dimensions, Modal, TouchableOpacity, Image, TouchableHighlight } from "react-native";
const { width, height } = Dimensions.get("window");
/**
 * 弹框：设置阴影
 * 2018年08月25日22:58:26
 */
export default class ModalComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: true
        };
    }
    show() {
        this.setState({ modalVisible: true });
    }
    hide() {
        this.setState({ modalVisible: false });
    }
    render() {
        return (
            <Modal
                animationType={"fade"}
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={this.hide.bind(this)}>
                <View style={[styles.container]}>
                    {/* 弹出时的全屏阴影部分 */}
                    <TouchableHighlight
                        onPress={this.hide.bind(this)}
                        style={[styles.mask]}
                        underlayColor="transparent">
                        <Text />
                    </TouchableHighlight>
                    <View style={[styles.echartsContainer]}>
                        <View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                height: 340,
                                backgroundColor: "white"
                            }}>
                            <Text style={{ marginTop: 10, fontSize: 14, color: "#999", marginBottom: 10 }}>
                                {"Modal弹框来了"}
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{
                                marginTop: 26,
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                            onPress={this.hide.bind(this)}>
                            <Image style={{ width: 24, height: 24 }} source={require("../img/pop_up_close.png")} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        height: height,
        width: width,
        flexDirection: "column",
        backgroundColor: "transparent"
    },
    echartsContainer: {
        height: 450,
        width: width - 48,
        flexDirection: "column"
    },
    mask: {
        justifyContent: "center",
        backgroundColor: "#383838",
        opacity: 0.8,
        position: "absolute",
        width: width,
        height: height,
        left: 0,
        top: 0
    }
});
