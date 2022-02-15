/**
 * vue版的节流函数初始化函数
 * @property {Number} defaultDelay = [500] 默认延迟时间
 * @property {Boolean} defaultImmediately = [true] 默认延迟时间
 * @returns {Function} vue版的节流函数
 */
function initThrottle({ delay = 500, immediately = true } = {}) {
  const defaultDelay = delay
  const defaultImmediately = immediately
  const ID = Symbol('defaultID')
  const isDoThrottle = { [ID]: false }
  /**
   * vue版的节流函数
   * @param {Function} fn 需要节流的函数
   * @param {Object} options 配置选项
   * @property {Array} params of options 需要节流的函数的参数
   * @property {Number} delay of options 延迟时间
   * @property {Boolean} immediately of options 是否立即执行
   * @property {String|Number} id of options 传入id启用不同的节流函数
   */
  return function throttle(fn, { params, delay, immediately, id = ID } = {}) {
    if (typeof fn !== 'function') return console.error('[throttle warn]: TypeError: The First parameter is not a function')
    if (isDoThrottle[id]) return
    const isImmediately = immediately ?? defaultImmediately
    isDoThrottle[id] = true
    isImmediately && fn.apply(this, params)
    setTimeout(() => {
      !isImmediately && fn.apply(this, params)
      isDoThrottle[id] = false
    }, delay ?? defaultDelay);
  }
}

export default initThrottle
