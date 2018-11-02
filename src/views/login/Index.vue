<template>
	<div class="login-container">
		<div class="header">
			<a href="javascript:void(0)" class="logo"></a>
		</div>
		<div class="main">
			<div class="login-center">
				<div class="login-form">
					<div class="login-tab">
						<a href="javascript:void(0)" :class="{'tab-item': isRight, 'tab-item active': isLeft}" @click="handleLeft">
							<span>扫码登录</span>
							<i :class="{'': isLeft, 'active': isRight}"></i>
						</a>
						<a href="javascript:void(0)" :class="{'tab-item': isLeft, 'tab-item active': isRight}" @click="handleRight">
							<span>账户登录</span>
						</a>
					</div>
					<div class="move_box">
						<div :class="{'move_inner': isLeft, 'move_inner active': isRight}">
							<div class="scan-login">
								<div class="scan-box">
									<div class="qrcode">
										<img class="qrCodeImg" src="@/assets/images/qrcode.png">
									</div>
								</div>
							</div>
							<div class="pc-login">
								<div class="username-login">
									<div class="login-blank"></div>
									<div class="username-box">
										<div class="input-box">
											<input type="text" placeholder="用户名" v-model="user">
											<img src="@/assets/images/user.png">
										</div>
									</div>
									<div class="password-box">
										<div class="input-box">
											<input type="password" placeholder="密码" v-model="pwd">
											<img src="@/assets/images/password.png">
										</div>
									</div>
									<a href="javascript:void(0)" class="login-submit" @click="login">登 录</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<div class="footer">
			<div class="footerBox">
				<div class="footerContent">
					<div class="copyright">
						上海申北爱信诺航天信息有限公司版权所有
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { MessageBox } from 'element-ui'
	import axios from 'axios'
	export default {
		name: 'Login',
		components: {},
		data() {
			return {
				isLeft: true,
				isRight: false,
				user: '',
				pwd: ''
			}
		},
		watch: {
			$route: {
		      handler: function(route) {
		      	console.log(route)
		      },
		      immediate: true
		    }
		},
		created() {
			// window.addEventListener('hashchange', this.afterQRScan)
		},
		destroyed() {
			// window.removeEventListener('hashchange', this.afterQRScan)
		},
		methods: {
			handleLeft () {
				this.isLeft = true;
				this.isRight = false;
			},
			handleRight () {
				this.isLeft = false;
				this.isRight = true;
			},
			login () {
				var vm = this
//	            var params = new URLSearchParams();
//		        params.append('name', this.user)
//		        params.append('psw', this.pwd)
//		        params.append('captcha', '')
//				
//				axios.post(this.GLOBAL.ip + '/aisino/api/auth/login', params).then(function(res){
//					console.log(res)
//					var success = res.data.success
//					var message = res.data.message
//					var token = res.data.token
//					
//					console.log("success:" + success)
//					console.log("message:" + message)
//					console.log("token:" + token)
//					
//					if (success && token != null) {
//						var employeeid = res.data.data.employeeid
//						var name = res.data.data.name
//						
//						console.log("name:" + name)
//						console.log("employeeid:" + employeeid)
//						
//						sessionStorage.setItem("userName", name)
//						sessionStorage.setItem("userToken", token)
//						
//						vm.$store.dispatch("setUser", name)
//						
						vm.$router.push({ path: "/redirect"})
//					} else if (!success) {
//						vm.$confirm(message, '提示', {
//				          showConfirmButton: false,
//				          showCancelButton: false,
//				          type: 'warning'
//				       	})
//					}
//	          	}).catch(function (error) {
//				  console.log(error);
//			 	});






//				sessionStorage.setItem("userName", "贵爷")
//				sessionStorage.setItem("userToken", "123")
//				this.$store.dispatch("setUser", "贵爷")
//				console.log(sessionStorage.getItem("userName"))
//				console.log(this.$store.state.isLogin)
				

				
//				this.$confirm('呃呃呃呃呃', '提示', {
//		          showConfirmButton: false,
//		          showCancelButton: false,
//		          type: 'warning'
//		       	})
//				this.$router.push({ path: "/redirect"})
			},
			beforeunloadHandler (e) {
				console.log(123)
			}
		},
		beforeCreate () {
			if (sessionStorage.getItem("userName") == null) {
				vm.$router.push({ path: "/"})
			}
		},
		mounted () {
			console.log("加载时的session:" + sessionStorage.getItem("userName"))
//			console.log(this.$store.state.isLogin)
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss">
	/* 修复input 背景不协调 和光标变色 */
	/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */
	
	$bg:#283443;
	$light_gray:#eee;
	$cursor: #fff;
	@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
		.login-container .el-input input {
			color: $cursor;
			&::first-line {
				color: $light_gray;
			}
		}
	}
	/* reset element-ui css */
	
	.login-container {
		.el-input {
			display: inline-block;
			height: 47px;
			width: 85%;
			input {
				background: transparent;
				border: 0px;
				-webkit-appearance: none;
				border-radius: 0px;
				padding: 12px 5px 12px 15px;
				color: $light_gray;
				height: 47px;
				caret-color: $cursor;
				&:-webkit-autofill {
					-webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
					-webkit-text-fill-color: $cursor !important;
				}
			}
		}
		.el-form-item {
			border: 1px solid rgba(255, 255, 255, 0.1);
			background: rgba(0, 0, 0, 0.1);
			border-radius: 5px;
			color: #454545;
		}
	}
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
	$bg:#2d3a4b;
	$bg_white:#fff;
	$dark_gray:#889aa4;
	$light_gray:#eee;
	$active_color:#075fac;
	.login-container {
		position: fixed;
		height: 100%;
		width: 100%;
		background-color: $bg_white;
		.clear {
	    clear: both;
	    display: block;
	    height: 0;
	    overflow: hidden;
	    font-size: 0;
		}
		.header {
			width: 970px;
			height: 100px;
			margin: 0 auto;
		}
		.header .logo {
			float: left;
			width: 970px;
			height: 100%;
			background: url(../../assets/images/logo.jpg) center no-repeat;
		}
		.main {
			height: 570px;
			min-width: 970px;
			background-color: $active_color;
		}
		.main .login-center {
			width: 970px;
			height: 100%;
			margin: 0 auto;
		}
		.main .login-center .login-form {
			position: relative;
			width: 360px;
			margin-top: 154px;
			background: $bg_white;
			box-shadow: 0 0 2px #ececec;
			font-family: "Microsoft Yahei";
			float: right;
		}
		.main .login-center .login-form .login-tab {
			height: 50px;
			line-height: 20px;
			font-size: 16px;
			overflow: hidden;
			border-bottom: 1px solid #eee;
		}
		.main .login-center .login-form .login-tab .tab-item {
			position: relative;
			float: left;
			height: 100%;
			width: 50%;
			text-decoration: none;
			text-align: center;
		}
		.main .login-center .tab-item.active,
		.login-form .login-tab .tab-item:hover {
			color: $active_color;
		}
		.main .login-center .login-form .login-tab .tab-item span {
			display: block;
			border-right: 1px solid #eee;
			margin-top: 15px;
		}
		.main .login-center .login-form .login-tab .tab-item i {
			display: block;
			position: absolute;
			width: 70px;
			height: 4px;
			background: $active_color;
			bottom: -1px;
			transition: .3s;
			left: 50%;
			margin-left: -35px;
		}
		.main .login-center .login-form .login-tab .tab-item i.active {
			transition: .3s;
			left: 150%;
		}
		.main .login-center .login-form .move_box {
			width: 100%;
			height: 212px;
			clear: both;
			position: relative;
			left: 0;
			overflow: hidden;
		}
		.main .login-center .login-form .move_box .move_inner {
			width: 500%;
			position: relative;
			clear: both;
			-webkit-transition: .2s;
			transition: .2s;
			transition: .3s;
			left: 0;
			overflow: hidden;
		}
		.main .login-center .login-form .move_box .move_inner.active {
			transition: .3s;
			left: -100%;
		}
		.main .login-center .login-form .move_box .move_inner .scan-login {
			float: left;
			width: 20%;
		}
		.main .login-center .login-form .move_box .move_inner .scan-login .scan-box {
			height: 156px;
			padding: 34px 34px 0;
			position: relative;
			margin-bottom: 17px;
		}
		.main .login-center .login-form .move_box .move_inner .scan-login .scan-box .qrcode {
			width: 141px;
			height: 141px;
			margin: 0 auto;
			transition: .3s all;
			position: relative;
		}
		.main .login-center .login-form .move_box .move_inner .scan-login .scan-box .qrcode .qrCodeImg {
			display: block;
			width: 100%;
			height: 100%;
		}
		.main .login-center .login-form .move_box .move_inner .pc-login {
			float: left;
			width: 20%;
		}
		.login-form .pc-login .username-box {
			margin-bottom: 20px;
		}
		.login-form .pc-login .password-box {
			margin-bottom: 20px;
		}
		.main .login-center .login-form .move_box .move_inner .pc-login .username-login {
			padding: 0 24px;
		}
		.main .login-center .login-form .move_box .move_inner .pc-login .username-login .login-blank {
			height: 40px;
			line-height: 40px;
			display: block;
		}
		.main .login-center .login-form .move_box .move_inner .pc-login .username-login .username-box {
			position: relative;
			clear: both;
		}
		.main .login-center .login-form .move_box .move_inner .pc-login .username-login .input-box {
			position: relative;
			border: 1px solid #ddd;
			color: #999;
			padding: 0 32px 0 36px;
			height: 36px;
			overflow: hidden;
		}
		.main .login-center .login-form .move_box .move_inner .pc-login .username-login .input-box input {
			display: block;
			width: 310px;
			height: 100%;
			line-height: 36px;
			padding: 0 32px 0 36px;
			border: 0;
			font-size: 14px;
			margin-left: -36px;
			outline: 0;
		}
		.main .login-center .login-form .move_box .move_inner .pc-login .username-login .input-box .icon {
			width: 36px;
			height: 36px;
			position: absolute;
			top: 0;
			left: 0;
		}
		.main .login-center .login-form .move_box .move_inner .pc-login .username-login .input-box img {
			position: absolute;
			top: 0;
			left: 0;
			width: 34px;
			padding: 6px;
		}
		.login-submit {
			display: block;
			width: 310px;
			line-height: 40px;
			margin: 0 auto;
			background: $active_color;
			border-radius: 2px;
			font-size: 20px;
			text-align: center;
			color: $bg_white;
		}
		.login-submit:hover {
			background: #6f9ae7;
		}
		.footer {
			height: 130px;
    	margin-top: 0;
		}
		.footer .footerBox {
	    height: 130px;
	    text-align: center;
		}
		.footer .footerBox .footerContent {
	    width: 990px;
	    min-width: 990px;
	    height: 120px;
	    margin: 0 auto;
	    font-family: "Microsoft Yahei";
		}
		.footer .footerBox .footerContent .copyright {
			float: none;
    	width: 100%;
	    line-height: 25px;
	    color: #999;
	    height: 25px;
	    margin-top: 15px;
		}
	}
</style>