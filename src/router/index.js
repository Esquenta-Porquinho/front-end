import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../modules/home/HomeView'
import SettingsView from "../modules/home/SettingsView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    children: [
      {
        path: 'settings',
        name: 'SettingsView',
        component: SettingsView
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
