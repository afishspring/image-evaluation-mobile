import { createRouter, createWebHistory } from 'vue-router'
import constantRouterMap from './route.config.js'

const router = createRouter({
  history: createWebHistory(),
  routes: constantRouterMap
})

export default router