/**
 * vant版的加载列表类：具有首次加载，下拉刷新，上拉加载功能，配合 List 组件与 PullRefresh 组件使用
 * 因为是以公司后端接口为模板来设计的，所以通用性并不高，属于自用性质
 * @author boli
 */
class LoadList {
  /**
   * 初始化LoadList类
   * @param {Array} list 传入列表，要求是个数组，以实现多列表模式
   * @param {Function} handle 传入一个Promise封装的请求方法
   */
  constructor (list, handle) {
    this.list = list
    this.handle = handle
  }

  /**
   * 下拉刷新方法
   * @param {Number} index 传入index选择要加载的列表，默认为第一个
   */
  onRefresh (index = 0) {
    // 开启vant的下拉刷新提示
    this.list[index].refresh = true
    // 将列表加载状态重置为false
    this.list[index].finished = false
    // 按理说刷新应该做初始化处理，但是我并没有改变参数值，所以先暂时不做处理
    const params = {
      limit: this.list.limit,
      start: this.list.start
    }
    this.handle(params).then(res => {
      this.list[index].refresh = false
      this.list[index].total = res.total
      this.list[index].list = res.rows
    })
  }

  /**
   * 加载列表方法
   * @param {Number} index 传入index选择要加载的列表，默认为第一个
   */
  onLoad (index = 0) {
    // 防抖处理，如果加载完成或者正在加载就不再加载
    if (this.list[index].finished || !this.list[index].loadmore) return
    // 开启vant列表的加载更多
    this.list[index].loadmore = true
    const params = {
      limit: this.list[index].limit,
      start: this.list[index].list.length
    }
    this.handle(params).then(res => {
      // 关闭vant列表的加载更多
      this.list[index].loadmore = false
      this.list[index].total = res.total
      this.list[index].list.push(...res.rows)
      // 如果数据的总数小于等于列表的长度就将完成状态改为true
      if (this.list[index].total <= this.list[index].list.length) {
        this.list[index].finished = true
      }
    })
  }
}

export default LoadList
