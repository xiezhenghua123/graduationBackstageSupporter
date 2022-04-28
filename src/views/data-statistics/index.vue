<!--
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-13 22:23:31
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-14 15:10:42
-->
<template>
  <div class="flex m-10">
    <div class="box">
      <div class="title">注册用户</div>
      <div ref="register" class="register number">{{ data.register }}</div>
    </div>
    <div class="box">
      <div class="title">订单交易量</div>
      <div ref="orderSuccess" class="orderSuccess number">{{ data.orderSuccess }}</div>
    </div>
    <!-- <div class="box">
      <div class="title">退还押金数额(元)</div>
      <div ref="depositRefund" class="depositRefund number">{{ data.depositRefund }}</div>
    </div> -->
    <div class="box">
      <div class="title">营收数额(元)</div>
      <div ref="revenue" class="revenue number">{{ data.revenue }}</div>
    </div>
  </div>
</template>
<script>
import countUp from 'countup'
// import { getStatisticsData } from '@/api/commonApi.js'
export default {
  data() {
    return {
      data: {
        register: 100,
        orderSuccess: 10,
        revenue: 0
      }
    }
  },
  mounted() {
    // getStatisticsData().then(data => {
    //   this.data = data.data

    // })
    this.countUp()
  },
  methods: {
    countUp() {
      const options = {
        useEasing: true,  // 过渡动画效果，默认ture
        useGrouping: true,  // 千分位效果，例：1000->1,000。默认true
        separator: ',',   // 使用千分位时分割符号
        decimal: '.',   // 小数位分割符号
        prefix: '',    // 前置符号
        suffix: ''    // 后置符号，可汉字
      }
      // let arr = []
      for (let key in this.data) {
        const ele = new countUp(this.$refs[key], 0, this.data[key], (key === 'depositRefund' || key === 'revenue') ? 2 : 0, 2, options)
        ele.start()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.flex {
  display: flex;
  align-items: center;
  height: 100%;
  .box {
    display: flex;
    align-items: center;
    font-size: 28px;
    font-weight: bold;
    flex-direction: column;
    min-width: 230px;
    flex: 1;
    margin: 10px;
    background-color: #fff;
    height: 100%;
    justify-content: center;
    border-radius: 10px;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
    .title {
      margin-bottom: 40px;
    }
    .number {
      font-size: 32px;
    }
    .register {
      color: rgb(21, 202, 247);
    }
    .orderSuccess {
      color: rgb(26, 236, 156);
    }
    .depositRefund {
      color: rgb(196, 216, 13);
    }
    .revenue {
      color: rgb(122, 3, 3);
    }
  }
}
</style>
