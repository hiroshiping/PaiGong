<template>
	<div style="position: relative; width: 100%; overflow: hidden;">
		<transition name="fade">
			<el-header v-show="!touch_scroll" style="text-align: right; font-size: 12px; height: auto; padding: 5px; overflow: hidden; background-color: #E4E8FF;">
				<!-- 筛选1 start -->
				<el-select v-model="filter1Value" class="filterStyle" style="width: 100px;" placeholder="选择分组" size="small">
					<el-option v-for="item in filter1Options" :key="item.id" :label="item.value" :value="item.id">
					</el-option>
				</el-select>
				<!-- 筛选1 end -->
				<!-- 筛选2 start -->
				<el-select v-model="filter2Value" class="filterStyle" style="width: 135px; border-color: red;" size="small" collapse-tags>
					<el-option v-for="item in filter2Options" :key="item.id" :label="item.value" :value="item.id">
					</el-option>
				</el-select>
				<!-- 筛选2 end -->
				<!-- 筛选3 start -->
				<el-input v-model="filter3Value" placeholder="输入关键词" class="filterStyle" style="width: 150px;" clearable size="small"></el-input>
				<!-- 筛选3 end -->
				<el-button type="success" class="filterStyle" style="width: auto;" size="small" @click="search">查询</el-button>
				<!-- 筛选4 start -->
				<el-select v-model="filter4Value" class="filterStyle" style="width: 100px;" placeholder="企业标签" size="small">
					<el-option v-for="item in filter4Options" :key="item.id" :label="item.value" :value="item.id">
					</el-option>
				</el-select>
				<!-- 筛选4 end -->
				<!-- 筛选5 start -->
				<el-select v-model="filter5Value" class="filterStyle" style="width: 100px;" placeholder="商机标签" size="small">
					<el-option v-for="item in filter5Options" :key="item.id" :label="item.value" :value="item.id">
					</el-option>
				</el-select>
				<!-- 筛选5 end -->
				<!-- 筛选6 start -->
				<el-select v-model="filter6Value" class="filterStyle" style="width: 100px;" placeholder="会员等级" size="small">
					<el-option v-for="item in filter6Options" :key="item.id" :label="item.value" :value="item.id">
					</el-option>
				</el-select>
				<!-- 筛选6 end -->
				<!-- 筛选7 start -->
				<el-select v-model="filter7Value" class="filterStyle" style="width: 100px;" placeholder="客户类型" size="small">
					<el-option v-for="item in filter7Options" :key="item.id" :label="item.value" :value="item.id">
					</el-option>
				</el-select>
				<!-- 筛选7 end -->
				<!-- 筛选8 start -->
				<el-select v-model="filter8Value" class="filterStyle" style="width: 100px;" placeholder="客户状态" size="small">
					<el-option v-for="item in filter8Options" :key="item.id" :label="item.value" :value="item.id">
					</el-option>
				</el-select>
				<!-- 筛选8 end -->
				<el-button type="info" class="filterStyle" size="small">筛选</el-button>
				<el-button type="info" class="filterStyle" style="margin-left: 0;" size="small">高级筛选</el-button>
				<a href="javascript:void(0)" class="refresh_btn">刷新数据</a>
			</el-header>
		</transition>
		<el-main style="padding: 0;">
			<transition name="fade">
				<div class="row_box" v-show="!touch_scroll">
					<el-table :data="tableData" fit size="mini" :header-cell-style="rowClass_table1" :row-style="rowStyle_table1" :row-class-name="table1RowClassName" v-loading="loading_tb1" @row-click="onRowClick" empty-text>
						<el-table-column type="index" label="序号" header-align="center" align="center"></el-table-column>
						<el-table-column prop="deptname" label="所属分站" align="center"></el-table-column>
						<el-table-column prop="customerid" label="航天id" align="center" width="150"></el-table-column>
						<el-table-column prop="comName" label="企业名称" align="center" width="180"></el-table-column>
						<el-table-column prop="bddate" label="报道时间" align="center" width="135"></el-table-column>
						<el-table-column prop="htenddate" label="合同日期" align="center" width="135"></el-table-column>
						<el-table-column prop="custtype" label="用户类型" align="center"></el-table-column>
						<el-table-column prop="servicebelongname" label="服务商" align="center"></el-table-column>
		
						<el-table-column prop="jh" label="分机号" align="center"></el-table-column>
						<!--<el-table-column prop="jsState" label="用户分类" align="center"></el-table-column>-->
						<el-table-column prop="jscard" label="金税盘号" align="center" width="120"></el-table-column>
		
						<el-table-column prop="taxnum" label="税号" align="center" width="160"></el-table-column>
						<el-table-column prop="whq" label="区号" align="center"></el-table-column>
		
						<el-table-column prop="saletype" label="开票类型" align="center"></el-table-column>
						<el-table-column prop="kpren" label="开票人" align="center"></el-table-column>
						<el-table-column prop="kprentel" label="电话" align="center" width="150"></el-table-column>
						<el-table-column prop="kprentel2" label="电话1" align="center" width="150"></el-table-column>
						<el-table-column prop="sfrentel" label="电话3" align="center" width="150"></el-table-column>
						<el-table-column prop="kpAdd" label="地址" align="center" width="200"></el-table-column>
						<!--<el-table-column prop="lat" label="lat" align="center"></el-table-column>
						<el-table-column prop="latitude" label="latitude" align="center"></el-table-column>
						<el-table-column prop="lng" label="lng" align="center"></el-table-column>-->
						<!--<el-table-column prop="longitude" label="longitude" align="center"></el-table-column>-->
					</el-table>
					<div class="notice_box">
						<p>操作说明：</p>
						<p>1、表单的表头每个字段名可点击排序，单击后展示排序箭头，向上或向下，</p>
						<p>2、表单后面追加3个字段：最近30一天联系次数、最后一次联系时间、最后一次联系备注</p>
					</div>
					<div class="pagination_box">
						<div class="tag pink">合同过期</div>
						<div class="tag green">共享用户</div>
						<div class="tag white">正常用户</div>
						<div class="tag gray">转出名单</div>
						<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10, 20, 30, 40, 50]" :page-size="size" layout="total, sizes, prev, pager, next, jumper" :total="total" style="float: right;"></el-pagination>
					</div>
				</div>
			</transition>
			<div class="row_box downTable">
				<div class="scrollBar" @click="touch_scroll_act">

					<img v-show="!touch_scroll" src="@/assets/images/up_arrow.png" />
					<img v-show="touch_scroll" src="@/assets/images/down_arrow.png" />
				</div>
				<div class="detail_box">
					<!--<el-tabs v-model="editableTabsValue" type="card" style="font-size: 12px;" @tab-click="handleTabClick">
						<el-tab-pane :key="item.id" v-for="(item, index) in editableTabs" :label="item.title" :name="item.id">
							<prince :is="currentTab" keep-alive></prince>
						</el-tab-pane>
					</el-tabs>-->
					<el-tabs type="border-card" style="font-size: 12px;" @tab-click="handleTabClick2">
						<el-tab-pane label="客户信息">
							<customer-info v-loading="loading_downTable" :custid="custid" :customerid="customerid" :comName="comName" :khlx="khlx" :kpAdd="kpAdd" :lng="lng" :latitude="latitude"></customer-info>
						</el-tab-pane>
						<el-tab-pane v-loading="loading_downTable" label="扩展信息">扩展信息</el-tab-pane>
						<el-tab-pane v-loading="loading_downTable" label="会员信息">会员信息</el-tab-pane>
						<el-tab-pane v-loading="loading_downTable" label="税务信息">税务信息</el-tab-pane>
						<el-tab-pane v-loading="loading_downTable" label="服务记录">服务记录</el-tab-pane>
						<el-tab-pane v-loading="loading_downTable" label="联系记录">联系记录</el-tab-pane>
						<el-tab-pane v-loading="loading_downTable" label="销售业务">销售业务</el-tab-pane>
						<el-tab-pane v-loading="loading_downTable" label="催款记录">催款记录</el-tab-pane>
						<el-tab-pane v-loading="loading_downTable" label="转账出票记录">转账出票记录</el-tab-pane>
						<el-tab-pane v-loading="loading_downTable" label="区域调整">区域调整</el-tab-pane>
						<el-tab-pane v-loading="loading_downTable" label="收费记录">
							<customer-chargeLog :openTab="openTab" :custid="custid" :tableDataSfjl="tableDataSfjl" :tableDataSfjl_current="tableDataSfjl_current" :tableDataSfjl_size="tableDataSfjl_size" :tableDataSfjl_total="tableDataSfjl_total"></customer-chargeLog>
						</el-tab-pane>
						<el-tab-pane label="通讯信息">通讯信息</el-tab-pane>
						<el-tab-pane label="关联客户">关联客户</el-tab-pane>
					</el-tabs>
				</div>
			</div>

		</el-main>
	</div>
</template>

<script>
	import CustomerInfo from './components/CustomerInfo'
	import CustomerExtendInfo from './components/CustomerExtendInfo'
	import CustomerVip from './components/CustomerVip'
	import CustomerTaxInfo from './components/CustomerTaxInfo'
	import CustomerContactLog from './components/CustomerContactLog'
	import CustomerSales from './components/CustomerSales'
	import CustomerReminders from './components/CustomerReminders'
	import CustomerTransferOfTickets from './components/CustomerTransferOfTickets'
	import CustomerRegionalIncrease from './components/CustomerRegionalIncrease'
	import CustomerChargeLog from './components/CustomerChargeLog' //收费记录
	import CustomerMessageInfo from './components/CustomerMessageInfo'
	import CustomerAssociatedCust from './components/CustomerAssociatedCust'

	import axios from 'axios'
	import { MessageBox } from 'element-ui'
	export default {
		name: 'Search',
		components: {
			CustomerInfo,
			CustomerExtendInfo,
			CustomerVip,
			CustomerTaxInfo,
			CustomerContactLog,
			CustomerSales,
			CustomerReminders,
			CustomerTransferOfTickets,
			CustomerRegionalIncrease,
			CustomerChargeLog,
			CustomerMessageInfo,
			CustomerAssociatedCust
		},
		props: {
			//			total: {
			//              type: Number,
			//              default: 0
			//          },
			//          currentPage: {
			//              type: Number,
			//              default: 1
			//          }
		},
		data() {
			return {
				loading_tb1: false,
				loading_downTable: false,
				touch_scroll: false,
				filter1Options: [{
					value: '申北北区',
					id: '153'
				}, {
					value: '申北南区',
					id: '149'
				}, {
					value: '申北西区',
					id: '151'
				}, {
					value: '申北东区',
					id: '147'
				}],
				filter1Value: '',
				filter2Options: [{
					value: '按名称',
					id: 't_customer.com_nam_name'
				}, {
					value: '按地址',
					id: 't_customer.kp_add'
				}, {
					value: '按税号',
					id: 't_customer.taxnum'
				}, {
					value: '按航天id',
					id: 't_customer.custid'
				}, {
					value: '按专用设备号',
					id: 't_customer.jscard'
				}],
				filter2Value: 't_customer.com_nam_name',
				filter3Value: '',
				filter4Options: [{
					value: 'A',
					id: '1'
				}, {
					value: 'S',
					id: '2'
				}, {
					value: 'AS',
					id: '3'
				}, {
					value: 'D',
					id: '4'
				}, {
					value: 'AE',
					id: '5'
				}],
				filter4Value: '',
				filter5Options: [{
					value: '基础服务费',
					id: '1'
				}, {
					value: '软件用户',
					id: '2'
				}, {
					value: '项目用户',
					id: '3'
				}],
				filter5Value: '',
				filter6Options: [{
					value: '普通会员',
					id: '1'
				}, {
					value: '付费会员',
					id: '2'
				}, {
					value: '高级付费会员',
					id: '3'
				}],
				filter6Value: '',
				filter7Options: [{
					value: '新客户',
					id: '1'
				}, {
					value: '老客户',
					id: '2'
				}],
				filter7Value: '',
				filter8Options: [{
					value: '合同到期',
					id: '1'
				}, {
					value: '正常用户',
					id: '2'
				}, {
					value: '共享用户',
					id: '3'
				}, {
					value: '转出名单',
					id: '4'
				}],
				filter8Value: '',
				//				tableData: [{
				//					date: '2016-05-02',
				//					name: '王小虎1',
				//					address: '上海市普陀区金沙江路 1518 弄'
				//				}, {
				//					date: '2016-05-04',
				//					name: '王小虎2',
				//					address: '上海市普陀区金沙江路 1517 弄'
				//				}, {
				//					date: '2016-05-01',
				//					name: '王小虎3',
				//					address: '上海市普陀区金沙江路 1519 弄'
				//				}, {
				//					date: '2016-05-03',
				//					name: '王小虎4',
				//					address: '上海市普陀区金沙江路 1516 弄'
				//				}, {
				//					date: '2016-05-03',
				//					name: '王小虎4',
				//					address: '上海市普陀区金沙江路 1516 弄'
				//				}],
				openTab: '客户信息',
				tableData: [],
				sizeChange: false,
				cunrrentChange: false,
				total: 0,
				currentPage: 1,
				size: 10,
				editableTabsValue: '1',
				editableTabs: [{
					title: '客户信息',
					id: '1'
				}, {
					title: '扩展信息',
					id: '2'
				}, {
					title: '会员信息',
					id: '3'
				}, {
					title: '税务信息',
					id: '4'
				}, {
					title: '服务记录',
					id: '5'
				}, {
					title: '联系记录',
					id: '6'
				}, {
					title: '销售业务',
					id: '7'
				}, {
					title: '催款记录',
					id: '8'
				}, {
					title: '转账出票记录',
					id: '9'
				}, {
					title: '区域调整',
					id: '10'
				}, {
					title: '收费记录',
					id: '11'
				}, {
					title: '通讯信息',
					id: '12'
				}, {
					title: '关联客户',
					id: '13'
				}],
				currentTab: CustomerInfo,
				//				客户信息
				custid: '',
				customerid: '',
				khlx: '',
				comName: '',
				kpAdd: '',
				lng: '',
				latitude: '',
				//收费记录
				tableDataSfjl: [],
				tableDataSfjl_size: 10,
				tableDataSfjl_current: 1,
				tableDataSfjl_total: 0
			}
		},
		computed: {},
		methods: {
			rowClass_table1({
				row,
				rowIndex
			}) {
				return 'background:#eff2f7;color:#242732;border-left:0;'
			},
			rowStyle_table1({
				row,
				rowIndex
			}) {
				return 'border-left:0;'
			},
			handleSizeChange(val) {
				this.size = val
				this.sizeChange = true
				this.search(val, this.currentPage)
			},
			handleCurrentChange(val) {
				this.currentPage = val
				this.cunrrentChange = true
				this.search(this.size, val)
			},
			table1RowClassName({
				row,
				rowIndex
			}) {
				//合同过期 
				if(row.ispastdue == true) {
					return 'pink-row';
				}
				//正常,共享用户 green-row
				else if(row.jsState == 'y') {
					return 'white-row';
				}
				//转出名单
				else if(row.jsState == 'c' || row.jsState == 'w') {
					return 'gray-row';
				}

				return '';
			},
			onRowClick(row, event, column) {
				var vm = this
				var custid = row.custid
				vm.custid = row.custid
				console.log("客户id:" + custid)
				//				sessionStorage.setItem("custid", row.custid)
				console.log("onRowClick目前的tab:" + this.openTab)
				vm.search_downTable(custid)
			},
			handleTabClick(tab, event) {
				switch(tab.label) {
					case "客户信息":
						this.currentTab = CustomerInfo
						break
					case "扩展信息":
						this.currentTab = CustomerExtendInfo
						break
					case "会员信息":
						this.currentTab = CustomerVip
						break
					case "税务信息":
						this.currentTab = CustomerTaxInfo
						break
					case "服务记录":
						this.currentTab = CustomerServiceLog
						break
					case "联系记录":
						this.currentTab = CustomerContactLog
						break
					case "销售业务":
						this.currentTab = CustomerSales
						break
					case "催款记录":
						this.currentTab = CustomerReminders
						break
					case "转账出票记录":
						this.currentTab = CustomerTransferOfTickets
						break
					case "区域调整":
						this.currentTab = CustomerRegionalIncrease
						break
					case "收费记录":
						this.currentTab = CustomerChargeLog
						break
					case "通讯信息":
						this.currentTab = CustomerMessageInfo
						break
					case "关联客户":
						this.currentTab = CustomerAssociatedCust
						break
				}
			},
			handleTabClick2(tab, event) {
				console.log(tab, event)
				console.log("handleTabClick2切换的tab:" + tab.label)
				this.openTab = tab.label
				this.search_downTable()
			},
			search(size, current) {
				var vm = this
				vm.loading_tb1 = true
				//默认按名称
				var filter1Value = vm.filter1Value
				var filter2Value = vm.filter2Value
				var filter3Value = vm.filter3Value

				//				if(filter2Value == ''){
				//					vm.$confirm("请选择", '提示', {
				//			          showConfirmButton: false,
				//			          showCancelButton: false,
				//			          type: 'warning'
				//			       	})
				//				}

				if(filter1Value == '') {
					filter1Value = 'null'
				}

				//如果不选第二个帅选项
				if(filter2Value == '') {
					vm.$confirm("请选择帅选的第二项", '提示', {
						showConfirmButton: false,
						showCancelButton: false,
						type: 'warning'
					})
				}

				//关键词必须输
				if(filter3Value == '') {
					filter3Value = 'null'
				}

				var current_init = ''
				var size_init = ''
				console.log("--- 筛选参数  start ---")
				if(vm.sizeChange == false && vm.cunrrentChange == false) {
					current_init = vm.currentPage
					size_init = vm.size
				} else {
					current_init = current
					size_init = size
				}

				vm.sizeChange = false
				vm.cunrrentChange = false

				console.log("current:" + current_init)
				console.log("size:" + size_init)
				console.log("filter1Value" + filter1Value)
				console.log("filter2Value" + filter2Value)
				console.log("filter3Value" + filter3Value)
				console.log("--- 筛选参数 end ---")

				var params = new URLSearchParams()
				params.append('t_setup_department.deptid', filter1Value)
				params.append(filter2Value, filter3Value)
				params.append('size', size_init)
				params.append('current', current_init)

				axios.post(this.GLOBAL.ip + '/aisino1/api/customer/customer/ListCustomerInformation', params).then(function(res) {
					console.log("--- 返回数据  start ---")
					res = res.data
					console.log(res)
					if(res && res.success) {
						console.log(res.data)
						console.log(res.data.records)
						console.log("total:" + res.data.total + ",current:" + res.data.current + ",size:" + res.data.size + ",pages:" + res.data.pages);

						vm.tableData = []
						vm.tableData = res.data.records
						vm.total = res.data.total
						vm.currentPage = res.data.current
					}
					console.log("--- 返回数据  end ---")
				}).catch(function(error) {
					console.log(error);
				})

				vm.loading_tb1 = false
			},
			//刷新tab的数据
			search_downTable(custid) {
				var vm = this
				vm.loading_downTable = true
				//客户信息
				if(vm.openTab == '客户信息') {
					console.log('--- 客户信息 start ---')
					var params = new URLSearchParams()
					//demo RC586A6878
					if(typeof(custid) == 'undefined') {
						custid = vm.custid
					}

					params.append('custid', custid)

					axios.post(this.GLOBAL.ip + '/aisino1/api/customer/customer/GetCustomerInformation', params).then(function(res) {
						console.log("--- 返回数据  start ---")
						console.log(res)
						if(res.data) {
							res = res.data
							if(res.success) {
								res = res.data

								var custid = res.custid
								var customerid = res.customerid
								var comName = res.comName
								var kpAdd = res.kpAdd
								var khlx = ''
								var lng = res.lng
								var latitude = res.latitude
								console.log("系统ID:" + custid)
								console.log("航天ID:" + customerid)
								console.log("企业名称:" + comName)
								console.log("经度:" + lng)
								console.log("纬度:" + latitude)
								//					console.log("注册类型:" + )
								//					console.log("行业:" + )
								//					console.log("商机标签:" + )
								//					console.log("会员等级:" + )
								if(res.isnewcustomer) {
									khlx = '新客户'
								} else {
									khlx = '老客户'
								}
								console.log("客户类型:" + khlx)
								console.log("地址公司:" + kpAdd)

								//					console.log("地址说明:" + )
								//					console.log("EMAIL:" + )
								console.log("--- 返回数据  end ---")
								vm.custid = custid
								vm.customerid = customerid
								vm.comName = comName
								vm.khlx = khlx
								vm.kpAdd = kpAdd
								vm.lng = lng
								vm.latitude = latitude
							}
						}
					}).catch(function(error) {
						console.log(error);
					})
					console.log('--- 客户信息 end ---')
				}
				//收费记录
				if(vm.openTab == '收费记录') {
					console.log('--- 收费记录 start ---')
					var params = new URLSearchParams()
					console.log("custid:" + vm.custid)
					params.append('custid', vm.custid)
					params.append('size', vm.tableDataSfjl_size)
					params.append('current', vm.tableDataSfjl_current)
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
				}
				vm.loading_downTable = false
			},
			touch_scroll_act() {
				var vm = this
				//header: 40 table:? 操作说明： 62.8 pagination_box： 42
				if(vm.touch_scroll) {
					vm.touch_scroll = false
				} else {
					vm.touch_scroll = true
				}

			}
		},
		mounted() {

		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity .1s;
	}
	
	.fade-enter,
	.fade-leave-to
	/* .fade-leave-active below version 2.1.8 */
	
	{
		opacity: 0;
	}
	
	.el-table th {
		padding: 0;
	}
	
	.filterStyle {
		float: left;
		font-size: 12px;
		margin-right: 5px;
	}
	
	.refresh_btn {
		display: block;
		float: left;
		font-size: 14px;
		color: #8792D4;
		padding-top: 4px;
		font-weight: 700;
	}
	
	.notice_box {
		width: 100%;
		height: auto;
		padding: 10px;
		background-color: #fff;
	}
	
	.notice_box p {
		font-size: 12px;
		color: rgb(37, 155, 36);
	}
	
	.pagination_box {
		width: 100%;
		height: 42px;
		padding: 5px;
		background-color: #e4e8ff;
	}
	
	.pagination_box .tag {
		float: left;
		width: auto;
		border-radius: 4px;
		margin-top: 1.5px;
		height: 28px;
		line-height: 28px;
		padding: 0px 15px;
		margin-right: 5px;
		color: #101010;
	}
	
	.pagination_box .tag.pink {
		background-color: #ff4081;
	}
	
	.pagination_box .tag.green {
		background-color: #009688;
	}
	
	.pagination_box .tag.white {
		background-color: #fff;
	}
	
	.pagination_box .tag.gray {
		background-color: rgb(130, 130, 130);
	}
	
	.detail_box {
		width: 100%;
		height: auto;
		overflow: hidden;
	}
	
	.scrollBar {
		width: 100%;
		height: 20px;
		/*background: #d5dbff;*/
		background: #409eff;
		text-align: center;
		overflow: hidden;
		cursor: pointer;
	}
	
	.scrollBar:hover {
		background: #409eff94;
	}
	
	.scrollBar img {
		width: 13px;
		padding-top: 3px;
		border: 0;
	}
	/*下面滑动区域*/
	.downTable {}
</style>