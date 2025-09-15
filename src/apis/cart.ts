import request from '@/utils/http'

interface InsertCartParams {
  skuId: number
  count: number
}

export const insertCartAPI = ({ skuId, count }: InsertCartParams) => {
  return request({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

export const findNewCartListAPI = () =>{
    return request({
        url: '/member/cart',
    })
}

export const delCartAPI = (ids: any) => {
  return request({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}


export const mergeCartAPI = (data: any) =>{
    return request({
        url: '/member/cart/merge',
        method: 'POST',
        data
    
    })
}
