<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <vue-verify :time="time" :isSend="isSend" @my-event="getMyEvent" ref="verify"/>
  </div>
</template>

<script>
import vueVerify from './vue-verify.vue'
export default {
  name: 'App',
  components: {
    vueVerify
  },
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
    getMyEvent (msg) {
      this.time = 60
      this.isSend = true
      this.Timer()
      this.isSend = false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
