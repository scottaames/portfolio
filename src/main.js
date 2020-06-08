import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Parallax from './components/Parallax.vue'
import VueScrollTo from 'vue-scrollto'
import VueScrollShow from 'vue-scroll-show'
import VueLazyLoad from 'vue-lazyload'
import VueWayPoint from 'vue-waypoint'
import VueScrollactive from 'vue-scrollactive'
//import PerfectScrollbar from 'vue2-perfect-scrollbar'
//import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'

import './assets/scss/styles.sass'
import '@mdi/font/scss/materialdesignicons.scss'

Vue.config.productionTip = false

Vue.component(Parallax.name, Parallax)

Vue.use(VueScrollactive)
Vue.use(VueWayPoint)
//Vue.use(PerfectScrollbar)
Vue.use(VueScrollShow)
Vue.use(VueScrollTo)
Vue.use(VueLazyLoad, {
  observer: true,
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1,
  },
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
