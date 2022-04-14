/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-12 15:22:26
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-13 23:04:36
 */
// import Layout from '@/layout'
// import EmptyLayout from '@/layout/empty'

export default {
  path: '/advertising-management',
  component: () => import('@/views/advertising-management/index'),
  name: 'advertising-management',
  // redirect: '/certification-audit/test',
  meta: {
    title: '广告管理',
    icon: 'advertising-management'
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
