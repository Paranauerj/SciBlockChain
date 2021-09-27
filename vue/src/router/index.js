import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Types from '@/views/Types.vue'
import Relayers from '@/views/Relayers.vue'
import Profile from '@/views/Profile.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Index
	},
	{ path: '/myprofile', component: Profile },
	{ path: '/articles', component: Types },
	{ path: '/relayers', component: Relayers }
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router