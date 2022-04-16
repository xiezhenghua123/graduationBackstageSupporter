/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-12 15:22:26
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-15 22:48:05
 */
// import Layout from '@/layout'
import EmptyLayout from '@/layout/empty'

export default {
  path: '/position-management',
  component: EmptyLayout,
  name: 'position-management',
  // redirect: '/certification-audit/test',
  meta: {
    title: '职位管理',
    icon: 'position-management'
  },
  children: [
    {
      path: '/position-management/fullTime',
      component: () => import('@/views/position-management/fullTime'),
      meta: {
        title: '全职管理',
        icon: 'fullTime'
      }
    },
    {
      path: '/position-management/partTime',
      component: () => import('@/views/position-management/partTime'),
      meta: {
        title: '兼职管理',
        icon: 'partTime'
      }
    }
  ]
}
