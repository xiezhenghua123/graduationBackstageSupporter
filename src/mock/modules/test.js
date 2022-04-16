/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-14 13:25:58
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-16 11:03:55
 */

module.exports = [
  {
    url: 'test/getStatisticsData',
    type: 'post',
    result: () => {
      return {
        error: '',
        status: 1,
        data: {
          register: 100,
          orderSuccess: 100,
          depositRefund: 1000,
          revenue: 10000
        }
      }
    }
  },
  {
    url: 'test/studentConfirm',
    type: 'post',
    result: options => {
      console.log(options)
      return {
        error: '',
        status: 1
      }
    }
  },
  {
    url: 'test/getFullTimeJobData',
    type: 'post',
    result: () => {

      return {
        error: '',
        status: 1,
        data: [
          {
            id: '02',
            employer: '阿里巴巴集团有限公司',
            job: '前端开发工程师',
            payMent: '15-20k'
          },
          {
            id: '01',
            employer: '阿里巴巴集团有限公司',
            job: '前端开发工程师',
            payMent: '15-20k'
          },
          {
            id: '03',
            employer: '阿里巴巴集团有限公司',
            job: '前端开发工程师',
            payMent: '15-20k'
          }
        ]
      }
    }
  },
  {
    url: 'test/getPartTimeJobData',
    type: 'post',
    result: () => {

      return {
        error: '',
        status: 1,
        data: [
          {
            id: '02',
            employer: '李四',
            job: '拿快递',
            payMent: '10元'
          },
          {
            id: '01',
            employer: '张三',
            job: '拿快递',
            payMent: '10元'
          },
          {
            id: '03',
            employer: '王二麻子',
            job: '拿快递',
            payMent: '10元'
          }
        ]
      }
    }
  },
  {
    url: 'test/getJobDetail',
    type: 'post',
    result: ({body}) => {
      let data = {}
      if (body.type == 'fullTime') {
        data = {
          content: '前端开发工程师',
          employer: '阿里巴巴（杭州）',
          type: '全职',
          details: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
          position: '杭州',
          education: '本科',
          payMent: '15k-20k',
          scale: '500-999人',
          isCash: false,
          cash: '30元',
          status: '招聘中'
        }
      } else {
        data = {content: '琴湖快递拿到北青',
          employer: '张三',
          type: '兼职',
          details: 'xxxxxxxxxxxxxxxxxxxxxxxxx',
          position: '湘潭大学',
          education: '不限',
          payMent: '10元',
          start: '2022年3月1日',
          end: '2022年3月1日',
          status: '招聘中' }
      }
      return {
        error: '',
        status: 1,
        data: data
      }
    }
  },
  {
    url: 'test/cancelCompanyConfirm',
    type: 'post',
    result: options => {
      console.log(options)
      return {
        error: '',
        status: 1
      }
    }
  },
  {
    url: 'test/cancelStudentConfirm',
    type: 'post',
    result: options => {
      console.log(options)
      return {
        error: '',
        status: 1
      }
    }
  },
  {
    url: 'test/companyConfirm',
    type: 'post',
    result: options => {
      console.log(options)
      return {
        error: '',
        status: 1
      }
    }
  },
  {
    url: 'test/userManageData',
    type: 'post',
    result: () => {
      return {
        error: '',
        status: 1,
        data: [
          {
            id: '001',
            username: '老用户',
            isStudent: false,
            isCompany: true
          },
          {
            id: '002',
            username: '黄大熊',
            isStudent: true,
            isCompany: true
          },
          {
            id: '003',
            username: '黄小熊',
            isStudent: true,
            isCompany: true
          }, {
            id: '004',
            username: '黄黑熊',
            isStudent: true,
            isCompany: true
          }
        ]
      }
    }
  },
  {
    url: 'test/getStudentAttestationData',
    type: 'post',
    result: () => {
      return {
        error: '',
        status: 1,
        data: [
          {
            id: '01',
            name: '张三',
            number: 201805190115,
            college: '公共管理学院',
            major: '信息管理与信息系统',
            tel: '17373250452',
            status: false
          },
          {
            id: '02',
            name: '李四',
            number: 201805190116,
            college: '公共管理学院',
            major: '信息管理与信息系统',
            tel: '17373250452',
            status: false
          },
          {
            id: '03',
            name: '黄汉雄',
            number: 201805190110,
            college: '公共管理学院',
            major: '信息管理与信息系统',
            tel: '17373250452',
            status: true
          },
          {
            id: '04',
            name: '潘鹏',
            number: 201805190119,
            college: '公共管理学院',
            major: '信息管理与信息系统',
            tel: '17373250452',
            status: false
          }
        ]
      }

    }
  },
  {
    url: 'test/getCompanyAttestationData',
    type: 'post',
    result: () => {
      return {
        error: '',
        status: 1,
        data: [
          {
            id: '01',
            name: '阿里巴巴集团有限公司',
            number: '53100000717831565A',
            legalPerson: '马云',
            industry: '计算机软件',
            tel: '17373250452',
            status: true
          },
          {
            id: '02',
            name: '阿里巴巴集团有限公司',
            number: '53100000717831565A',
            legalPerson: '马云',
            industry: '计算机软件',
            tel: '17373250452',
            status: false
          },
          {
            id: '03',
            name: '阿里巴巴集团有限公司',
            number: '53100000717831565A',
            legalPerson: '马云',
            industry: '计算机软件',
            tel: '17373250452',
            status: false
          },
          {
            id: '04',
            name: '阿里巴巴集团有限公司',
            number: '53100000717831565A',
            legalPerson: '马云',
            industry: '计算机软件',
            tel: '17373250452',
            status: false
          }
        ]
      }

    }
  }
]

