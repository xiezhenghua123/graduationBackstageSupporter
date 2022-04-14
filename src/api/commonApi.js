/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-14 12:55:25
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-14 13:44:17
 */
import api from './index'

const getStatisticsData = () => {
  return new Promise((res, rej) => {
    api.post('/mock/test/getStatisticsData').then(data => {
      res(data)
    }).catch(() => {
      rej()
    })
  })
}

export {getStatisticsData}
