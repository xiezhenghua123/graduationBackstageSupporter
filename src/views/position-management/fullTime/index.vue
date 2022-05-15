/* eslint-disable space-before-function-paren */
<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-15 22:43:55
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-15 20:22:49
-->
<template>
  <div class="bg-fff height-100">
    <div class="p-10">
      <el-table :data="data" :header-cell-style="headerStyle" border>
        <el-table-column label="职位ID" prop="id" />
        <el-table-column label="企业" prop="employer" />
        <el-table-column label="标题" prop="content" />
        <el-table-column label="薪酬" prop="salary">
          <template #default="scope">
            {{ salary(scope.row.salary) }}
          </template>
        </el-table-column>
        <el-table-column label="应聘者">
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              @click="getApplyPerson(scope.row.id)"
            >
              查看
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            {{ scope.row.status == 2 ? '进行中' : '已下架' }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="danger"
              size="mini"
              :disabled="scope.row.status == 0"
              @click="removeJob(scope.row)"
            >
              {{ scope.row.status == 0 ? '已下架' : '下架' }}
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
          @current-change="getList"
          @prev-click="getList"
          @next-click="getList"
        />
      </div>
    </div>
    <el-dialog title="应聘者查看" :visible.sync="dialogTableVisible">
      <el-table :data="applyPerson" border :header-cell-style="headerStyle">
        <el-table-column prop="worker_name" label="名字" />
        <el-table-column label="应聘状态">
          <template #default="scope">
            <div>{{ getStatus(scope.row.application_order_status) }}</div>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
// delJob, getApplyPerson
import { getJobList, getApplyPerson, delJob } from '@/api/jobManage'
export default {
  data() {
    return {
      headerStyle: { 'background-color': 'rgba(0,0,0,0.05)' },
      data: [],
      applyPerson: [],
      page: 1,
      limit: 10,
      total: 0,
      dialogTableVisible: false,

      filter: {
        salary: '',
        education: ''
      }
    }
  },
  computed: {},
  mounted() {
    this.getList()
  },
  methods: {
    salary(salary) {
      return `${JSON.parse(salary).min}k-${JSON.parse(salary).max}k`
    },
    getStatus(status) {
      switch (status) {
        case '0':
          return '进行中'
        case '1':
          return '已完成'
        case '2':
          return '待企业录取'
        case '3':
          return '企业已拒绝'
        case '4':
          return '已取消应聘'
      }
    },
    removeJob(item) {
      delJob(item.id, { ...item, status: 0 }).then(() => {
        this.$message({
          message: '下架成功',
          type: 'success'
        })
        this.getList()
      })
    },
    getApplyPerson(id) {
      getApplyPerson(id).then(data => {
        this.applyPerson = data
        this.dialogTableVisible = true
      })
    },
    getList() {
      getJobList(this.page, {
        ...this.filter,
        workerId: 'n',
        type: 'fullTime'
      }).then(data => {
        this.data = data.workOrderList.map(item => {
          console.log(item.salary)
          return {
            ...item,
            employer: item.company_name
          }
        })
        this.total = data.total
        this.limit = data.limit
      })
    }
    // clickToJobDetails(id) {
    //   // getJobDetail({ id: id, type: 'partTime' }).then(data => {
    //   //   this.dialogTableVisible = true
    //   //   this.detail = data.data
    //   // })
    // }
  }
}
</script>
