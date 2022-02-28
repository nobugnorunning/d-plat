<template>
	<div>
		<el-form ref="rolesForm" :model="rolesForm">
			<el-form-item label="选择路由权限">
				<el-select v-model="accessName" placeholder="请选择">
					<el-option label="q" value="1"></el-option>
				</el-select>
			</el-form-item>
			<el-button type="primary" @click="addRole">新增角色</el-button>
		</el-form>
	</div>
</template>

<script>
import {getRolesList} from '@/api/users'
import {addRole} from '@/api/roles'
export default {
	name: 'roles',
	data(){
		return {
			rolesForm: {

			},
			rolesList: [],
			accessName: ''
		}
	},
	mounted(){
		// console.log('roles')
		this.getRolesList()
	},
	methods: {
		async getRolesList(){
			const {data} = await getRolesList()
			console.log(data)
		},
		async addRole(){
			const {data} = await addRole({
				role_name: '超级管理员',
				role_value: 'admin'
			})
		}
	}
}
</script>
