<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-13 22:44:09
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-13 14:46:41
-->

<template>
  <div class="bg-fff">
    <div class="p-10">
      <el-table :data="data" :header-cell-style="headerStyle" border>
        <el-table-column prop="id" label="编号" width="60" />
        <el-table-column prop="fromName" label="投诉人" width="80" />
        <el-table-column label="被投诉人" prop="toName" width="80" />
        <el-table-column prop="work" label="涉及岗位(工作标题)" width="150" />
        <el-table-column prop="content" label="投诉原因" min-width="150" />
        <el-table-column prop="file" label="附件" width="150">
          <template #default="scope">
            <div
              v-if="scope.row.img.length"
              class="flex"
              style="flex-wrap: wrap;"
            >
              <el-image
                v-for="(item, index) in scope.row.img"
                :key="index"
                class="ml-10"
                style="width: 50px; height: 30px;"
                :src="item"
                fit="cover"
                :preview-src-list="scope.row.img"
              />
            </div>
            <div v-else>无</div>
          </template>
        </el-table-column>
        <el-table-column prop="time" label="投诉时间" width="160" />
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <div v-if="scope.row.status == '3'">已通过</div>
            <div v-else-if="scope.row.status == '4'">已拒绝</div>
            <div v-else-if="scope.row.status == '5'">用户已撤销</div>
            <div v-else class="flex">
              <el-button
                type="success"
                size="mini"
                @click="handle(scope.row, 'pass')"
              >
                通过
              </el-button>
              <el-button
                type="danger"
                size="mini"
                @click="handle(scope.row, 'reject')"
              >
                拒绝
              </el-button>
            </div>
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
      <el-dialog title="选择惩罚措施" :visible.sync="dialogReasonVisible">
        <el-form
          ref="passForm"
          inline
          :model="measures"
          :rules="passRules"
          label-width="auto"
        >
          <el-form-item
            prop="points"
            label="扣除信用分(满分100分)："
            class="ml-10"
          >
            <el-input v-model="measures.points" />
          </el-form-item>
        </el-form>
        <div class="flex">
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="dialogReasonVisible = false">取消</el-button>
        </div>
      </el-dialog>
      <el-dialog title="选择拒绝理由" :visible.sync="dialogRejectVisible">
        <el-form
          ref="rejectForm"
          :model="rejectReason"
          :rules="rejectRules"
          label-width="auto"
        >
          <el-form-item required prop="content" label="拒绝理由：">
            <el-input v-model="rejectReason.content" />
          </el-form-item>
        </el-form>
        <div class="flex">
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="dialogRejectVisible = false">取消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import { getList, upDate } from '@/api/complain.js'
// import { createNotice } from '@/api/notice'
export default {
  data() {
    const validatePoint = (rule, value, callback) => {
      if (typeof value !== 'number') {
        callback(new Error('只能为数字'))
      }
      if (value < 0 || value > 100) {
        callback(new Error('范围为0-100'))
      }
      callback()
    }
    return {
      headerStyle: { 'background-color': 'rgba(0,0,0,0.05)' },
      dialogReasonVisible: false,
      dialogRejectVisible: false,
      rejectReason: {
        content: ''
      },
      rejectRules: {
        content: {
          require: true,
          message: '请填写理由',
          trigger: ['blur', 'change']
        }
      },
      dialogStatus: '',
      passRules: {
        points: {
          validator: validatePoint,
          transform(value) {
            return Number(value)
          },
          trigger: ['blur', 'change']
        }
      },
      measures: {
        points: 0
      },
      data: [],
      page: 1,
      total: 0,
      limit: 10,
      dialogData: {}
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      getList(this.page).then(data => {
        this.data = data.AppealList.map(item => {
          return {
            ...item,
            img: JSON.parse(item.img),
            time: item.created_at.replace(/T/g, ' ').replace(/\.[\d]{6}Z/g, '')
          }
        })
        this.total = data.total
        this.limit = data.limit
      })
    },
    onSubmit() {
      if (this.dialogStatus === 'pass') {
        this.$refs.passForm.validate(valid => {
          if (valid) {
            upDate(this.dialogData.id, {
              ...this.dialogData.id,
              status: '3'
            }).then(() => {
              this.$message.success('提交成功！')
            })
            this.dialogReasonVisible = false
          }
        })
      } else {
        this.$refs.rejectForm.validate(valid => {
          if (valid) {
            upDate(this.dialogData.id, {
              ...this.dialogData.id,
              status: '4'
            }).then(() => {
              this.$message.success('提交成功！')
            })
            this.dialogRejectVisible = false
          }
        })
      }
    },
    handle(data, type) {
      if (type === 'pass') {
        this.dialogReasonVisible = true
      } else {
        this.dialogRejectVisible = true
      }
      this.dialogStatus = type
      this.dialogData = { ...data }
    }
  }
}
</script>
