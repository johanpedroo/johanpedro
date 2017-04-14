// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {TweenLite} from './assets/js/tweenmax.min'
window.TweenLite = TweenLite
// import 'bulma/css/bulma.css'
import './assets/js/jquery.easings.min.js'
import 'fullpage.js'
import './assets/js/index.js'
// import '../static/scriptFullpage.js'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<App/>',
  components: { App }
})
