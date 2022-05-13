/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-29 16:46:52
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-29 16:57:49
 */
import api from './index'

const createNotice = data => {
  return api().post('notice/add', data)
}

export { createNotice }
