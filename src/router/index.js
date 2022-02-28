import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/layout";

Vue.use(VueRouter)

/*
	meta: {
		title: required,
		icon: if hidden is true, this value is required
	},
	hidden: do not show in sideBar
 */
export const constantRoutes = [
	{
		path: '/',
		name: 'layout',
		component: Layout,
		meta: {
			title: 'layout'
		},
		hidden: true
	},

	{
		path: '/login',
		name: 'login',
		component: () => import('@/pages/Login'),
		hidden: true
	},

	{
		path: '/systemManagement',
		name: 'systemManagement',
		redirect: '/systemManagement/users',
		component: Layout,
		children: [
			{
				path: 'users',
				name: 'users',
				component: () => import('@/pages/SystemManagement/Users'),
				meta: {
					title: '用户管理',
					icon: 'el-icon-menu'
				}
			},
			{
				path: 'roles',
				name: 'roles',
				component: () => import('@/pages/SystemManagement/Roles'),
				meta: {
					title: '角色管理',
					icon: 'el-icon-menu'
				}
			}
		],
		meta: {
			title: '系统管理',
			icon: 'el-icon-menu'
		}
	},
]

const createRouter = () => new VueRouter({
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRoutes
})

const router = createRouter()

export default router
