/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-12 15:22:26
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-13 23:05:02
 */
// import Layout from '@/layout'
// import EmptyLayout from '@/layout/empty'

export default {
  path: '/user-feedback',
  component: () => import('@/views/user-feedback/index'),
  name: 'user-feedback',
  // redirect: '/certification-audit/test',
  meta: {
    title: '用户意见反馈',
    icon: 'user-feedback'
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
