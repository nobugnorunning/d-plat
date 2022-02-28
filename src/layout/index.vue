<template>
	<el-container>
		<el-header>
			<top-nav :user-info="userInfo" />
		</el-header>
		<el-container>
			<el-aside width="217px">
				<side-bar />
			</el-aside>
			<el-main>
				<router-view />
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
import TopNav from "@/layout/TopNav";
import SideBar from "@/layout/SideBar";

import {getUserInfo} from '@/api/users'

export default {
	name: 'Layout',
	components: {
		TopNav,
		SideBar
	},
	data(){
		return {
			userInfo: {}
		}
	},
	created(){
		this.getUserInfo()
	},
	methods: {
		async getUserInfo(){
			const {data} = await getUserInfo()
			console.log(data)
			if(data.iserr !== 0){
				return Message.error('获取用户信息失败，请刷新页面重试')
			}
			this.userInfo = data.data
			this.$store.commit('SET_USERINFO', data.data)
		}
	}
}
</script>

<style lang="scss" scoped>
.el-header{
	padding: 0;
}
.el-aside {
	max-height: calc(100vh - 60px);
}
</style>
