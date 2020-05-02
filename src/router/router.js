import Vue from 'vue'
import VueRouter from 'vue-router'
import PageSquare from '../components/pageSquare.vue'
import PageCube from '../components/pageCube.vue'
import PageRandom from '../components/pageRandom.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/page-square/:inputNumber',
    name: 'pageSquare',
    component: PageSquare
  },
  {
    path: '/page-cube/:inputNumber',
    name: 'pageCube',
    component: PageCube
  },
  {
    path: '/page-random',
    name: 'pageRandom',
    component: PageRandom
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
