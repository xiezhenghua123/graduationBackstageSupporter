/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-09 20:10:18
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-30 22:48:18
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'

import message from '@/message/index'
Vue.prototype.$message = message

import api from './api'
Vue.prototype.$api = api

import dayjs from 'dayjs'
Vue.prototype.$dayjs = dayjs

import auth from './util/auth'
Vue.use(auth)

import cookies from 'vue-cookies'
Vue.use(cookies)

import VueMeta from 'vue-meta'
Vue.use(VueMeta)

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import hotkeys from 'hotkeys-js'
Vue.prototype.$hotkeys = hotkeys

import { Message } from 'element-ui'

// 全局组件自动注册
import './components/autoRegister'

// 自动加载 svg 图标
const req = require.context('./assets/icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

import './assets/styles/reset.scss'
import './assets/styles/common.scss'

import './mock'

Vue.config.productionTip = false
Vue.prototype.$message = Message

Vue.prototype.$eventBus = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
