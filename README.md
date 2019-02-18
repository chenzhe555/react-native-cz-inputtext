## Manual installation

npm install react-native-cz-inputtext --save


## Usage
###  1.引入组件
```
import TextInput from 'react-native-cz-inputtext';

<TextInput
	type={2}
	evaluateView={ (textInput) => {this.textInput = textInput}}
	onChangeText={this._onChangeText}
	titleInfo={{'text': '陈哲', 'style': {fontSize: 23, color: 'red', width: 60}}}
/> 
```

###  2.属性:
```
type: 显示类型 1.正常输入 2.银行卡格式
```
```
mainStyle: 总视图类型 {mariginLeft: 10}
```
```
textInputStyle: {marginRight: 20}
```
```
placeholderText: 默认文本：请输入
```
```
titleInfo: {'text': '标题', style: {fontSize: 16, color: 'red', width: 60}}
```


###  3.属性方法:
```
/*
* 赋值当前视图对象
* */
evaluateView
```

```
/*
* 文本变动回调事件
* */
onChangeText
```


###  4.供外部调用的方法:
```
/*
* 修改TextInput显示文本信息
* */
this.textInput.modifyPlaceholder('modify');
```
