<template>
	<div>
		<layout-header v-on:spot="spot"></layout-header>
		<el-container style="height: 100%;">
			<el-aside style="width: 202px; min-height: 650px; border: solid 1px #e6e6e6;">
				<el-menu @open="handleOpen" @close="handleClose" @select="selectItems" unique-opened>
					<el-submenu v-for="item in menuList" :index="item.id" :key="item.id">
						<template slot="title">
							<span v-text="item.name"></span>
						</template>
						<el-menu-item-group class="over-hide" v-for="sub in item.sub" :key="sub.id">
							<el-menu-item :index="sub.href" v-text="sub.name">
							</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
			</el-aside>
			<el-container>
				<el-main>
					<component :is="currentView"></component>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import LayoutHeader from './components/LayoutHeader'
	import Home from '@/views/login/Home'
	import CustomerSearch from '@/views/product/customer/Search'
	import TransferIndex from '@/views/sale/transfer/Index' 
	import axios from 'axios'
	export default {
		name: 'Layout',
		components: {
			Home,
			LayoutHeader,
			CustomerSearch,
			TransferIndex
		},
		data() {
			return {
				menuList: [],
				currentView: 'home'
			}
		},
		computed: {},
		methods: {
			getMenuList() {
				axios.get('/static/json/menu.json')
					.then((res) => {
						//						console.log(res.data.data.menuList)
						this.menuList = res.data.data.menuList
					})
					.catch(function(error) {
						console.log(error)
					});
			},
			handleOpen (key, keyPath) {
				console.log(key, keyPath)
			},
			handleClose (key, keyPath) {
				console.log(key, keyPath)
			},
			selectItems (index) {
				this.currentView = index
			},
			spot (val) {
				if (val == 'true') {
					this.currentView = 'home'
				}
			}
		},
		beforeCreate() {
			if(sessionStorage.getItem("userName") == null) {
				this.$router.push({
					path: "/"
				})
			}
		},
		mounted() {
			this.getMenuList()
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>