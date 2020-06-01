import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Parallax from './components/Parallax.vue'
import VueScrollTo from 'vue-scrollto'
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import VueLazyLoad from 'vue-lazyload'
import './assets/scss/styles.scss'
import VueWayPoint from 'vue-waypoint'

Vue.config.productionTip = false

Vue.component(Parallax.name, Parallax)

Vue.use(VueWayPoint)
Vue.use(VueScrollTo)
Vue.use(VueSimpleMarkdown)
Vue.use(VueLazyLoad, {
  observer: true,
  // optional
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
