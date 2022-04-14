/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-13 13:05:29
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-13 23:04:54
*/

// import Layout from '@/layout'
// import EmptyLayout from '@/layout/empty'

export default {
  path: '/data-statistics',
  // component: Layout,
  component: () => import('@/views/data-statistics/index'),
  name: 'data-statistics',
  meta: {
    title: '数据统计',
    icon: 'data-statistics'
  }
  // children: [
  //   {
  //     path: '/certification-audit/index',
  //     component: import('@/views/data-statistics/index.vue'),
  //     meta: {
  //       title: '测试'
  //     }
  //   }
  // ]
}
