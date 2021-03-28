import Vue from 'vue'
import VueRouter from 'vue-router'
import { authRoutes } from '@/modules/auth/auth-routes';
import { userRoutes } from '@/modules/user/user-routes';
import { matrixRoutes } from '@/modules/matrix/matrix-routes';

Vue.use(VueRouter)

const routes = [
  ...authRoutes,
  ...userRoutes,
  ...matrixRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
