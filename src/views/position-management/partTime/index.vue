<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-15 22:43:55
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-16 11:01:02
-->
<template>
  <div class="bg-fff">
    <div class="p-10">
      <el-table :data="data">
        <el-table-column label="职位ID" prop="id" />
        <el-table-column label="雇主" prop="employer" />
        <el-table-column label="标题" prop="job" />
        <el-table-column label="薪酬" prop="payMent" />
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
import { getPartTimeJobData, getJobDetail } from '@/api/commonApi'
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
          name: '雇主',
          value: this.detail.employer
        },
        {
          name: '标题',
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
          name: '薪酬',
          value: this.detail.payMent
        },
        {
          name: '开始时间',
          value: this.detail.start
        },
        {
          name: '结束时间',
          value: this.detail.end
        },
        {
          name: '工作内容',
          value: this.detail.details
        },
        {
          name: '职位状态',
          value: this.detail.status
        }

      ]
    }
  },
  mounted() {
    getPartTimeJobData().then(data => {
      this.data = data.data
    })
  },
  methods: {
    removeJob(id) {
      console.log(id)
    },
    clickToJobDetails(id) {
      getJobDetail({id: id, type: 'partTime'}).then(data => {
        this.dialogTableVisible = true
        this.detail = data.data
      })
    }
  }

}
</script>
