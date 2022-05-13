/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-12 15:22:26
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-13 20:42:38
 */
// import Layout from '@/layout'
import EmptyLayout from '@/layout/empty'

export default {
  path: '/certification-audit',
  component: EmptyLayout,
  name: 'certification-audit',
  redirect: '/certification-audit/student',
  meta: {
    title: '用户管理',
    icon: 'user-management'
  },
  children: [
    {
      path: '/certification-audit/student',
      component: () => import('@/views/certification-audit/student/index'),
      meta: {
        title: '学生管理',
        icon: 'student'
      }
    },
    {
      path: '/certification-audit/company',
      component: () => import('@/views/certification-audit/company'),
      meta: {
        title: '企业管理',
        icon: 'company'
      }
    },
    {
      path: '/certification-audit/administrator',
      component: () => import('@/views/certification-audit/administrator'),
      meta: {
        title: '管理员管理',
        icon: 'administrator',
        auth: ['super']
      }
    }
  ]
}
