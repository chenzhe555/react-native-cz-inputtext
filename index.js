import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

/*
* props:
* type: 显示类型 1.正常输入 2.银行卡格式
* mainStyle: 总视图类型 {mariginLeft: 10}
* textInputStyle: {marginRight: 20}
* placeholderText: 默认文本：请输入
* titleInfo: {'text': '标题', style: {fontSize: 16, color: 'red', width: 60}}
*
* func:
* evaluateView: 赋值当前对象
* onChangeText: 文本变动回调事件
*
* export func:
* modifyPlaceholder: 修改TextInput显示文本信息
* */
export default class CZTextInput extends Component{

    /************************** 生命周期 **************************/
    constructor(props) {
        super(props);
        this.initializeParams();
    }

    componentDidMount() {
        if (this.props.evaluateView) this.props.evaluateView(this);
    }
    /************************** 继承方法 **************************/
    /************************** 通知 **************************/
    /************************** 创建视图 **************************/
    /************************** 网络请求 **************************/
    /************************** 自定义方法 **************************/
    /*
    * 初始化参数
    * */
    initializeParams() {
        this.state = {
            type: this.props.type ? this.props.type : 1,
            text: '',
            placeholderText: this.props.placeholderText ? this.props.placeholderText : '请输入',
            titleInfo: this.props.titleInfo ? this.props.titleInfo : {}
        };
    }

    /*
    * 修改TextInput显示文本信息
    * */
    modifyText(evaluateText = '') {
        if (this.props.onChangeText) this.props.onChangeText(evaluateText);
        this.setState({
            text: evaluateText
        });
    }
    /************************** 子组件回调方法 **************************/
    /************************** 外部调用方法 **************************/
    /*
    * 修改文本为空时的默认显示文本信息
    * */
    modifyPlaceholder = (text) => {
        this.setState({
            placeholderText: text
        });
    }
    /************************** List相关方法 **************************/
    /************************** Render中方法 **************************/
    /*
    * 文本修改
    * */
    _onChangeText = (textValue) => {
        const { type } = this.state;
        let evaluateText = '';

        if (type == 1) {
            evaluateText = textValue;
        } else if (type == 2) {
            const { text } = this.state;

            let isAdd = text.length < textValue.length;
            if (isAdd) {
                if (textValue.length == 4 || (textValue.length > 7 && (textValue.length - 4)%5 == 0)) {
                    evaluateText = textValue + ' ';
                }
                else {
                    evaluateText = textValue;
                }
            } else {
                if (textValue.length != 0 && textValue.length%5 == 0) {
                    evaluateText = textValue.substr(0, textValue.length - 2);
                }
                else {
                    evaluateText = textValue;
                }
            }
        }
        this.modifyText(evaluateText);
    }

    /*
    * 清空文本信息
    * */
    _cleanText = () => {
        this.modifyText('');
    }

    render() {
        const { type, text, placeholderText, titleInfo } = this.state;

        //背景样式
        let mainStyles = [{
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
        }];
        //输入框样式
        let textInputStyles = [{
            flex: 1,
            fontSize: 16,
            marginLeft: 10,
            keyboardType: type == 2 ? 'numeric' : 'default'
        }];
        //标题样式
        let titleKeys = Object.keys(titleInfo);
        let titleStyles = [];
        if (titleKeys.length > 0) {
            titleStyles.push({
                marginLeft: 10,
                fontSize: 15,
                fontFamily: 'PingFangSC-Regular'
            });
            let titleStyle = titleInfo['style'] ? titleInfo['style'] : {};
            if (Object.keys(titleStyle).length > 0) titleStyles.push(titleStyle);
        }

        //外部设置总视图样式
        if (this.props.mainStyle) mainStyles.push(this.props.mainStyle);
        if (this.props.textInputStyle) textInputStyles.push(this.props.textInputStyle);

        return (
            <View style={mainStyles}>
                {
                    titleKeys.length > 0 ? (
                        <Text style={titleStyles}>{titleInfo['text'] ? titleInfo['text'] : ''}</Text>
                    ) : null
                }
                <TextInput
                    style={textInputStyles}
                    value={text}
                    onChangeText={this._onChangeText.bind(this)}
                    placeholder={placeholderText}
                />
                {
                    text.length > 0 ? (
                        <TouchableOpacity onPress={this._cleanText}>
                            <View style={[styles.CleanMainView]}>
                                <Image source={require('./images/clean_text.png')} style={[{width: 12, height: 12}]}/>
                            </View>
                        </TouchableOpacity>
                    ) : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    CleanMainView: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: '100%'
    }
})