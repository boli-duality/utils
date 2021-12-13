#  uni.createSelectorQuery() 封装

```javascript
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
 * @param {Object/String} that 传入组件实例对象，或在this调用时直接传入选择器字符串也可不传
 */
```

