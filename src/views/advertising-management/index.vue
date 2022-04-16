<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-13 22:44:07
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-16 15:19:53
-->

<template>
  <div class="bg-fff" style="width: 100%; height: 100%;">
    <div class="box flex p-10">
      <el-upload
        class="upload-demo"
        action="/mock/test/getPartTimeJobData"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        list-type="picture"
      >
        <el-button type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: [
        {name: '广告图片1', url: 'https://cdn.uviewui.com/uview/swiper/swiper1.png'},
        {name: '广告图片2', url: 'https://cdn.uviewui.com/uview/swiper/swiper2.png'},
        {name: '广告图片3', url: 'https://cdn.uviewui.com/uview/swiper/swiper3.png'}
      ]
    }
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(fileList)
    },
    handlePreview(file, fileList) {
      console.log(file, fileList)
    }
  }
}
</script>
<style lang="scss" scoped>
.box {
  width: 100%;
  justify-content: center;
  overflow: auto;
  .upload-demo {
    width: 70%;
  }
}
::v-deep .el-upload-list--picture .el-upload-list__item-thumbnail {
  width: auto;
}
</style>
