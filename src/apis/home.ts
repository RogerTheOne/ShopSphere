import http from '@/utils/http'

export function getBannerAPI(): Promise<any> {
  return http({
    url: 'home/banner'
  })
}