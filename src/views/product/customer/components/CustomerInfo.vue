<template>
	<div class="row_box">
		<common-menu></common-menu>
		<div class="row_box" style="margin: 15px;">
			<div class="left">
				<div class="inline">
					<div class="left">系统ID：</div>
					<div class="right">{{custid}}</div>
				</div>
				<div class="inline">
					<div class="left">航天ID：</div>
					<div class="right">{{customerid}}</div>
				</div>
				<div class="inline bold">
					<div class="left">企业名称：</div>
					<div class="right">{{comName}}</div>
				</div>
				<div class="inline type">
					<div class="left">A类企业：</div>
					<div class="right">
						<div>注册类型：</div>
						<div>{{company_A_type}}</div>
						<div>行业：</div>
						<div>{{company_A_hy}}</div>
					</div>
				</div>
				<div class="inline tag">
					<div class="left">商机标签：</div>
					<div class="right">
						<el-checkbox-group v-model="sybq" size="mini" style="font-size: 12px;">
							<el-checkbox label="基础服务费" disabled></el-checkbox>
							<el-checkbox label="软件用户" disabled></el-checkbox>
							<el-checkbox label="项目用户" disabled></el-checkbox>
						</el-checkbox-group>
					</div>
				</div>
				<div class="inline level">
					<div class="left">会员等级：</div>
					<div class="right">{{hydj}}</div>
				</div>
				<div class="inline cus_type">
					<div class="left">客户类型：</div>
					<div class="right">{{khlx}}</div>
				</div>
				<div class="inline addressCompany">
					<div class="left">地址公司：</div>
					<div class="right">
						<!--<el-input placeholder="请输入地址公司" v-model="input_address" size="mini" style="width: 300px; margin-right: 5px;" clearable></el-input>-->
						<input id="input_address" type="text" placeholder="" :value="kpAdd" :disabled="true" />
						<a href="javascript:void(0)">更新定位</a>
					</div>
				</div>
				<div class="inline addressCompany">
					<div class="left">地址说明：</div>
					<div class="right">
						<!--<el-input placeholder="请输入地址说明" v-model="input_addressInfo" size="mini" style="width: 300px;" clearable></el-input>-->
						<input id="input_addressInfo" type="text" placeholder="" v-model="address_info" :disabled="true" />
					</div>
				</div>
				<div class="inline addressCompany">
					<div class="left">EMAIL：</div>
					<div class="right">
						<el-input placeholder="" v-model="email" size="mini" style="width: 300px;" :disabled="true"></el-input>
					</div>
				</div>
				<div class="inline addressCompany map_box">
					<div class="left">地图：</div>
					<input id="searchMapInfo" type="text" placeholder="请输入需要搜索的地址" />
					<div class="right">
						<div id="map-container"> </div>
					</div>
				</div>
			</div>
			<div class="right">
				<div class="vipInfo">
					<div class="content">
						<div class="title">会员信息</div>
						<div><span>航天ID：</span><span>RC30514015</span><span>普通会员</span><span>老用户</span></div>
						<div><span>金税合同到期：</span><span>2018/10/18</span>
							<img src="@/assets/images/email.png">
							<span>邮件通知</span>
							<el-select v-model="expirationValue" placeholder="合同过期" size="mini" style="width: 100px; margin: -3px 0px 0px 5px;">
								<el-option v-for="item in expirationOptions" :key="item.value" :label="item.label" :value="item.value">
								</el-option>
							</el-select>
						</div>
						<div><span>服务费：</span><span>280元</span></div>
						<div><span>当年销售额：</span><span>400元</span></div>
						<div><span>当年服务数：</span><span>5次</span><span>当年派工数：</span><span>3次</span></div>
						<div><span>信息关联客户数：</span><span>5</span>
							<a href="javascript:void(0)">查看详细>></a>
						</div>
					</div>
				</div>
				<div class="message_info">
					<div class="tab">
						<a class="isChosen" href="javascript:void(0)">通讯信息</a>
						<a href="javascript:void(0)">修改通讯信息</a>
					</div>
					<div class="list">
						<ul>
							<li><span class="col1"></span>
								<span class="col2">1</span>
								<span class="col3">负责人：</span>
								<span class="col4">李雷</span>
								<span class="col5">021 -  13911111111 - 6436</span>
								<span class="col6">公司CEO的电话</span>
								<span class="col7"><img src="@/assets/images/mobile.png"><a href="javascript:void(0)">拨打电话</a></span>
							</li>
							<li>
								<span class="col1">首选</span>
								<span class="col2">2</span>
								<span class="col3">收费联系人：</span>
								<span class="col4">韩梅梅</span>
								<span class="col5">021 -  54766666 - 3676</span>
								<span class="col6">2018年财务，付款</span>
								<span class="col7"><img src="@/assets/images/mobile.png"><a href="javascript:void(0)">拨打电话</a></span>
							</li>
							<li>
								<span class="col1"></span>
								<span class="col2">3</span>
								<span class="col3">——</span>
								<span class="col4">——</span>
								<span class="col5">—— -  ——              - ——</span>
								<span class="col6">——</span>
								<span class="col7"><img src="@/assets/images/mobile.png"><a href="javascript:void(0)">拨打电话</a></span>
							</li>
							<li>
								<span class="col1"></span>
								<span class="col2">4</span>
								<span class="col3">——</span>
								<span class="col4">——</span>
								<span class="col5">—— -  ——              - ——</span>
								<span class="col6">——</span>
								<span class="col7"><img src="@/assets/images/mobile.png"><a href="javascript:void(0)">拨打电话</a></span>
							</li>
							<li>
								<span class="col1"></span>
								<span class="col2">5</span>
								<span class="col3">——</span>
								<span class="col4">——</span>
								<span class="col5">—— -  ——              - ——</span>
								<span class="col6">——</span>
								<span class="col7"><img src="@/assets/images/mobile.png"><a href="javascript:void(0)">拨打电话</a></span>
							</li>
							<li>
								<span class="col1"></span>
								<span class="col2">6</span>
								<span class="col3">——</span>
								<span class="col4">——</span>
								<span class="col5">—— -  ——              - ——</span>
								<span class="col6">——</span>
								<span class="col7"><img src="@/assets/images/mobile.png"><a href="javascript:void(0)">拨打电话</a></span>
							</li>
							<li>
								<span class="col1"></span>
								<span class="col2">7</span>
								<span class="col3">——</span>
								<span class="col4">——</span>
								<span class="col5">—— -  ——              - ——</span>
								<span class="col6">——</span>
								<span class="col7"><img src="@/assets/images/mobile.png"><a href="javascript:void(0)">拨打电话</a></span>
							</li>
							<li>
								<span class="col1"></span>
								<span class="col2">8</span>
								<span class="col3">——</span>
								<span class="col4">——</span>
								<span class="col5">—— -  ——              - ——</span>
								<span class="col6">——</span>
								<span class="col7"><img src="@/assets/images/mobile.png"><a href="javascript:void(0)">拨打电话</a></span>
							</li>
							<li>
								<span class="col1"></span>
								<span class="col2">9</span>
								<span class="col3">——</span>
								<span class="col4">——</span>
								<span class="col5">—— -  ——              - ——</span>
								<span class="col6">——</span>
								<span class="col7"><img src="@/assets/images/mobile.png"><a href="javascript:void(0)">拨打电话</a></span>
							</li>
							<li>
								<span class="col1"></span>
								<span class="col2">10</span>
								<span class="col3">——</span>
								<span class="col4">——</span>
								<span class="col5">—— -  ——              - ——</span>
								<span class="col6">——</span>
								<span class="col7"><img src="@/assets/images/mobile.png"><a href="javascript:void(0)">拨打电话</a></span>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import CommonMenu from './components/CommonMenu'
	import AMap from 'AMap'
	import AMapUI from 'AMapUI'
	export default {
		name: 'CustomerInfo',
		components: {
			CommonMenu
		},
		props: {
			custid: '', //系统id
			customerid: '', //航天id
			comName: '', //企业名称
			khlx: '', //客户类型
			kpAdd: '', //地址公司
			lng: '', //经度
			latitude: '', //纬度
		},
		computed: {},
		data() {
			return {
				input_address: '',
				input_addressInfo: '',
				expirationOptions: [{
					value: '1',
					label: '正常用户'
				}, {
					value: '2',
					label: '共享用户'
				}, {
					value: '3',
					label: '转出名单'
				}],
				expirationValue: '',

				//				kpAdd: '', //地址公司
				company_A_type: '', //A类企业的注册类型
				company_A_hy: '', //A类企业的行业
				sybq: [''], // 商机标签
				hydj: '', //会员等级
				address_info: '', //地址说明
				email: '' //EMAIL
			}
		},
		watch: {
			lng (lng, oldVal) {
				var vm = this
//				console.log("子组件-纬度:" + vm.latitude)

				//demo  116.39, 39.9 lng 121.473700 latitude 31.23037
				var latitude = vm.latitude
//				console.log("子组件经度:" + lng)
//				console.log("子组件纬度:" + latitude)
				vm.Map_init(lng, latitude)
			}
		},
		mounted() {
			this.Map_init(this.lng, this.latitude)
		},
		methods: {
			Map_init(lng, latitude) {
				var vm = this
				
				var map = new AMap.Map('map-container', {
					zoom: 20,
					resizeEnable: true
				});
				//demo  116.39, 39.9 lng 121.473700 latitude 31.23037
//				console.log(typeof(lng) != 'undefined')
//				console.log(typeof(latitude) != 'undefined')
				
				if (typeof(lng) != 'undefined' && typeof(latitude) != 'undefined') {
					console.log("子组件经度:" + lng)
					console.log("子组件纬度:" + latitude)
					map.setCenter([lng, latitude])
				}
				AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Geolocation'], function() {
					var autoOptions = {
						city: '', //城市，默认全国
						input: "searchMapInfo" //使用联想输入的input的id
					};
					var autocomplete = new AMap.Autocomplete(autoOptions);
					var placeSearch = new AMap.PlaceSearch({
						map: map
					});
					var marker = new AMap.Marker();
					marker.setMap(map);
					//				   var geolocation = new AMap.Geolocation({
					//		　　　　　　		// 是否使用高精度定位，默认：true
					//			　　　　　　enableHighAccuracy: true,
					//			　　　　　　// 设置定位超时时间，默认：无穷大
					//			　　　　　　timeout: 10000,
					//			　　　　　　// 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
					//			　　　　　　buttonOffset: new AMap.Pixel(10, 20),
					//			　　　　　　// 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
					//			　　　　　　 zoomToAccuracy: true,
					//			　　　　　　// 定位按钮的排放位置, RB表示右下
					//			　　　　　　buttonPosition: 'RB'
					//		　　　　　　})
					//				   
					//				   geolocation.getCurrentPosition()

					AMap.event.addListener(autocomplete, "select", function(e) {
						placeSearch.setCity(e.poi.adcode)
						placeSearch.search(e.poi.name)

						var marker = new AMap.Marker();
						marker.setMap();

						console.log(e.poi.name)
						console.log(e.poi.district + e.poi.address)

						vm.input_address = e.poi.name
						document.getElementById("input_address").value = e.poi.name
						vm.input_addressInfo = e.poi.district + e.poi.address
						document.getElementById("input_addressInfo").value = e.poi.district + e.poi.address
						//				      console.log(e.poi)
						//				      console.log(e.poi.name)
						//				      console.log(e.poi.district + e.poi.address)
						//				      vm.demo(e.poi.name)
						//				      console.log(vm.input_address_searched)
						//					  console.log(vm.input_address)

						//				      this.input_addressInfo = e.poi.district + e.poi.address

						//				         let gps=[];
						//				         gps.push(e.poi.location.lng)
						//				         gps.push(e.poi.location.lat)
						//				         this.Gps=gps
						//				         console.log(this.Gps)
					});
				});

				// AMap是高德地图的构造函数，这里.Map是创建地图，.Marker是创建坐标点
				//				let mapObj = new AMap.Map('map-container', {
				//					zoom: 13,
				//					resizeEnable: true
				//				})
				//				
				//				AMap.plugin('AMap.Geolocation', function () {
				//		　　　　		var geolocation = new AMap.Geolocation({
				//			　　　　　　// 是否使用高精度定位，默认：true
				//			　　　　　　enableHighAccuracy: true,
				//			　　　　　　// 设置定位超时时间，默认：无穷大
				//			　　　　　　timeout: 10000,
				//			　　　　　　// 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
				//			　　　　　　buttonOffset: new AMap.Pixel(10, 20),
				//			　　　　　　// 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
				//			　　　　　　 zoomToAccuracy: true,
				//			　　　　　　// 定位按钮的排放位置, RB表示右下
				//			　　　　　　buttonPosition: 'RB'
				//		　　　　　　})
				//
				//	　　　　　　		geolocation.getCurrentPosition()
				//	　　　　　　		AMap.event.addListener(geolocation, 'complete', (e) => {
				//	　　　　　　　　		console.log(e) // 定位成功之后做的事
				//	　　　　　　　　		// 定位成功之后再定位处添加一个marker
				//		　　　　　　　　var marker = new AMap.Marker({
				//		　　　　　　　　　　position: e.position, // （e.position）--->定位点的点坐标, position ---> marker的定位点坐标，也就是marker最终显示在那个点上，
				//		　　　　　　　　　　icon: '', // marker的图标，可以自定义，不写默认使用高德自带的
				//		　　　　　　　　　　map: mapObj,  // map ---> 要显示该marker的地图对象
				//		　　　　　　　　})
				//	　　　　　　		})
				//	
				//	　　　　　　		AMap.event.addListener(geolocation, 'error', (e) => {
				//	　　　　　　　　		console.log(e) // 定位失败做的事
				//	　　　　　　		})
				//　　				})

				//				--------------------------------------------------------------
				//				mapObj.plugin(['AMap.ToolBar', 'AMap.MapType'], function() {
				//					mapObj.addControl(new AMap.ToolBar())
				//					mapObj.addControl(new AMap.MapType({
				//						showTraffic: false,
				//						showRoad: false
				//					}))
				//				})
				//				mapObj.plugin(['AMap.Geolocation'], function() {
				//					let geolocation = new AMap.Geolocation({
				//						enableHighAccuracy: true, //  是否使用高精度定位，默认:true
				//						timeout: 10000, //  超过10秒后停止定位，默认：无穷大
				//						maximumAge: 0, // 定位结果缓存0毫秒，默认：0
				//						convert: true, // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
				//						showButton: true, //  显示定位按钮，默认：true
				//						buttonPosition: 'LB', // 定位按钮停靠位置，默认：'LB'，左下角
				//						buttonOffset: new AMap.Pixel(10, 20), //  定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
				//						showMarker: true, //  定位成功后在定位到的位置显示点标记，默认：true
				//						showCircle: true, //  定位成功后用圆圈表示定位精度范围，默认：true
				//						panToLocation: true, //  定位成功后将定位到的位置作为地图中心点，默认：true
				//						zoomToAccuracy: true //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
				//					})
				//					mapObj.addControl(geolocation)
				//					geolocation.getCurrentPosition()
				//					AMap.event.addListener(geolocation, 'complete', (result) => {
				//						mapObj.setCenter(result.position)
				//					}) //  返回定位信息
				//					AMap.event.addListener(geolocation, 'error', (result) => {
				//						console.log(result)
				//					}) //  返回定位出错信息
				//				})
				//				AMap.event.addListener(marker, 'click', (e) => {
				//					AMapUI.loadUI(['overlay/SimpleInfoWindow'], function(SimpleInfoWindow) {
				//						var infoWindow = new SimpleInfoWindow({
				//							infoTitle: '<strong>这是标题</strong>',
				//							infoBody: '<p>这是信息</p>',
				//							offset: new AMap.Pixel(0, -20),
				//							autoMove: true
				//						})
				//						// 后台取到的点，新建LngLat对象
				//						let lngLat = new AMap.LngLat(lanlet[0].trim(), lanlet[1].trim())
				//						// 转高德坐标系
				//						AMap.convertFrom(lngLat, 'gps', function(info, result) {
				//							lngLat = result.locations[0] // 转换后的坐标位置
				//							var marker = new AMap.Marker({
				//								position: lngLat,
				//								map: mapObj
				//							})
				//							infoWindow.open(mapObj, e.target.getPosition())
				//							// 最坑的就是这一步了，他的infowindow没有点击事件，所以infoWindow.get$Container()会返回这个infowindow（jquery）对象
				//							let infoEle = infoWindow.get$Container()
				//							//给infowindow添加点击事件，并在回调函数中处理业务或者跳转等
				//							infoEle.on('click', (e) => {
				//								router.push({
				//									name: 'proinfo',
				//									params: pro
				//								})
				//							})
				//						})
				//					})
				//				})
			},
			//			demo (name) {
			//				console.log(name)
			//				if (name != '' && name != null) {
			//					this.input_address = name
			//				}
			//			}
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	input::-webkit-input-placeholder {
		color: #c1c1c1;
		font-size: 12px;
	}
	
	.row_box .left {
		float: left;
		width: 50%;
	}
	
	.row_box .left .inline {
		width: 100%;
		overflow: hidden;
		margin-bottom: 10px;
		color: rgb(16, 16, 16);
	}
	
	.row_box .left .inline.bold {
		font-weight: 700;
	}
	
	.row_box .left .inline.type .left {
		color: rgba(255, 152, 0, 1);
	}
	
	.row_box .left .inline.level .right {
		color: rgba(0, 150, 136, 1);
		font-weight: 700;
	}
	
	.row_box .left .inline.cus_type .right {
		color: rgba(37, 155, 36, 1);
		font-weight: 700;
	}
	
	.row_box .left .inline .left {
		width: 15%;
	}
	
	.row_box .left .inline.addressCompany.map_box input {
		margin-bottom: 10px;
	}
	
	.row_box .left .inline.addressCompany .left {
		margin-top: 5px;
	}
	
	.row_box .left .inline.addressCompany a {
		color: rgba(41, 77, 240, 1);
		font-weight: 400;
		font-size: 12px;
		display: block;
		margin-top: 5px;
	}
	
	.row_box .left .inline .right {
		width: 85%;
	}
	
	.row_box .left .inline .right div {
		display: block;
		float: left;
		color: rgb(0, 150, 136);
	}
	
	.row_box .left .inline .right div:nth-of-type(even) {
		margin-right: 20px;
		overflow: hidden;
		width: 36px;
		height: 18px;
	}
	
	#input_addressInfo,
	#searchMapInfo,
	#input_address {
		background-color: #f5f7fa;
		border-color: #e4e7ed;
		color: #c0c4cc;
		-webkit-appearance: none;
		background-color: #f5f7fa;
		background-image: none;
		border-radius: 4px;
		border: 1px solid #e4e7ed;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		color: #c0c4cc;
		display: inline-block;
		float: left;
		font-size: inherit;
		height: 40px;
		line-height: 40px;
		outline: 0;
		padding: 0 15px;
		-webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
		transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
		width: 100%;
		outline: none;
		font-size: 12px;
		height: 28px;
		line-height: 28px;
		width: 300px;
		margin-right: 5px;
	}
	
	#searchMapInfo {
		background: #fff;
	}
	
	#map-container {
		width: 300px;
		height: 300px;
	}
	
	.row_box .right {
		float: right;
		width: 50%;
	}
	
	.row_box .right .vipInfo {
		width: 90%;
		height: auto;
		overflow: hidden;
		padding: 10px;
	}
	
	.row_box .right .vipInfo .content {
		width: 100%;
		height: auto;
		background-color: rgb(242, 253, 252);
		border: 1px solid rgb(238, 238, 238);
		line-height: 20px;
		color: rgb(0, 0, 0);
		padding: 10px;
	}
	
	.row_box .right .vipInfo .content div {
		margin-bottom: 10px;
		width: 100%;
		overflow: hidden;
		clear: both;
	}
	
	.row_box .right .vipInfo .content span {
		display: block;
		float: left;
		padding-top: 0;
	}
	
	.row_box .right .vipInfo .content img {
		width: 18px;
		padding: 3px 0 0 3px;
		float: left;
		margin-right: 5px;
		cursor: pointer;
	}
	
	.row_box .right .vipInfo .content .title {
		text-align: center;
		font-weight: 700;
		font-size: 13px;
		margin-bottom: 15px;
		color: #101010;
	}
	/*第一行*/
	
	.row_box .right .vipInfo .content div:nth-child(2) span:nth-child(2),
	.row_box .right .vipInfo .content div:nth-child(2) span:nth-child(3) {
		margin-right: 20px;
	}
	/*第二行*/
	
	.row_box .right .vipInfo .content div:nth-child(3) {
		padding-top: 3px;
		margin-bottom: 0;
	}
	
	.row_box .right .vipInfo .content div:nth-child(3) span:nth-child(2) {
		margin-right: 10px;
	}
	
	.row_box .right .vipInfo .content div:nth-child(3) span:nth-child(4) {
		color: #4990ee;
	}
	
	.row_box .right .vipInfo .content div:nth-child(2) span:nth-child(3) {
		font-weight: 700;
		color: rgba(0, 150, 136, 1);
	}
	
	.row_box .right .vipInfo .content div:nth-child(2) span:last-child {
		font-weight: 700;
		color: rgba(37, 155, 36, 1);
	}
	/*第五行*/
	
	.row_box .right .vipInfo .content div:nth-child(6) span:nth-child(2) {
		margin-right: 10px;
	}
	/*第六行*/
	
	.row_box .right .vipInfo .content div:nth-child(7) span {
		color: rgba(255, 0, 0, 1);
		font-weight: 700;
	}
	
	.row_box .right .vipInfo .content div:nth-child(7) a {
		display: block;
		float: left;
		font-size: 12px;
		color: rgba(63, 81, 181, 1);
		margin-left: 20px;
		font-weight: 700;
	}
	
	.row_box .right .message_info {
		width: auto;
		height: auto;
		overflow: hidden;
		clear: both;
	}
	
	.row_box .right .message_info .tab {
		padding: 15px 0 0 15px;
		overflow: hidden;
	}
	
	.row_box .right .message_info .tab a {
		display: block;
		float: left;
		font-size: 12px;
		color: rgb(41, 77, 240);
		margin-right: 20px;
	}
	
	.row_box .right .message_info .tab a.isChosen {
		color: rgb(16, 16, 16);
		font-weight: 700;
	}
	
	.row_box .right .message_info .list {
		width: 100%;
		height: auto;
		overflow: hidden;
		font-size: 12px;
		padding: 10px;
	}
	
	.row_box .right .message_info .list ul {
		list-style: none;
	}
	
	.row_box .right .message_info .list ul li {
		width: 100%;
		overflow: hidden;
		clear: both;
	}
	
	.row_box .right .message_info .list li span {
		display: block;
		float: left;
		color: rgb(16, 16, 16);
		height: 24px;
		line-height: 24px;
	}
	
	.row_box .right .message_info .list li span.col1,
	.row_box .right .message_info .list li span.col2 {
		width: 5%;
		text-align: center;
	}
	
	.row_box .right .message_info .list li span.col3 {
		width: 13%;
	}
	
	.row_box .right .message_info .list li span.col4 {
		width: 10%;
	}
	
	.row_box .right .message_info .list li span.col5 {
		width: 27%;
	}
	
	.row_box .right .message_info .list li span.col6 {
		width: 20%;
	}
	
	.row_box .right .message_info .list li span.col7 {
		width: 20%;
	}
	
	.row_box .right .message_info .list li span.col7 img {
		width: 13px;
		float: left;
		padding-top: 6px;
		margin-right: 3px;
	}
	
	.row_box .right .message_info .list li span.col7 a {
		display: block;
		float: left;
		color: rgb(63, 81, 181);
	}
</style>