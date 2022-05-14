/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-30 16:32:11
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-14 19:14:18
 */
import api from './index'

export const uploadBanner = data => {
  return api().post('banner/upload', data)
}

export const getBanList = page => {
  return api().get(`banner/list/${page}`)
}

export const deleteBanner = id => {
  return api().delete(`banner/${id}`)
}
