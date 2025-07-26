import http from '@/utils/http'

export function getBannerAPI(): Promise<any> {
  return http({
    url: 'home/banner'
  })
}

/**
 * @description: Fresh Find
 * @param {*}
 * @return {*}
 */
export const findNewAPI = (): any => {
  return http({
    url:'/home/new'
  })
}

/**
 * @description: Influencer Pick
 * @param {*}
 * @return {*}
 */
export const getHotAPI = (): any => {
  return http({
    url:'/home/hot'
  })
}

/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = (): any => {
  return http({
    url: '/home/goods'
  })
}