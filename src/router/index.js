import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login/index.vue'

Vue.use(VueRouter)

// 第一处错误 routers ❌ routes ✔
const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

const router = new VueRouter({
  routes
})

export default router
