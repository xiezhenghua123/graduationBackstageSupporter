/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-05-11 14:46:16
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-11 18:10:05
 */
import api from './index'

export const getTipList = page => {
  return api().get(`tip/list/${page}`)
}

export const handle = (id, data) => {
  return api().put(`tip/${id}`, data)
}
