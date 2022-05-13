/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-30 16:32:11
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-30 22:59:13
 */
import api from './index'

export const uploadBanner = data => {
  return api().post('banner/upload', data)
}

export const getBanList = page => {
  return api().get(`banner/list/${page}`)
}
