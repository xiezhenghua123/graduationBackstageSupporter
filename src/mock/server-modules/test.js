/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-14 12:51:41
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-14 13:49:29
 */
const Mock = require('mockjs')

export default {
  'POST /test/getStatisticsData': (req, res) => {
    return res.json(Mock.mock({
      error: '',
      status: 1,
      data: {
        register: 100,
        orderSuccess: 100,
        depositRefund: 1000,
        revenue: 10000
      }
    }))
  }
}
