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

/**
 * 获取热榜商品
 * @param {Number} id - 商品id
 * @param {Number} type - 1代表24小时热销榜 2代表周热销榜
 * @param {Number} limit - 获取个数
 */
interface FetchHotGoodsParams {
  id: number
  type: number
  limit?: number
}

export const fetchHotGoodsAPI = ({ id, type, limit = 3 }: FetchHotGoodsParams) => {
  return request({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}
