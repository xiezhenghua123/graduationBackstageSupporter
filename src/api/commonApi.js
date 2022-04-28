/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-14 12:55:25
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-27 20:21:22
 */
import api from './index'

const getStudentAttestationData = () => {
  return new Promise((res, rej) => {
    api
      .post('/mock/test/getStudentAttestationData')
      .then(data => {
        res(data)
      })
      .catch(e => {
        rej(e)
      })
  })
}

const getCompanyAttestationData = () => {
  return new Promise((res, rej) => {
    api
      .post('/mock/test/getCompanyAttestationData')
      .then(data => {
        res(data)
      })
      .catch(e => {
        rej(e)
      })
  })
}
const studentConfirm = data => {
  return new Promise((res, rej) => {
    api
      .post('/mock/test/studentConfirm', data)
      .then(data => {
        res(data)
      })
      .catch(e => {
        rej(e)
      })
  })
}
const companyConfirm = data => {
  return new Promise((res, rej) => {
    api
      .post('/mock/test/companyConfirm', data)
      .then(data => {
        res(data)
      })
      .catch(e => {
        rej(e)
      })
  })
}

const userManageData = () => {
  return new Promise((res, rej) => {
    api
      .post('/mock/test/userManageData')
      .then(data => {
        res(data)
      })
      .catch(e => {
        rej(e)
      })
  })
}

const cancelStudentConfirm = data => {
  return new Promise((res, rej) => {
    api
      .post('/mock/test/cancelStudentConfirm', data)
      .then(data => {
        res(data)
      })
      .catch(e => {
        rej(e)
      })
  })
}

const cancelCompanyConfirm = data => {
  return new Promise((res, rej) => {
    api
      .post('/mock/test/cancelCompanyConfirm', data)
      .then(data => {
        res(data)
      })
      .catch(e => {
        rej(e)
      })
  })
}

const getPartTimeJobData = () => {
  return new Promise((res, rej) => {
    api
      .post('/mock/test/getPartTimeJobData')
      .then(data => {
        res(data)
      })
      .catch(e => {
        rej(e)
      })
  })
}

const getFullTimeJobData = () => {
  return new Promise((res, rej) => {
    api
      .post('/mock/test/getFullTimeJobData')
      .then(data => {
        res(data)
      })
      .catch(e => {
        rej(e)
      })
  })
}

const getJobDetail = data => {
  return new Promise((res, rej) => {
    api
      .post('/mock/test/getJobDetail', data)
      .then(data => {
        res(data)
      })
      .catch(e => {
        rej(e)
      })
  })
}

export {
  // 下面是测试接口
  getStudentAttestationData,
  getCompanyAttestationData,
  studentConfirm,
  companyConfirm,
  userManageData,
  cancelCompanyConfirm,
  cancelStudentConfirm,
  getPartTimeJobData,
  getFullTimeJobData,
  getJobDetail
}
