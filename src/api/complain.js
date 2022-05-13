/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-05-13 13:38:27
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-13 14:11:35
 */
import api from './index'

export const getList = page => {
  return api().get(`appeal/list/${page}`)
}

export const upDate = (id, data) => {
  return api().put(`appeal/${id}`, data)
}
