import http from '@/utils/request'

// 获取用户信息
export const getUserInfo = data => {
	return http({
		method: "get",
		url: '/my/userinfo',
		data
	})
}

// 获取所有的用户列表
export const getRolesList = data => {
	return http({
		method: 'get',
		url: '/access/roles/list',
		data
	})
}
