import Vue from 'vue'
import Vuex from 'vuex'

// 导入方法
import { login } from '@/api/login'

// 导入element组件
import {Message} from "element-ui";

Vue.use(Vuex)

const state = {
	userInfo: localStorage.getItem('USERINFO') || null,
	token: localStorage.getItem('TOKEN') || ''
}
const getters = {}
const mutations = {
	SET_USERINFO (state, userInfo) {
		state.userInfo = userInfo
		localStorage.setItem('USERINFO', JSON.stringify(userInfo))
	},
	SET_TOKEN(state, token){
		state.token = token
		localStorage.setItem("TOKEN", token)
	},
	LOGOUT(state){
		localStorage.removeItem('TOKEN')
		localStorage.removeItem('USERINFO')
		state.token = ''
		state.userInfo = null

	}
}
const actions = {
	login({commit}, formdata){
		return new Promise(async resolve => {
			const {data} = await login(formdata)
			if(data.iserr !== 0){
				return Message({
					type: 'error',
					message: '登录失败'
				})
			}
			resolve(1)
			commit('SET_TOKEN', data.data.token)
			Message({
				type: 'success',
				message: '登录成功'
			})
		})
	}
}
const modules = {}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules
})

export default store
