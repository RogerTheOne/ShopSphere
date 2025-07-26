import request from '@/utils/http'

/**
 * @description: Getting category info
 * @param {*} id category id
 * @return {*}
 */
export const getTopCategoryAPI = (id: any): any => {
  return request({
    url:'/category',
    params:{
      id
    }
  })
}