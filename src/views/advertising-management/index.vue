<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-13 22:44:07
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-05-14 14:51:26
-->

<script>
import { imageUpload } from '@/api/commonApi'
import { uploadBanner, getBanList } from '@/api/banner'
export default {
  data() {
    return {
      headerStyle: { 'background-color': 'rgba(0,0,0,0.05)' },
      data: [],
      page: 1,
      total: 0,
      limit: 10,
      addData: {
        image: ''
      },
      rules: {
        image: {
          required: true,
          message: '请上传海报'
        }
      },
      dialogVisible: false
    }
  },
  computed: {
    fileList() {
      return this.addData.image ? [{ url: this.addData.image }] : []
    },
    pictureList() {
      return this.data.map(item => {
        return item.image
      })
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    getData() {
      getBanList(this.page).then(data => {
        this.data = data.bannerList
        this.total = data.total
        this.limit = data.limit
      })
    },
    httpRequest(options) {
      imageUpload(options.file).then(data => {
        this.addData.image = data
      })
    },
    timeFormat(time) {
      return time.replace(/T/g, ' ').replace(/\.[\d]{6}Z/g, '')
    },
    addBanner() {
      this.$refs.ref.validate(vaild => {
        if (vaild) {
          const data = {
            ...this.addData,
            manager_id: sessionStorage.getItem('id').toString(),
            manager_name: sessionStorage.getItem('account')
          }
          uploadBanner(data).then(() => {
            this.$message.success('上传成功！')
            this.getData()
            this.dialogVisible = false
          })
        }
      })
    }
  }
}
</script>

<template>
  <div class="bg-fff p-10 height-100">
    <el-button type="primary" class="mb-10" @click="dialogVisible = true">
      点击上传
    </el-button>
    <el-table :data="data" border :header-cell-style="headerStyle">
      <el-table-column prop="id" label="编号" width="80" />
      <el-table-column label="广告海报">
        <template #default="scope">
          <el-image
            style="width: 50px; height: 30px;"
            :src="scope.row.image"
            fit="cover"
            :preview-src-list="[scope.row.image]"
          />
        </template>
      </el-table-column>
      <el-table-column prop="manager_name" label="发布管理员" />
      <el-table-column label="发布时间" min-width="160">
        <template #default="scope">
          {{ timeFormat(scope.row.created_at) }}
        </template>
      </el-table-column>
    </el-table>

    <div class="mt-10 flex" style="justify-content: right;">
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
    <el-dialog
      :visible.sync="dialogVisible"
      title="添加广告"
      :close-on-click-modal="false"
      @close="dialogVisible = false"
    >
      <el-form ref="ref" :model="addData" label-width="auto" :rules="rules">
        <el-form-item label="海报" required prop="image">
          <el-upload
            class="upload-demo flex"
            :limit="1"
            action=""
            :http-request="httpRequest"
            :file-list="fileList"
            list-type="picture"
          >
            <div class="upload-icon mr-10">
              <i class="el-icon-plus" />
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addBanner">提交</el-button>
          <el-button type="danger" @click="dialogVisible = false">
            取消
          </el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<style lang="scss" scoped>
.upload-icon {
  width: 60px;
  border-radius: 5px;
  height: 60px;
  font-size: 22px;
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  justify-content: center;
}
:deep(.el-upload-list--picture .el-upload-list__item-thumbnail) {
  width: auto;
  z-index: -1;
}
</style>
