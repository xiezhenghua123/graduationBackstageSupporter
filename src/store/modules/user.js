/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-09 20:10:18
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-13 20:49:35
 */
import api from '@/api'

const state = {
  account: sessionStorage.account || '',
  token: sessionStorage.token || '',
  id: sessionStorage.id || '',
  failure_time: sessionStorage.failure_time || '',
  permissions: []
}

const getters = {
  isLogin: state => {
    let retn = false
    if (state.token) {
      // let unix = Date.parse(new Date())
      // if (unix < state.failure_time * 1000) {
      //   retn = true
      // }
      retn = true
    }
    return retn
  }
}

const actions = {
  login({commit}, data) {
    return new Promise((resolve, reject) => {
      // 通过 mock 进行登录
      api({}).post('manager/login', data).then(res => {
        commit('setUserData', {account: res.name, password: res.password, token: res.api_token, id: res.id})
        commit('setPermissions', res.level == 0 ? ['super'] : [])
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout({commit}) {
    commit('removeUserData')
    commit('menu/invalidRoutes', null, {root: true})
  },
  // 获取我的权限
  getPermissions({state}) {
    return new Promise(resolve => {
      resolve(state.permissions)
      // // 通过 mock 获取权限
      // api.get('mock/member/permission', {
      //   params: {
      //     account: state.account
      //   }
      // }).then(res => {
      //   commit('setPermissions', res.data.permissions)
      //   resolve(res.data.permissions)
      // })
    })
  }
}

const mutations = {
  setUserData(state, data) {
    sessionStorage.setItem('account', data.account)
    sessionStorage.setItem('token', data.token)
    sessionStorage.setItem('id', data.id)
    state.account = data.account
    state.token = data.token
    state.id = data.id
    // state.failure_time = data.failure_time
  },
  removeUserData(state) {
    sessionStorage.removeItem('account')
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('failure_time')
    state.account = ''
    state.token = ''
    state.failure_time = ''
  },
  setPermissions(state, permissions) {
    state.permissions = permissions
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
