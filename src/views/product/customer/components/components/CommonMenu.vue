<template>
	<div class="row_box" style="padding: 0 0 0 15px;">
		<el-button size="small">保存</el-button>
		<el-button size="small">催款登记</el-button>
		<el-button size="small">建转账单</el-button>
		<el-button size="small">上门派工</el-button>
		<el-select v-model="invoiceRegisterValue" placeholder="发票登记" size = "small" style="margin: 0 10px; width: 151px;">
			<el-option v-for="item in invoiceRegisterOptions" :key="item.id" :label="item.value" :value="item.id">
			</el-option>
		</el-select>
		<el-button size="small">添加商机</el-button>
	</div>
</template>

<script>
	export default {
		name: 'CommonMenu',
		components: {},
		data() {
			return {
				invoiceRegisterOptions: [{
					id: '1',
					value: '年费收费登记'
				}, {
					id: '2',
					value: '增值服务登记'
				}, {
					id: '3',
					value: '电子发票收款开票'
				}],
				invoiceRegisterValue : ''
			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	
</style>