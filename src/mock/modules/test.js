/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-14 13:25:58
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-14 13:59:19
 */

module.exports = [{
  url: 'test/getStatisticsData',
  type: 'post',
  result: () => {
    return {
      error: '',
      status: 1,
      data: {
        register: 100,
        orderSuccess: 100,
        depositRefund: 1000,
        revenue: 10000
      }
    }
  }
}]

