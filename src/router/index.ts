import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Form_1 from '../views/Form_tareas.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/Form_1',
    name:'Form_1',
    component:Form_1
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
