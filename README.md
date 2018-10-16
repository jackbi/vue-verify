# vue-verify-list

> A Vue.js project

## Build Setup

``` bash
# 安装发送验证码插件
```$xslt
npm install vue-verify-list --save

# 引用插件
```$xslt
import VueVerifyList from 'vue-verify-list'

Vue.use(VueVerifyList)

# 在组件中使用
```$xslt
<vue-verify :time="time" :isSend="isSend" @my-event="goSend"/>

export default {
  data () {
    return {
      time: 0,
      isSend: false
    }
  },
  methods: {
    Timer () {
      if (this.time > 0) {
        this.time = this.time - 1
        setTimeout(this.Timer, 1000)
      }
    },
    goSend () {
      this.time = 60
      this.isSend = true
      this.Timer()
      this.isSend = false
    }
  }
}

###vue-verify-list/初始化参数
<table  border="0" align="left">
	<tbody>
		<tr>
			<td >参数</td>
			<td >类型</td>
			<td >默认值</td>
			<td >描述</td>
		</tr>
		<tr>
			<td >time</td>
			<td >Number</td>
			<td >-</td>
			<td >时间设为0</td>
		</tr>
		<tr>
      <td >isSend</td>
      <td >Boolean</td>
      <td >-</td>
      <td >时间设为false</td>
    </tr>
    <tr>
      <td >bgcolor</td>
      <td >String</td>
      <td >#409eff</td>
      <td >背景</td>
    </tr>
    <tr>
      <td >color</td>
      <td >String</td>
      <td >#fff</td>
      <td >文字颜色</td>
    </tr>
    <tr>
      <td >fontSize</td>
      <td >String</td>
      <td >16px</td>
      <td >文字大小</td>
    </tr>
    <tr>
      <td >width</td>
      <td >String</td>
      <td >150px</td>
      <td >按钮宽度</td>
    </tr>
    <tr>
      <td >height</td>
      <td >String</td>
      <td >40px</td>
      <td >按钮高度</td>
    </tr>
	</tbody>
</table>

###vue-verify-list/方法
<table  border="0" align="left">
	<tbody>
		<tr>
			<td >方法</td>
			<td >描述</td>
		</tr>
		<tr>
			<td >@my-event</td>
			<td >点击事件</td>
		</tr>
	</tbody>
</table>
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
