/**
 * 对uniapp获取节点信息方法 uni.createSelectorQuery() 的二次封装
 * 使用方法：
 * 1.导入写法
 *    导入: import query from '@/untils/query.js'
 *    使用: query(this).select('selector').property
 * 2.this调用写法
 *    导入: import query from '@/untils/query.js'
 *    引用: 全局引用：Vue.prototype.$_query = query || 组件内引用：this.$_query = query
 *    使用: this.$_query(this).select('selector').property
 *          this.$_query().select('selector').property
 *          this.$_query('selector').property (推荐)
 * @param {Object/String} that 传入组件实例对象，或在this调用时直接传入选择器字符串
 */
function query (that) {
  if (this === undefined && (that === undefined || that === null)) {
    console.error(
      '请在组件中使用this调用此方法或传入当前组件实例对象this\n如果使用this调用该方法，可直接传入选择器字符串，省略select调用'
    )
    return
  }
  if (
    this !== undefined &&
    that !== undefined &&
    Object.prototype.toString.call(that) === '[object String]'
  ) {
    return uniQuery(this).select(that)
  }
  if (
    this !== undefined &&
    that !== undefined &&
    Object.prototype.toString.call(that) !== '[object Object]'
  ) {
    console.error(
      '参数错误，请传入当前组件实例对象this或直接传入选择器字符串或直接调用select方法'
    )
    return
  }
  if (
    this === undefined &&
    that !== undefined &&
    Object.prototype.toString.call(that) !== '[object Object]'
  ) {
    console.error(
      '请在组件中使用this调用此方法或传入当前组件实例对象this\n如果使用this调用该方法，可直接传入选择器字符串，省略select调用'
    )
    return
  }

  that = that ?? this

  function uniQuery (that) {
    const query = uni.createSelectorQuery().in(that)

    function select (selector) {
      let nodeInfo = {}
      query
        .select(selector)
        .boundingClientRect(data => {
          nodeInfo = data
        })
        .exec()
      // #ifdef MP
        setTimeout(() => {
          return nodeInfo
        }, 10);
      // #endif
      return nodeInfo
    }
    return {
      select
    }
  }
  return uniQuery(that)
}

export default query
