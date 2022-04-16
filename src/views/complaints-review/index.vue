<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-13 22:44:09
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-16 15:26:54
-->

<template>
  <div class="bg-fff">
    <div class="p-10">
      <el-table :data="data">
        <el-table-column prop="id" label="编号" />
        <el-table-column prop="complainant" label="投诉人">
          <template slot-scope="scope">
            {{ scope.row.complainant.name }}
          </template>
        </el-table-column>
        <el-table-column label="被投诉人">
          <template slot-scope="scope">
            {{ scope.row.beComplainant.name }}
          </template>
        </el-table-column>
        <el-table-column prop="content" label="涉及岗位(工作标题)" width="150" />
        <el-table-column prop="reason" label="投诉原因" />
        <el-table-column prop="file" label="附件" />
        <el-table-column prop="time" label="投诉时间" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="flex">
              <el-button type="success" size="mini" @click="handle(scope.row.id,'pass')">通过</el-button>
              <el-button type="danger" size="mini" @click="handle(scope.row.id,'reject')">拒绝</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog title="选择惩罚措施" :visible.sync="dialogReasonVisible">
        <el-form ref="passForm" inline :model="measures" :rules="passRules" label-width="auto">
          <el-form-item prop="isCash">
            <el-checkbox v-model="measures.isCash">扣除押金</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="measures.isPayMent">扣除薪酬</el-checkbox>
          </el-form-item>
          <el-form-item prop="points" label="扣除信用分(满分100分)：" class="ml-10">
            <el-input v-model="measures.points" />
          </el-form-item>
        </el-form>
        <div class="flex">
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="dialogReasonVisible = false">取消</el-button>
        </div>
      </el-dialog>
      <el-dialog title="选择拒绝理由" :visible.sync="dialogRejectVisible">
        <el-form ref="rejectForm" :model="rejectReason" :rules="rejectRules" label-width="auto">
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
export default {
  data() {
    const validatePoint = (rule, value, callback) => {
      if (typeof value !== 'number') {
        callback(new Error('只能为数字'))
      } if (value < 0 || value > 100) {
        callback(new Error('范围为0-100'))
      }
      callback()
    }
    return {
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
        isCash: false,
        isPayMent: false,
        points: 0
      },
      data: [
        {
          id: '01',
          complainant: {
            id: '00',
            name: '张三'
          },
          beComplainant: {
            id: '02',
            name: '李四'
          },
          content: '琴湖拿快递到南苑',
          reason: 'xxxxxxx',
          file: '文件',
          time: '2022-2-14-16:00'
        },
        {
          id: '01',
          complainant: {
            id: '00',
            name: '张三'
          },
          beComplainant: {
            id: '02',
            name: '李四'
          },
          content: '琴湖拿快递到南苑',
          reason: 'xxxxxxx',
          file: '文件',
          time: '2022-2-14-16:00'
        },
        {
          id: '01',
          complainant: {
            id: '00',
            name: '张三'
          },
          beComplainant: {
            id: '02',
            name: '李四'
          },
          content: '琴湖拿快递到南苑',
          reason: 'xxxxxxx',
          file: '文件',
          time: '2022-2-14-16:00'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      if (this.dialogStatus === 'pass') {
        this.$refs.passForm.validate(valid => {
          if (valid) {
            console.log('成功')
            this.dialogReasonVisible = false
          }
        })
      } else {
        this.$refs.rejectForm.validate(valid => {
          if (valid) {
            console.log('成功')
            this.dialogRejectVisible = false
          }
        })
      }

    },
    handle(id, type) {
      if (type === 'pass') {
        this.dialogReasonVisible = true
      } else {
        this.dialogRejectVisible = true
      }
      this.dialogStatus = type
      console.log(id)
    }

  }

}
</script>
