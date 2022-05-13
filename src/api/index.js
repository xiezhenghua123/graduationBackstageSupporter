/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-09 20:10:18
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-13 19:39:20
 */
import axios from 'axios'
// import Qs from 'qs'
import router from '@/router/index'
import store from '@/store/index'
// import { Message } from 'element-ui'
import NProgress from '@/util/progress/index.js'
import qs from 'qs'
import { toast } from '@/message/index'

const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

const baseConfig = {
  baseURL: process.env.VUE_APP_API_ROOT,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  paramsSerializer: params => qs.stringify(params, { indices: false }),
  timeout: 60000
}

const setInterceptors = instance => {
  instance.interceptors.request.use(requestInterceptors, error => {
    return Promise.reject(error)
  })

  instance.interceptors.response.use(responseInterceptors, error => {
    return Promise.reject(error)
  })
}

const requestInterceptors = config => {
  NProgress.start()
  if (store.state.user.token) {
    config.headers['Authorization'] = 'Bearer ' + store.state.user.token
  }

  return config
}

const responseInterceptors = response => {
  // 需要检查code的接口
  // const repx = /\/login/
  // if (repx.test(response.config.url)) {
  //   return response.data
  // }
  NProgress.done()
  if (response.data.data == '登录失效') {
    toast.error('登录失效,请重新登录')
    toLogin()
    Promise.reject(response.data)
  }
  if (response.data.code != 0) {
    // console.log(response.data.status)
    toast.error(response.data.status)
    return Promise.reject(response.data)

  }
  return response.data.data
}

const api = req => {
  // if (!req) {
  //   return new Error('请传req参数！')
  // }
  let options = { ...baseConfig }
  if (req) {
    options = { ...baseConfig, ...req }
  }
  // if (req.headers) {
  //   for (let item in req.headers) {
  //     options.headers[item] = req.headers[item]
  //   }
  // }
  const instance = axios.create(options)
  setInterceptors(instance)
  return instance
}
export default api
