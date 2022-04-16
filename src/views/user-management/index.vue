<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-15 15:42:28
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-15 22:06:50
-->
<template>
  <div class="bg-fff">
    <div class="p-10">
      <el-table
        :data="data"
        style="width: 100%;"
      >
        <el-table-column
          prop="id"
          label="用户ID"
        />
        <el-table-column
          prop="username"
          label="用户名"
        />
        <el-table-column
          label="企业认证"
          width="180"
        >
          <template slot-scope="scope">
            <div v-if="scope.row.isCompany">
              已认证<el-button size="mini" class="ml-10" type="primary">认证信息</el-button>
            </div>
            <div v-else>未认证</div>
          </template>
        </el-table-column>
        <el-table-column
          label="学生认证"
          width="180"
        >
          <template slot-scope="scope">
            <div v-if="scope.row.isStudent">
              已认证<el-button size="mini" class="ml-10" type="primary">认证信息</el-button>
            </div>
            <div v-else>未认证</div>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          width="250"
        >
          <template slot-scope="scope">
            <div class="flex">
              <el-button type="danger" size="small" @click="cancelStudent(scope.row.id)">取消学生认证</el-button>
              <el-button type="danger" size="small" @click="cancelCompany(scope.row.id)">取消企业认证</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import {userManageData} from '@/api/commonApi'
export default {
  data() {
    return {
      data: []
    }
  },
  mounted() {
    userManageData().then(data => {
      this.data = data.data
    })
  }
}
</script>
