import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
    	component: () => import('@/views/login/Index'),
    	hidden: true
    },{
	    path: '/redirect',
	    name: 'redirect',
	    component: () => import('@/views/layout/Layout'),
	    hidden: true
	  },
	  {
      path: '/home',
      name: 'home',
      component: () => import('@/views/login/Home'),
    	hidden: true
    },
    {
      path: '/customer-search',
      name: 'customer-search',
      component: () => import('@/views/product/customer/Search'),
    	hidden: true
    },
    {
      path: '/transfer-index',
      name: 'transfer-index',
      component: () => import('@/views/sale/transfer/Index'),
    	hidden: true
    }
  ]
})