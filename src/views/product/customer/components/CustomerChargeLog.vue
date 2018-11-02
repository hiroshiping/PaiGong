<template>
	<div class="row_box">
		<common-menu></common-menu>
		<div class="row_box" style="margin: 15px;">
			<el-button size="small">删除电子发票</el-button>
			<el-button size="small">电子发票业务人员变更</el-button>
			<el-button size="small">号码替换</el-button>
			<el-button size="small">电票信息取票申请</el-button>
		</div>
		<div class="row_box" style="margin: 15px;">
			<el-table :data="tableDataSfjl" fit size="mini" v-loading="loading_tb" empty-text>
				<el-table-column type="index" label="序号" header-align="center" align="center"></el-table-column>
				<el-table-column prop="getdate" label="收款日期" align="center" width="150"></el-table-column>
				<el-table-column prop="invoicenumber" label="发票号" align="center" width="150"></el-table-column>
				<el-table-column prop="typenumber" label="发票代码" align="center" width="150"></el-table-column>
				<el-table-column prop="invoiceclass" label="发票分类" align="center" width="150"></el-table-column>
				<el-table-column prop="typename" label="发票种类" align="center" width="150"></el-table-column>
				<el-table-column prop="salevalue" label="金额" align="center" width="150"></el-table-column>
				<el-table-column prop="paymethod" label="收款方式" align="center" width="150"></el-table-column>
				<el-table-column prop="htenddate" label="合同起始日" align="center" width="150"></el-table-column>
				<el-table-column prop="state" label="状态" align="center" width="150"></el-table-column>
				<el-table-column prop="reach" label="是否到账" align="center" width="150"></el-table-column>
				<el-table-column prop="sendstate" label="是否上交" align="center" width="150"></el-table-column>
				<el-table-column prop="invoicename" label="增值服务产品" align="center" width="150"></el-table-column>
				<el-table-column prop="servicebelongname" label="所属服务商" align="center" width="150"></el-table-column>
			</el-table>
			<el-pagination @size-change="handleSizeChange" 
				@current-change="handleCurrentChange" :current-page="tableDataSfjl_current" 
				:page-sizes="[10, 20, 30, 40, 50]" :page-size="tableDataSfjl_size" layout="total, sizes, prev, pager, next, jumper" 
				:total="tableDataSfjl_total" style="margin-top: 10px;">
			</el-pagination>
		</div>
	</div>
</template>

<script>
	import CommonMenu from './components/CommonMenu2'
	
	import axios from 'axios'
	export default {
		name: 'CustomerChargeLog',
		components: {
			CommonMenu
		},
		props: {
			custid: '',
			openTab: '',
			tableDataSfjl: [],
			tableDataSfjl_current: '',
			tableDataSfjl_size: '',
			tableDataSfjl_total: ''
		},
		watch: {
//			openTab () {
//				var vm = this
//				console.log("收费记录页面的vm.openTab" + vm.openTab)
//				if (vm.openTab == '收费记录') {
//					this.init()
//				}
//			}
		},
		data() {
			return {
				loading_tb: false,
				tableData: [],
				sizeChange: false,
				cunrrentChange: false,
			}
		},
		methods: {
			handleSizeChange (val) {
				console.log(val)
				this.tableDataSfjl_size = val
				this.sizeChange = true
				this.search(val, this.tableDataSfjl_current)
			},
			handleCurrentChange (val) {
				console.log(val)
				this.tableDataSfjl_current = val
				this.cunrrentChange = true
				this.search(this.tableDataSfjl_size, val)
			},
			search (size, current) {
				var vm = this
				console.log("custid" + vm.custid)
				vm.loading_tb = true
				
				var current_init = ''
				var size_init = ''
				if(vm.sizeChange == false && vm.cunrrentChange == false) {
					current_init = vm.tableDataSfjl_current
					size_init = vm.tableDataSfjl_size
				} else {
					current_init = current
					size_init = size
				}
				
				console.log("--- 筛选参数  start ---")
				console.log("size:" + size_init)
				console.log("current:" + current_init)
				console.log("--- 筛选参数  end ---")
				
				console.log('--- 收费记录 start ---')
				var params = new URLSearchParams()
				params.append('custid', vm.custid)
				params.append('size', size_init)
				params.append('current', current_init)
				axios.post(this.GLOBAL.ip + '/aisino1/api/invoice/invoice/ListInvoiceInformation', params).then(function(res) {
					console.log("--- 返回数据  start ---")
					res = res.data
					if(res && res.success) {
						console.log(res)
						res = res.data
						vm.tableDataSfjl = res.records
						vm.tableDataSfjl_current = res.current
						vm.tableDataSfjl_size = res.size
						vm.tableDataSfjl_total = res.total
					}
					console.log("--- 返回数据  end ---")
				}).catch(function(error) {
					console.log(error);
				})
				console.log('--- 收费记录 end ---')
					
				vm.loading_tb = false
			}
		},
		created () {
			
		},
		mounted () {
			
		}
	}
</script>

<style>
</style>