import request from '@/utils/http'
/**
 * @description: 获取商品详情
 * @param {*} id category id
 * @return {*}
 */

export const getDetail = (id: any) => {
  return request({
    url: '/goods',
    params: {
      id
    }
  })
}