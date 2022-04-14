/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-12 15:22:26
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-13 23:04:49
 */
// import Layout from '@/layout'
// import EmptyLayout from '@/layout/empty'

export default {
  path: '/certification-audit',
  component: () => import('@/views/certification-audit/index'),
  name: 'certification-audit',
  // redirect: '/certification-audit/test',
  meta: {
    title: '用户认证审核',
    icon: 'certification-audit'
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
