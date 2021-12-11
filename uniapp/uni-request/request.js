/**
 * 对 uni-request 的Promise封装
 * @param {Object} options request方法的参数
 * property of options
 * @property {String} url 必填 开发者服务器接口地址
 * @property {Object/String/ArrayBuffer} data 请求的参数
 * @property {String} method = 'GET' 请求方式 [ GET | POST | PUT | DELETE]
 * @property {Function} success 收到开发者服务器成功返回的回调函数
 * @property {Function} fail 接口调用失败的回调函数
 * @property {Function} complete 接口调用结束的回调函数（调用成功、失败都会执行）
 * @property {Object} header = { "content-type": "application/json" } 设置请求的 header，header 中不能设置 Referer
 * @property {Number} timeout = 60000 超时时间，单位 ms
 * @property {String} dataType = 'json' 如果设为 json，会尝试对返回的数据做一次 JSON.parse
 * @property {String} responseType = 'text' 设置响应的数据类型。合法值：text、arraybuffer
 * @property {Boolean} sslVerify = 'true' 验证 ssl 证书
 * @property {Boolean} withCredentials = 'false' 跨域请求时是否携带凭证（cookies）
 * @property {Boolean} firstIpv4 = 'false' DNS解析时优先使用ipv4
 * @returns Promise
 */
function request (options) {
  return new Promise((resolve, reject) => {
    let { success, fail } = options
    uni.request({
      ...options,
      success (res) {
        res = res.data.data
        success && success(res)
        resolve(res)
      },
      fail (err) {
        fail && fail(err)
        reject(err)
      }
    })
  })
}

/**
 * GET请求
 * @param {String} url 接口地址
 * @param {Object} data 请求参数
 * @param {Object} options 配置参数
 * @param {Function} success 收到开发者服务器成功返回的回调函数
 * @param {Function} fail 接口调用失败的回调函数
 * @param {Function} complete 接口调用结束的回调函数（调用成功、失败都会执行）
 */
request.__proto__.get = function (url, data, options, success, fail, complete) {
  let method = 'GET'
  return request({
    ...options,
    url,
    data,
    success,
    fail,
    complete
  })
}

/**
 * POST请求
 * @param {String} url 接口地址
 * @param {Object} data 请求参数
 * @param {Object} options 配置参数
 * @param {Function} success 收到开发者服务器成功返回的回调函数
 * @param {Function} fail 接口调用失败的回调函数
 * @param {Function} complete 接口调用结束的回调函数（调用成功、失败都会执行）
 */
request.__proto__.post = function (
  url,
  data,
  options,
  success,
  fail,
  complete
) {
  let method = 'POST'
  return request({
    ...options,
    method,
    url,
    data,
    success,
    fail,
    complete
  })
}

export default request
