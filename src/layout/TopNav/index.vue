<template>
	<div class="top-nav">
		<div class="logo">
			LOGO
		</div>
		<div class="options">
			<el-avatar :size="'medium'" :src="userInfo.user_pic ? userInfo.user_pic : defaultAvatar"/>

			<span style="margin-right: 15px;">欢迎您！{{ userInfo.nickname ? userInfo.nickname : userInfo.username }}</span>

			<el-dropdown size="small" @command="handCommand">
				<span class="el-dropdown-link">
					账户操作
					<i class="el-icon-arrow-down el-icon--right"></i>
				</span>
				<el-dropdown-menu slot="dropdown">
					<el-dropdown-item command="userCenter">个人中心</el-dropdown-item>
					<el-dropdown-item command="quit">退出登录</el-dropdown-item>
				</el-dropdown-menu>
			</el-dropdown>
		</div>
	</div>
</template>

<script>
import { getUserInfo } from '@/utils/auth'
export default {
	name: "TopNav",
	data () {
		return {
			defaultAvatar: require('@/assets/images/default-avatar.png'), // 默认头像
		}
	},
	props: {
		userInfo: {
			type: Object
		}
	},
	methods: {
		// 处理操作指令
		handCommand(command){
			switch(command){
				case 'userCenter':
					this.$message("个人中心")
					break;
				case 'quit':
					this.$store.commit('LOGOUT')
					this.$router.replace('/login')
					break;
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.top-nav {
	width: 100%;
	height: 100%;
	background-color: rgb(84, 92, 100);
	color: #fff;

	.logo {
		float: left;
		box-sizing: border-box;
		width: 217px;
		height: 100%;
		line-height: 59px;
		text-align: center;
		background-color: #555;
		border-bottom: 1px solid #666;
	}

	.options {
		float: right;
		display: flex;
		align-items: center;
		padding-right: 15px;
		height: 100%;

		.el-avatar {
			margin-right: 15px;
		}
		.el-dropdown {
			color: #fff;
			cursor: pointer;
		}
	}
}
</style>
