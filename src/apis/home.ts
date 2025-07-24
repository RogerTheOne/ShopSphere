import http from '@/utils/http'

export function getBannerAPI(): Promise<any> {
  return http({
    url: 'home/banner'
  })
}

/**
 * @description: 
 * @param {*}
 * @return {*}
 */
export const findNewAPI = (): any => {
  return http({
    url:'/home/new'
  })
}