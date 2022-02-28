<template>
	<div v-if="!currentRoute.hidden">
		<el-submenu
			v-if="currentRoute.children && currentRoute.children.length"
			:index="plusPath">
			<template slot="title">
				<i :class="['side-icon', currentRoute.meta.icon]" />
				<span>{{ currentRoute.meta.title }}</span>
			</template>

			<Item
				v-for="item in currentRoute.children"
				:key="item.name"
				:current-route="item"
				:base-path="currentRoute.path"
			/>
		</el-submenu>
		<el-menu-item v-else :index="plusPath">
			<i :class="['side-icon', currentRoute.meta.icon]"></i>
			<span slot="title">{{currentRoute.meta.title}}</span>
		</el-menu-item>
	</div>
</template>

<script>
export default {
	name: "Item",
	props: {
		currentRoute: {
			type: Object
		},
		basePath: {
			type: String
		}
	},
	computed: {
		basedPath(){
			return this.basePath === '/' ? '/' : this.basePath + '/'
		},
		plusPath(){
			return this.basedPath + this.currentRoute.path
		}
	}
}
</script>

<style scoped>

</style>
