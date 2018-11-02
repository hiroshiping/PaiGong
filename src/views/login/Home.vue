<template>
	<el-tabs v-model="activeName" type="card" @tab-click="handleClick" style="padding: 5px;">
		<el-tab-pane label="当前进度" name="first">
			<div class="top">
				<div class="now_info">
					<span>当前日期：</span><span>2018年10月25日</span>
					<span style="margin-left: 40px;">当前时间进度：</span><span class="red">81.6%</span>
					<span style="margin-left: 20px;">剩余时间：</span><span class="red">67天</span>
				</div>
				<div class="sbd_ul">
					<div class="left">
						<span>申北东</span>
					</div>
					<div class="right">
						<ul>
							<li>
								<a href="javascript:void(0)">催单员1：</a>
								<span>总分配户数（</span>
								<span class="red">5000</span>
								<span>），</span>
								<span>已联系（</span>
								<span class="red">4521</span>
								<span>），</span>
								<span>已收费（</span>
								<span class="red">3853</span>
								<span>），</span>
								<span>无效（</span>
								<span class="red">60</span>
								<span>），</span>
								<span>完成率（</span>
								<span class="red">77.1%</span>
								<span>）</span>
							</li>
							<li>
								<a href="javascript:void(0)">催单员2：</a>
								<span>总分配户数（</span>
								<span class="red">5000</span>
								<span>），</span>
								<span>已联系（</span>
								<span class="red">4521</span>
								<span>），</span>
								<span>已收费（</span>
								<span class="red">3853</span>
								<span>），</span>
								<span>无效（</span>
								<span class="red">60</span>
								<span>），</span>
								<span>完成率（</span>
								<span class="red">77.1%</span>
								<span>）</span>
							</li>
							<li>
								<a href="javascript:void(0)">催单员3：</a>
								<span>总分配户数（</span>
								<span class="red">5000</span>
								<span>），</span>
								<span>已联系（</span>
								<span class="red">4521</span>
								<span>），</span>
								<span>已收费（</span>
								<span class="red">3853</span>
								<span>），</span>
								<span>无效（</span>
								<span class="red">60</span>
								<span>），</span>
								<span>完成率（</span>
								<span class="red">77.1%</span>
								<span>）</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="sbn_ul">
					<div class="left">
						<span>申北南</span>
					</div>
					<div class="right">
						<ul>
							<li>
								<a href="javascript:void(0)">催单员1：</a>
								<span>总分配户数（</span>
								<span class="red">5000</span>
								<span>），</span>
								<span>已联系（</span>
								<span class="red">4521</span>
								<span>），</span>
								<span>已收费（</span>
								<span class="red">3853</span>
								<span>），</span>
								<span>无效（</span>
								<span class="red">60</span>
								<span>），</span>
								<span>完成率（</span>
								<span class="red">77.1%</span>
								<span>）</span>
							</li>
							<li>
								<a href="javascript:void(0)">催单员2：</a>
								<span>总分配户数（</span>
								<span class="red">5000</span>
								<span>），</span>
								<span>已联系（</span>
								<span class="red">4521</span>
								<span>），</span>
								<span>已收费（</span>
								<span class="red">3853</span>
								<span>），</span>
								<span>无效（</span>
								<span class="red">60</span>
								<span>），</span>
								<span>完成率（</span>
								<span class="red">77.1%</span>
								<span>）</span>
							</li>
							<li>
								<a href="javascript:void(0)">催单员3：</a>
								<span>总分配户数（</span>
								<span class="red">5000</span>
								<span>），</span>
								<span>已联系（</span>
								<span class="red">4521</span>
								<span>），</span>
								<span>已收费（</span>
								<span class="red">3853</span>
								<span>），</span>
								<span>无效（</span>
								<span class="red">60</span>
								<span>），</span>
								<span>完成率（</span>
								<span class="red">77.1%</span>
								<span>）</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="down">
				<div class="dashLine"></div>
				<div class="left">
						<span>申北南</span>
					</div>
					<div class="right">
						<ul>
							<li>
								<a href="javascript:void(0)">电销员1：</a>
								<span>总分配户数（</span>
								<span class="red">5000</span>
								<span>），</span>
								<span>已联系（</span>
								<span class="red">4521</span>
								<span>），</span>
								<span>商机户数（</span>
								<span class="red">3853</span>
								<span>），</span>
								<span>无效户数（</span>
								<span class="red">60</span>
								<span>），</span>
								<span>商机率（</span>
								<span class="red">77.1%</span>
								<span>），</span>
								<span>收费户数（</span>
								<span class="red">782</span>
								<span>），</span>
								<span>商户收费率（</span>
								<span class="red">69.6%</span>
								<span>）</span>
							</li>
							<li>
								<a href="javascript:void(0)">电销员2：</a>
								<span>总分配户数（</span>
								<span class="red">5000</span>
								<span>），</span>
								<span>已联系（</span>
								<span class="red">4521</span>
								<span>），</span>
								<span>商机户数（</span>
								<span class="red">3853</span>
								<span>），</span>
								<span>无效户数（</span>
								<span class="red">60</span>
								<span>），</span>
								<span>商机率（</span>
								<span class="red">77.1%</span>
								<span>），</span>
								<span>收费户数（</span>
								<span class="red">782</span>
								<span>），</span>
								<span>商户收费率（</span>
								<span class="red">69.6%</span>
								<span>）</span>
							</li>
							<li>
								<a href="javascript:void(0)">电销员3：</a>
								<span>总分配户数（</span>
								<span class="red">5000</span>
								<span>），</span>
								<span>已联系（</span>
								<span class="red">4521</span>
								<span>），</span>
								<span>商机户数（</span>
								<span class="red">3853</span>
								<span>），</span>
								<span>无效户数（</span>
								<span class="red">60</span>
								<span>），</span>
								<span>商机率（</span>
								<span class="red">77.1%</span>
								<span>），</span>
								<span>收费户数（</span>
								<span class="red">782</span>
								<span>），</span>
								<span>商户收费率（</span>
								<span class="red">69.6%</span>
								<span>）</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</el-tab-pane>
		<el-tab-pane label="日报" name="second">
			
		</el-tab-pane>
	</el-tabs>
</template>

<script>
	import axios from 'axios'
	export default {
		name: 'Home',
		components: {},
		data() {
			return {
				activeName: 'first'
			}
		},
		watch: {

		},
		methods: {
			handleClick(tab, event) {
	        	console.log(tab, event);
	      	}
		},
		beforeCreate() {

		},
		mounted() {

		}
	}
</script>

<style rel="stylesheet/scss" lang="scss">
	.top,
	.down,
	.sbd_ul,
	.sbn_ul {
		width: 100%;
		height: auto;
		clear: both;
		overflow: hidden;
		padding: 0 0 0 15px;
	}
	
	.down {
		padding: 15px 0 0 30px;	
	}
	
	.top span,
	.down span,
	.top a,
	.down a {
		display: block;
		float: left;
		font-size: 12px;
		color: rgb(16, 16, 16);
		margin-right: 5px;
		line-height: 20px;
	}
	
	.top span.red,
	.down span.red {
		color: rgb(255, 0, 0);
		font-weight: 700;
	}
	
	.sbd_ul {
		margin-top: 40px;	
	}
	
	.sbn_ul {
		margin-top: 10px;	
	}
	
	.sbd_ul .left,
	.sbn_ul .left,
	.down .left {
		width: 5%;
	}
	
	.sbd_ul .left span,
	.sbn_ul .left span,
	.down .left span {
		font-weight: 700;
	}
	
	.sbd_ul .right,
	.sbn_ul .right,
	.down .right {
		width: 95%;
	}
	
	.sbd_ul .right ul,
	.sbn_ul .right ul,
	.down ul {
		list-style: none;
		overflow: hidden;
	}
	
	.sbd_ul .right ul li,
	.sbn_ul .right ul li,
	.down ul li {
		width: 100%;
		overflow: hidden;
	}
	
	.sbd_ul .right ul li a,
	.sbn_ul .right ul li a,
	.down ul li a {
		margin: 0 20px 0 10px;
		color: rgb(63, 81, 181)
	}
	
	.sbd_ul .right ul li a,
	.sbd_ul .right ul li span,
	.sbn_ul .right ul li a,
	.sbn_ul .right ul li span,
	.down ul li a,
	.down ul li span {
		display: block;
		float: left;
	}
	
	
	.sbd_ul .right ul li span.red,
	.sbd_ul .right ul li span.red,
	.sbn_ul .right ul li span.red,
	.sbn_ul .right ul li span.red {
		color: rgb(255, 0, 0);
	}
	
	.down {
		margin-top: 50px;
	}
	
	.down .dashLine {
		width: 30%;
		height: 0;
		border-bottom: 1px dashed rgb(187, 187, 187);
		margin-bottom: 15px;
	}
</style>