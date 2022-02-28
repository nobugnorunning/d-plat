<template>
	<el-scrollbar id="menu-out-scrollbar">
		<el-menu
			:default-active="$route.path"
			text-color="#fff"
			active-text-color="#ffd04b"
			:router="true"
		>
			<Item v-for="route in routes" :key="route.name" :current-route="route" :base-path="route.path"></Item>
		</el-menu>
	</el-scrollbar>
</template>

<script>
import Item from "@/layout/SideBar/Item";
export default {
	name: "SideBar-index",
	components: {
		Item
	},
	created(){
		this.routes = this.$router.options.routes
	},
	data(){
		return {
			routes: []
		}
	}
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/var.scss";


</style>
