export const getToken = () => {
	return localStorage.getItem('TOKEN')
}

export const getUserInfo = () => {
	return JSON.parse(localStorage.getItem('USERINFO'))
}
