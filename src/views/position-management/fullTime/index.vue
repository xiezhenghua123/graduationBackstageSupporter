<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-15 22:43:55
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-16 11:05:31
-->
<template>
  <div class="bg-fff">
    <div class="p-10">
      <el-table :data="data">
        <el-table-column label="职位ID" prop="id" />
        <el-table-column label="招聘者" prop="employer" />
        <el-table-column label="招聘职位" prop="job" />
        <el-table-column label="薪酬范围" prop="payMent" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="clickToJobDetails(scope.row.id)">查看职位详情</el-button>
            <el-button type="danger" size="mini" @click="removeJob(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="职位详情" :visible.sync="dialogTableVisible">
      <el-table :data="jobDetail" :show-header="false" :cell-style="columnStyle" border>
        <el-table-column prop="name" />
        <el-table-column prop="value" />
      </el-table>
    </el-dialog>
  </div>
</template>
<script>
import { getFullTimeJobData, getJobDetail } from '@/api/commonApi'
export default {
  data() {
    return {
      data: [],
      detail: {},
      dialogTableVisible: false,
      columnStyle({  columnIndex }) {
        if (columnIndex == 1) {
          // 第三第四列的背景色就改变了2和3都是列数的下标
          return 'background:#f3f6fc;font-weight:bold;'
        } else {
          return 'background:#ffffff;'
        }
      }

    }
  },
  computed: {
    jobDetail() {
      return [
        {
          name: '招聘者',
          value: this.detail.employer
        },
        {
          name: '招聘职位',
          value: this.detail.content
        }, {
          name: '职位类型',
          value: this.detail.type
        }, {
          name: '工作地点',
          value: this.detail.position
        }, {
          name: '学历要求',
          value: this.detail.education
        }, {
          name: '薪酬范围',
          value: this.detail.payMent
        }, {
          name: '企业规模',
          value: this.detail.scale
        },
        {
          name: '岗位要求',
          value: this.detail.details
        },
        {
          name: '押金金额',
          value: this.detail.cash
        },
        {
          name: '押金退还',
          value: this.detail.isCash ? '是' : '否'
        },
        {
          name: '职位状态',
          value: this.detail.status
        }

      ]
    }
  },
  mounted() {
    getFullTimeJobData().then(data => {
      this.data = data.data
    })
  },
  methods: {
    removeJob(id) {
      console.log(id)
    },
    clickToJobDetails(id) {
      getJobDetail({id: id, type: 'fullTime'}).then(data => {
        this.dialogTableVisible = true
        this.detail = data.data
      })
    }
  }

}
</script>
