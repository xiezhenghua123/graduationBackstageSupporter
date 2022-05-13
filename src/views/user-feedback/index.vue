<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-13 22:44:14
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-12 19:47:57
-->

<template>
  <div class="bg-fff">
    <div class="p-10">
      <el-table :data="data" :header-cell-style="headerStyle" border>
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="user_name" label="姓名(企业)" />
        <el-table-column prop="content" label="反馈内容" />
        <el-table-column prop="created_at" label="反馈时间" />
        <el-table-column label="处理反馈">
          <template #default="scope">
            <el-button
              size="small"
              :disabled="scope.row.status == '1'"
              :type="scope.row.status == '1' ? 'success' : 'primary'"
              @click="handle(scope.row)"
            >
              {{ scope.row.status == '1' ? '已处理' : '待处理' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="mt-10 mb-10 flex" style="justify-content: right;">
        <el-pagination
          background
          layout="total,prev, pager, next"
          :page-size.sync="limit"
          :current-page.sync="page"
          :total="total"
          @current-change="getData"
          @prev-click="getData"
          @next-click="getData"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { getTipList, handle } from '@/api/tip.js'
export default {
  data() {
    return {
      headerStyle: { 'background-color': 'rgba(0,0,0,0.05)' },
      data: [],
      total: 0,
      limit: 10,
      page: 1
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    handle(item) {
      handle(item.id, { ...item, status: '1' }).then(() => {
        this.$message({
          message: '处理成功',
          type: 'success'
        })
        this.getData()
      })
    },
    timeFormat(time) {
      return time.replace(/T/g, ' ').replace(/\.[\d]{6}Z/g, '')
    },
    getData() {
      getTipList(this.page).then(data => {
        this.data = data.tipList.map(item => {
          return { ...item, created_at: this.timeFormat(item.created_at) }
        })
        this.total = data.total
        this.limit = data.limit
      })
    }
  }
}
</script>
