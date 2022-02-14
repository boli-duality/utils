/**
 * vue版的节流函数初始化函数
 * @property {Number} defaultDelay = [500] 默认延迟时间
 * @property {BooleanF} defaultImmediately = [true] 默认延迟时间
 * @returns {Function} vue版的节流函数
 */
 function initThrottle({ delay = 500, immediately = true } = {}) {
  const defaultDelay = delay
  const defaultImmediately = immediately
  const ID = Symbol('defaultID')
  const isDoThrottle = { [ID]: false }
  /**
   * vue版的节流函数
   * @param {String} fnName 函数名字符串
   * @param {Object} options 配置选项
   * @property {Array} params of options 执行节流的函数的参数
   * @property {Number} delay of options 延迟时间
   * @property {Boolean} immediately of options 是否立即执行
   * @property {String|Number} id of options 传入id启用不同的节流函数
   */
  return function throttle(fnName, { params, delay, immediately, id = ID } = {}) {
    if (typeof this[fnName] != 'function') return console.error('Not the name of a function');
    if (isDoThrottle[id]) return
    const isImmediately = immediately ?? defaultImmediately
    isDoThrottle[id] = true
    isImmediately && this[fnName].apply(this, params)
    setTimeout(() => {
      !isImmediately && this[fnName].apply(this, params)
      isDoThrottle[id] = false
    }, delay ?? defaultDelay);
  }
}

export default initThrottle