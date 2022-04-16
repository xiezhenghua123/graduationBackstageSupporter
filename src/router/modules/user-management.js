/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-15 15:36:29
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-15 15:42:31
 */
// import EmptyLayout from '@/layout/empty'
export default {
  path: '/user-management',
  name: 'user-management',
  component: () => import('@/views/user-management/index'),
  meta: {
    title: '用户管理',
    icon: 'user-management'
  }
  // children:[
  //   {
  //     path:'/student',
  //     name:'student',
  //     component:()=>import('@/views/user-management/student'),
  //     meta:{
  //       title:'学生用户管理'
  //     }
  //   }
  // ]
}
