<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-14 15:48:23
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-16 10:19:02
-->

<template>
  <div class="bg-fff">
    <div class="pl-10">
      <el-table
        :data="data"
        style="width: 100%;"
        highlight-current-row
      >
        <el-table-column
          prop="id"
          label="用户ID"
          width="80"
        />
        <el-table-column
          prop="name"
          label="姓名"
        />
        <el-table-column
          prop="number"
          label="学号"
          width="150"
        />
        <el-table-column
          prop="college"
          label="学院"
          width="150"
        />
        <el-table-column
          prop="major"
          label="专业"
          width="150"
        />
        <el-table-column
          prop="tel"
          label="联系电话"
          width="120"
        />
        <el-table-column

          label="认证状态"
        >
          <template slot-scope="scope">
            <div>{{ scope.row.status?'已认证':'未认证' }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="250">
          <template slot-scope="scope">
            <div v-if="!scope.row.status" class="flex">
              <el-button type="success" size="small" @click="studentConfirm(scope.row,'success')">通过认证</el-button>
              <el-button type="danger" size="small" @click="studentConfirm(scope.row.id,'failed')">认证失败</el-button>
            </div>
            <div v-else>
              <el-button type="danger" size="small" @click="cancelConfirm(scope.row)">取消认证</el-button>
              <el-button type="primary" size="small" @click="editConfirm(scope.row)">修改信息</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :close-on-click-modal="false" show-close title="编辑认证信息" :visible.sync="dialogTableVisible">
        <el-form ref="form" :rules="rules" :model="editData" label-width="auto">
          <el-form-item label="姓名:" required prop="name">
            <el-input v-model="editData.name" />
          </el-form-item>
          <el-form-item label="学号:" required prop="number">
            <el-input v-model.number="editData.number" />
          </el-form-item>
          <el-form-item label="学院:" required prop="college">
            <el-input v-model="editData.college" />
          </el-form-item>
          <el-form-item label="专业:" required prop="major">
            <el-input v-model="editData.major" />
          </el-form-item>
          <el-form-item label="联系电话:" required prop="tel">
            <el-input v-model="editData.tel" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button @click="dialogTableVisible=false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import {getStudentAttestationData, studentConfirm, cancelStudentConfirm} from '@/api/commonApi'
export default {
  data() {
    // 学号自定义规则
    const validatorNumber = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入学号'))
      }
      if (typeof value !== 'number') {
        callback(new Error('学号为数字'))
      }
      if ((String(value)).length !== 12) {
        callback(new Error('学号格式错误'))
      }
      callback()
    }
    return {
      data: [],
      editData: {},
      dialogTableVisible: false,
      rules: {
        tel: [
          {
            required: true,
            message: '请输入联系方式',
            trigger: ['blur', 'change']
          },
          {
            pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
            message: '手机号码格式错误',
            trigger: ['blur', 'change']
          }],
        name: [
          {
            required: true,
            message: '请输入姓名',
            trigger: ['blur', 'change']
          },
          {
            min: 2,
            message: '名字太短',
            trigger: ['blur', 'change']
          },
          {
            max: 8,
            message: '名字太长',
            trigger: ['blur', 'change']
          }
        ],
        number: {
          validator: validatorNumber,
          trigger: ['blur', 'change']
        },
        college: {
          type: 'string',
          required: true,
          message: '请正确填写学院',
          trigger: 'blur'
        },
        major: {
          type: 'string',
          required: true,
          message: '请正确填写专业',
          trigger: 'blur'
        }
      }
    }
  },
  mounted() {
    getStudentAttestationData().then(data => {
      this.data = data.data
    })
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.dialogTableVisible = false
          console.log('提交')
        }
      })
    },
    editConfirm(data) {
      this.dialogTableVisible = true
      this.editData = {...data}
    },
    cancelConfirm(scope, status) {
      cancelStudentConfirm({id: scope.id, status: status}).then(() => {
        scope.status = false
        this.$message({
          message: '修改成功',
          type: 'success'
        })
      })
    },
    studentConfirm(scope, status) {
      if (status === 'failed') {
        this.$prompt('请输入认证失败理由', '提示', {
          inputValidator: data => {
            if (!data) {
              return '请输入理由'
            }
          }
        }).then(({value}) => {
          studentConfirm({id: scope.id, status: status, value: value}).then(() => {
            scope.status = true
            this.$message({
              message: '提交成功',
              type: 'success'
            })
          })
        })
      } else {
        studentConfirm({id: scope.id, status: status }).then(() => {
          scope.status = true
          this.$message({
            message: '提交成功',
            type: 'success'
          })
        })
      }

    }
  }
}
</script>
<style lang="scss" scoped>

</style>
