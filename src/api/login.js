import http from '@/utils/request'

export const login = (data) => {
	return http({
		method: 'post',
		url: '/api/login',
		data
	})
}
