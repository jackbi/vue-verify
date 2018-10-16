import flagComponent from './vue-verify.vue'

const VueVerify = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('VueVerify', flagComponent)
  }
}

export default VueVerify
