uni.addInterceptor('request', {
  // 请求拦截
  invoke (args) {
    // console.log('interceptor-invoke',args)
    // request 触发前拼接 url
    // args.url = 'https://www.example.com/'+args.url
  },
  // 响应拦截
  success (args) {
    // console.log('interceptor-success',args)
    // 请求成功后，修改code值为1
    // args.data.code = 1
  },
  fail (err) {
    // console.log('interceptor-fail',err)
  },
  complete (res) {
    // console.log('interceptor-complete',res)
  }
})
