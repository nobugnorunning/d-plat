import axios from "axios";
import { Message } from "element-ui";
import router from '@/router'
import store from "@/store";

const http = axios.create({
	baseURL: 'http://localhost:5566',
	timeout: 5000
})

http.interceptors.request.use(config => {
	if(config.url.indexOf('/api') !== -1){
		return config
	}else {
		config.headers.Authorization = 'Bearer ' + localStorage.getItem('TOKEN')
		return config
	}
}, err => {
	return Promise.reject(err)
})

http.interceptors.response.use(response => {
	return response
}, err => {
	// 捕捉401错误
	if(err && err.response.status === 401){
		const redirectPath = location.hash ? location.hash.substr(1) : ''
		redirectPath ? router.push('/login') : router.push('/login?redirect=' + redirectPath)
			// 清除token信息
		store.commit('LOGOUT')
		return Message.error('Authorization Error')
	}
	return Promise.reject(err)
})

const $http = ({method, url, data}) => {
	return http({
		method,
		url,
		[method.toLowerCase() === 'get' ? 'params' : 'data']: data
	})
}

export default $http
