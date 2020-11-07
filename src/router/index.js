import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../modules/home/HomeView'
import SettingsView from '../modules/home/SettingsView';
import LoginView from '../modules/auth/Login';
import RegisterView from '../modules/auth/Register';

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
	
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
