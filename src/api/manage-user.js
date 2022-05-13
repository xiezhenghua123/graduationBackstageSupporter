/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-05-12 20:14:44
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-13 11:40:36
 */
import api from './index'

export const getManagerList = () => {
  return api().get('manager/list')
}

export const addManager = data => {
  return api().post('manager/add', data)
}

export const removeManager = id => {
  return api().delete(`manager/${id}`)
}
