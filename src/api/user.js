/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-27 18:38:13
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-15 17:32:53
 */
import api from './index'

// 获取人员信息
const userManageData = (type, page) => {
  return api().get(`user/list/${page}`, {
    params: {
      type: type
    }
  })
}

const conFirm = (id, data) => {
  return api().put(`${id}/update`, data)
}

const getStudentData = id => {
  return api().get(`worker/${id}`)
}

const getCompanyData = id => {
  return api().get(`company/${id}`)
}
const upDateScore = (id, data) => {
  return api().put(`${id}/updateScore`, data)
}
export { userManageData, conFirm, upDateScore, getStudentData, getCompanyData }
