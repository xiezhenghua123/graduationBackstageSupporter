/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-12 15:22:26
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-13 23:04:58
 */
// import Layout from '@/layout'
// import EmptyLayout from '@/layout/empty'

export default {
  path: '/position-management',
  component: () =>  import('@/views/position-management/index'),
  name: 'position-management',
  // redirect: '/certification-audit/test',
  meta: {
    title: '职位管理',
    icon: 'position-management'
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
