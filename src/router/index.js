import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Project from '../views/Project.vue'
import Navbar from '../components/NavBar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: { default: Home, header: Navbar },
  },
  {
    path: '/about',
    name: 'about',
    components: { default: About, header: Navbar },
  },
  {
    path: '/projects',
    name: 'projects',
    components: { default: Projects, header: Navbar },
  },
  {
    path: '/project:slug',
    name: 'project',
    components: { default: Project, header: Navbar },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
