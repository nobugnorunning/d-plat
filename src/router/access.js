import router from './index'
import { Message } from "element-ui";
import Nprogress from 'nprogress'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
	Nprogress.start()
	// 先检测有没有登陆
	const token = localStorage.getItem('TOKEN')
	if(token){
		// 如果想进入登陆页，强制回到首页
		if(to.path === '/login'){
			next('/')
			return
		}else {
			next()
		}
		Nprogress.done()
	}else {
		// 判断是不是进入白名单的页面
		if(whiteList.includes(to.path)){
			next()
			Nprogress.done()
		}else {
			Message.error('请先登录')
			next('/login?redirect=' + to.path)
			Nprogress.done()
		}
	}
})

router.afterEach(() => {
	Nprogress.done()
})
