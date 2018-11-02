<template>
	<div class="layout-header">
		<div class="box">
			<div class="box_left" v-on:click="spot">
				<img src="@/assets/images/logo_sm.jpg" title="首页">
			</div>
			<div class="box_right">
				<h1>申北爱信诺派单系统</h1>
				<p>
					<span>登录用户: 贵爷;</span><span>所属公司: 申北公司;</span><span>所属部门: 软件事业部;</span>
					<span>角色: 集中管理全部组;</span><span>登录日期: 9999/12/31;</span><span>登录服务器: 192.168.2.999</span>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'LayoutHeader',
		components: {
			
		},
		data() {
			return {
				to_home: "true"
			}
		},
		computed: {},
		methods: {
			spot () {
				console.log("子组件" + this.to_home)
				this.$emit("spot", this.to_home)
			}
		},
		mounted() {
			
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	$bg:#075fac;
	$white:#fff;
	.layout-header {
		width: 100%;
		height: 100px;
		background-color: $bg;
	}
	.layout-header .box {
		padding: 10px;
	}
	.layout-header .box .box_left {
		width: 10%;
		float: left;
		cursor: pointer;
	}
	.layout-header .box .box_left img {
		width: 100%;
		height: 100%;
	}
	.layout-header .box .box_right {
		width: 90%;
		float: right;
		padding-left: 30px;
	}
	.layout-header .box .box_right h1 {
		color: $white;
		font-size: 20px;
		font-weight: 700;
		margin-top: 10px;
	}
	.layout-header .box .box_right p {
		margin-top: 15px;
	}
	.layout-header .box .box_right p span {
		color: $white;
		font-size: 12px;
		padding-right: 15px;
	}
</style>