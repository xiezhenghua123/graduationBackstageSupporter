/*
 * @Descripttion:
 * @version:
 * @Author: ZhenghuaXie
 * @Date: 2022-04-15 13:52:02
 * @LastEditors: ZhenghuaXie
 * @LastEditTime: 2022-04-30 22:49:57
 */
import { Notification } from 'element-ui'

import _ from 'lodash'

export default {
  success(message, title, opt = {}) {
    return Notification.success({
      title: title || '成功',
      message: message,
      duration: _.isNumber(opt.duration) ? opt.duration : 3000,
      position: opt.position || 'top-right',
      dangerouslyUseHTMLString: !!opt.dangerouslyUseHTMLString,
      onClose: opt.onClose && _.isFunction(opt.onClose) ? opt.onClose : () => {}
    })
  },
  info(message, title, opt = {}) {
    return Notification.info({
      title: title || '提示',
      message: message,
      duration: _.isNumber(opt.duration) ? opt.duration : 3000,
      position: opt.position || 'top-right',
      dangerouslyUseHTMLString: !!opt.dangerouslyUseHTMLString,
      onClose: opt.onClose && _.isFunction(opt.onClose) ? opt.onClose : () => {}
    })
  },
  warning(message, title, opt = {}) {
    return Notification.warning({
      title: title || '警告',
      message: message,
      duration: _.isNumber(opt.duration) ? opt.duration : 3000,
      position: opt.position || 'top-right',
      dangerouslyUseHTMLString: !!opt.dangerouslyUseHTMLString,
      onClose: opt.onClose && _.isFunction(opt.onClose) ? opt.onClose : () => {}
    })
  },
  error(message, title, opt = {}) {
    return Notification.error({
      title: title || '错误',
      message: message,
      duration: _.isNumber(opt.duration) ? opt.duration : 3000,
      position: opt.position || 'top-right',
      dangerouslyUseHTMLString: !!opt.dangerouslyUseHTMLString,
      onClose: opt.onClose && _.isFunction(opt.onClose) ? opt.onClose : () => {}
    })
  }
}
