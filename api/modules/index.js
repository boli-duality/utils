import request from '@/utils/request'

/**
 * 获取商品列表
 * @param {Number} limit 一页显示多少条内容
 * @param {Number} start 起始第几条
 */
export function getProductList (data) {
  return request({
    url: '/product_list',
    method: 'POST',
    data
  })
}
