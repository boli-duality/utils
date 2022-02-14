// 函数执行时会开辟一个新的内存空间，所以可以做到返回不同的节流函数
function getThrottle() {
  let isDoThrottle = false
  return function (fnName, wait = 500, immediately = true) {
    if (typeof this[fnName] != 'function') return console.error('请传入一个函数名');
    if (isDoThrottle) return
    isDoThrottle = true
    immediately && this[fnName]()
    setTimeout(() => {
      !immediately && this[fnName]()
      isDoThrottle = false
    }, wait);
  }
}

export default getThrottle
