<template>
  <div>
    <button :style="{'background-color': bgcolor, 'color': color, 'font-size': fontSize, 'border': 'none', 'width': width, 'height': height, 'line-height': height, 'border-radius': '5px'}" @click="emitEvent" :disabled="time > 0 || isSend">{{text}}</button>
  </div>
</template>

<script>
export default{
  computed: {
    text () {
      return this.time > 0 ? this.time + 's后重试' : '发送验证码'
    }
  },
  data () {
    return {
    }
  },
  props: {
    time: {
      type: Number
    },
    isSend: {
      type: Boolean
    },
    bgcolor: {
      type: String,
      default: '#409eff'
    },
    color: {
      type: String,
      default: '#fff'
    },
    fontSize: {
      type: String,
      default: '16px'
    },
    width: {
      type: String,
      default: '150px'
    },
    height: {
      type: String,
      default: '40px'
    }
  },
  methods: {
    emitEvent () {
      this.$emit('my-event', this.time)
    }
  }
}
</script>

<style>
</style>
