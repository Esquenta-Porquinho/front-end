import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../modules/home/HomeView'
import SettingsView from '../modules/home/SettingsView';
import LoginView from '../modules/auth/Login';
import RegisterView from '../modules/auth/Register';
import UserView from  '../modules/user/UserView';
import UserUpdateView from '../modules/user/UserUpdateView';
import UserLogsView from '../modules/user/UserLogsView';
import UserUpdateRoleView from '../modules/user/UserUpdateRoleView';
import UserRequestsView from '../modules/user/UserRequestsView';
import UserAllView from '../modules/user/UserAllView';

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
  },
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/user',
    name: 'UserView',
    component: UserView
  },
  {
    path: '/user/update',
    name: 'UserUpdateView',
    component: UserUpdateView
  },
  {
    path: '/user/logs',
    name: 'UserLogsView',
    component: UserLogsView
  },
  {
    path: '/user/role',
    name: 'UserUpdateRoleView',
    component: UserUpdateRoleView
  },
  {
    path: '/users/requests',
    name: 'UserRequestsView',
    component: UserRequestsView
  },
  {
    path: '/users',
    name: 'UserAllView',
    component: UserAllView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
