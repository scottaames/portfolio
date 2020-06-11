import Vue from 'vue'
import App from './App.vue'
import Parallax from './components/Parallax.vue'
import VueScrollTo from 'vue-scrollto'
import VueScrollShow from 'vue-scroll-show'
import VueLazyLoad from 'vue-lazyload'
import VueWayPoint from 'vue-waypoint'
import VueScrollactive from 'vue-scrollactive'
//import PerfectScrollbar from 'vue2-perfect-scrollbar'
//import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import './assets/scss/animations.scss'
import './assets/scss/styles.sass'

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

Vue.mixin({
  data: function() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      offsetAmount: 0,
    }
  },
  created: function() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed: function() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
      this.offsetAmount = this.window.height * 0.15
    },
  },
})

new Vue({
  render: h => h(App),
}).$mount('#app')
