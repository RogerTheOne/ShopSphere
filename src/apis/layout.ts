import http from '@/utils/http'

export function getCategoryAPI(): Promise<any> {
  return http({
    url: 'home/category/head'
  })
}