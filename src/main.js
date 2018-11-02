import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import '@/styles/index.scss' // global css

import global_ from '@/common/Global' // 全局
Vue.prototype.GLOBAL = global_//挂载到Vue实例上面

import http from '@/common/utils/HttpUtils'

import AMap from 'vue-amap';

//import App from './App'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.use(Element);
Vue.use(iView);
Vue.use(AMap);

Vue.config.productionTip = false

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德的key
  key: 'fd58f9386934350c085d229e3fe913ba',
  // 插件集合
  plugin: ['AMap.Geolocation', 'AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

//new Vue({
//	el: '#app',
//router,
//store,
//	render: h => h(App)
//})

const app = new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

//router.beforeEach((to, from, next) => {
//	console.log(store.state.isLogin)
//	store.state.isLogin?next():next('/')
//})

