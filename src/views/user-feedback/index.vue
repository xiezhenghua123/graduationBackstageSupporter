<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-13 22:44:14
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-16 15:30:38
-->

<template>
  <div class="bg-fff">
    <div class="p-10">
      <el-table :data="data">
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="name" label="姓名(企业)" />
        <el-table-column prop="content" label="反馈内容" />
        <el-table-column prop="time" label="反馈时间" />
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          id: '001',
          name: '郭啸天',
          content: '系统体验太差',
          time: '2022-2-14-16:00'
        },
        {
          id: '001',
          name: '郭啸天',
          content: '系统体验太差',
          time: '2022-2-14-16:00'
        },
        {
          id: '001',
          name: '郭啸天',
          content: '系统体验太差',
          time: '2022-2-14-16:00'
        }
      ]
    }
  }
}
</script>

