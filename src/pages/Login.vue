<template>
	<div class="login">
		<el-form ref="form" class="login-form" :model="loginForm" label-width="80px">
			<el-form-item>
				<el-input v-model="loginForm.username" placeholder="username"></el-input>
			</el-form-item>
			<el-form-item>
				<el-input type="password" v-model="loginForm.password" placeholder="password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login">登陆</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	name: "Login",
	data(){
		return {
			loginForm: {
				username: 'admin',
				password: '123456'
			}
		}
	},
	methods: {
		login(){
			this.$store.dispatch('login', this.loginForm)
			.then(data => {
				if(location.hash.indexOf('redirect') !== -1){
					let redirectPath = location.hash.split('=')[1]
					// 浏览器可能会把带过来的地址中的 / 转成 %2F
					// 这是浏览器的一种保护机制，url地址携带参数就会转义ASCII码
					if(redirectPath.indexOf('%2F') !== -1){
						redirectPath = redirectPath.replace(/%2F/gi, '/')
					}
					return this.$router.replace(redirectPath)
				}
				this.$router.replace('/')
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.login {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	background: url("../assets/images/login-bg.jpg") center no-repeat;
	background-size: cover;

	.login-form {
		width: 400px;
		/deep/ .el-form-item__content {
			margin-left: 0 !important;
		}

		.el-form-item {
			.el-button {
				width: 100%;
			}
		}
	}
}
</style>
