/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-05-11 00:05:36
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-11 00:09:40
 */
import api from './index'

export const getJobList = (page, data) => {
  return api().post(`workOrder/list/${page}`, data)
}

export const getApplyPerson = wid => {
  return api().get(`applicationOrder/workOrder/${wid}`)
}

export const delJob = (id, data) => {
  return api().put(`workOrder/${id}`, data)
}
