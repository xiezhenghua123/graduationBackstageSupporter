/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-13 13:05:29
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-13 23:04:52
*/

// import Layout from '@/layout'
// import EmptyLayout from '@/layout/empty'

export default {
  path: '/complaints-review',
  component: () =>  import('@/views/complaints-review/index'),
  name: 'complaints-review',
  // redirect: '/certification-audit/test',
  meta: {
    title: '投诉审核',
    icon: 'complaints-review'
  }
  // children: [
  //   {
  //     path: '/certification-audit/test',
  //     component: EmptyLayout,
  //     meta: {
  //       title: '测试'
  //     }
  //   }
  // ]
}
