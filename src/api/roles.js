import http from '@/utils/request'

export const addRole = data => {
	return http({
		method: 'post',
		url: '/access/roles/add',
		data
	})
}
