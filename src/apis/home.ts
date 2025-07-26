import http from '@/utils/http'

interface BannerParams {
  distributionSite?: string // 1: 默认首页，2: 商品页
}

export function getBannerAPI(params: BannerParams = {}): Promise<any> {
  const { distributionSite = '1' } = params
  return http({
    url: '/home/banner',
    params: {
      distributionSite
    }
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