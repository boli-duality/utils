import request from '@/utils/request'

/**
 * 获取用户信息
 */
export function getMemberInfo () {
  return request({
    url: '/memberinfo',
    method: 'GET'
  })
}
